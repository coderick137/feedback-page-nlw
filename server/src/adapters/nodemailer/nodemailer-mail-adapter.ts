import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2cb07baad680ea",
    pass: "01aa6e8a8c9a83",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: '"Feedback" <ricardinhoangelo@gmsil.com>',
      to: "Rick anjos <ricardoanj.14@gmail.com>",
      subject,
      html: body,
    });
  }
}
