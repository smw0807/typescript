interface IUser {
  user: string;
  comment: number[];
  admin: boolean;
}
function c({ user, comment, admin }: IUser): void {
  console.log(user, comment, admin);
}

c({ user: 'kim', comment: [3, 5, 4], admin: false });
