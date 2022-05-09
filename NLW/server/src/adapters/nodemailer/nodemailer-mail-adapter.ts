import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9c72941196cf1a",
    pass: "5f4d1638a284a1"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Fernandes <batata@gmail.com>',
      subject,
      html: body,
    });
  };
}