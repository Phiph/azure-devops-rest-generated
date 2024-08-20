/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailRecipients } from './EmailRecipients';
export type MailMessage = {
    /**
     * The mail body in HTML format.
     */
    body?: string;
    /**
     * CC recipients.
     */
    cc?: EmailRecipients;
    /**
     * The in-reply-to header value
     */
    inReplyTo?: string;
    /**
     * The Message Id value
     */
    messageId?: string;
    /**
     * Reply To recipients.
     */
    replyTo?: EmailRecipients;
    /**
     * The mail subject.
     */
    subject?: string;
    /**
     * To recipients
     */
    to?: EmailRecipients;
};

