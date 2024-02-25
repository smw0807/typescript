import { ConfigType } from '@nestjs/config';
import { Inject, Injectable, Logger } from '@nestjs/common';
import emailConfig from 'src/config/emailConfig';
import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

interface EamilOptions {
  to: string;
  subject: string;
  html: string;
}
@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: Mail;

  constructor(@Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>) {
    this.transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  async sendMemberJoinVerification(emailAddress: string, signupVerifyToken: string) {
    this.logger.debug(this.sendMemberJoinVerification.name);
    const baseUrl = this.config.baseUrl;

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const meilOptions: EamilOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
        가입확인 버튼을 누르시면 가입 인증이 완료됩니다.<br/>
        <form action="${url}" method="POST">
          <button>가입확인</button>
        </form>
      `,
    };
    const result = await this.transporter.sendMail(meilOptions);
    this.logger.debug(result);
    return result;
  }
}
