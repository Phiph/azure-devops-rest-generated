/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailRecipients } from './EmailRecipients';
export type MailMessage = {
    /**
     * Body of mail.
     */
    body?: string;
    /**
     * Mail CC recipients.
     */
    cc?: EmailRecipients;
    /**
     * Reply to.
     */
    inReplyTo?: string;
    /**
     * Message ID of the mail.
     */
    messageId?: string;
    /**
     * Data when should be replied to mail.
     */
    replyBy?: string;
    /**
     * Reply to Email recipients.
     */
    replyTo?: EmailRecipients;
    /**
     * List of mail section types.
     */
    sections?: Array<'details' | 'environments' | 'issues' | 'testResults' | 'workItems' | 'releaseInfo'>;
    /**
     * Mail sender type.
     */
    senderType?: 'serviceAccount' | 'requestingUser';
    /**
     * Subject of the mail.
     */
    subject?: string;
    /**
     * Mail To recipients.
     */
    to?: EmailRecipients;
};

