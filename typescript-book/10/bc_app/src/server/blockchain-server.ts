import * as WebSocket from 'ws';
import { Message, MessageTypes, UUID } from '../shared/messages';
import { MessageServer } from './message-server';

type Replies = Map<WebSocket, Message>;

export class BlockchainServer extends MessageServer<Message> {
  private readonly receivedMessagesAwaitingResponse = new Map<
    UUID,
    WebSocket
  >();

  // 클라이언트의 응답에 누적기로 사용됩니다.
  private readonly sentMessagesAwaitingReply = new Map<UUID, Replies>();

  protected handleMessage(sender: WebSocket, message: Message): void {
    switch (message.type) {
      case MessageTypes.GetLongestChainRequest:
        return this.handleGetLongestChainRequest(sender, message);
      case MessageTypes.GetLongestChainResponse:
        return this.handleGetLongestChainResponse(sender, message);
      case MessageTypes.NewBlockRequest:
        return this.handleAddTransactionsRequest(sender, message);
      case MessageTypes.NewBlockAnnouncement:
        return this.handleNewBlockAnnouncement(sender, message);
      default: {
        console.log(`Received message of unknown type: "${message.type}"`);
      }
    }
  }

  private handleGetLongestChainRequest(
    requestor: WebSocket,
    message: Message
  ): void {
    // 네트워크에 다른 노드가 있으면 체인에 대해 물어봅니다.
    // 그렇지 않으면 빈 배열로 요청자에게 즉시 회신합니다.
    if (this.clientIsNotAlone) {
      this.receivedMessagesAwaitingResponse.set(
        message.correlationId,
        requestor
      );
      this.sentMessagesAwaitingReply.set(message.correlationId, new Map()); // Map accumulates replies from clients
      this.broadcastExcept(requestor, message);
    } else {
      this.replyTo(requestor, {
        type: MessageTypes.GetLongestChainResponse,
        correlationId: message.correlationId,
        payload: [],
      });
    }
  }

  private handleGetLongestChainResponse(
    sender: WebSocket,
    message: Message
  ): void {
    if (this.receivedMessagesAwaitingResponse.has(message.correlationId)) {
      const requestor = this.receivedMessagesAwaitingResponse.get(
        message.correlationId
      );

      if (this.everyoneReplied(sender, message)) {
        const allReplies = this.sentMessagesAwaitingReply
          .get(message.correlationId)
          .values();
        const longestChain = Array.from(allReplies).reduce(
          this.selectTheLongestChain
        );
        this.replyTo(requestor, longestChain);
      }
    }
  }

  private handleAddTransactionsRequest(
    requestor: WebSocket,
    message: Message
  ): void {
    this.broadcastExcept(requestor, message);
  }

  private handleNewBlockAnnouncement(
    requestor: WebSocket,
    message: Message
  ): void {
    this.broadcastExcept(requestor, message);
  }

  // 참고: 서버가 가장 긴 체인을 요청한 후 클라이언트가 추가되거나 제거되지 않은 것으로 가정하는 순진한 구현입니다.
  // 그렇지 않으면 서버는 요청을 수신하지 않은 클라이언트의 응답을 기다릴 수 있습니다.
  private everyoneReplied(sender: WebSocket, message: Message): boolean {
    const repliedClients = this.sentMessagesAwaitingReply
      .get(message.correlationId)
      .set(sender, message);

    const awaitingForClients = Array.from(this.clients).filter(
      (c) => !repliedClients.has(c)
    );

    return awaitingForClients.length === 1; // 1 - 요청한 사람
  }

  private selectTheLongestChain(
    currentlyLongest: Message,
    current: Message,
    index: number
  ) {
    return index > 0 && current.payload.length > currentlyLongest.payload.length
      ? current
      : currentlyLongest;
  }

  private get clientIsNotAlone(): boolean {
    return this.clients.size > 1;
  }
}
