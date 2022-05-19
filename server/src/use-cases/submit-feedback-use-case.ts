import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

export interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
    await this.feedbacksRepository.create({ type, comment, screenshot });
    await this.mailAdapter.sendMail({
      subject: "Feedback submitted",
      body: [
        `<div style="font-family: san-serif; fonte-size: 16px; collor: #222;">`,
        `<h1>Feedback</h1>`,
        `<p>Type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : "",
        `</div>`,
      ].join("\n"),
    });
  }
}
