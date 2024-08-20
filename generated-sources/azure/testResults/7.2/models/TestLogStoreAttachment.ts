/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Attachment metadata for test attachments from LogStore.
 */
export type TestLogStoreAttachment = {
    /**
     * Attachment type.
     */
    attachmentType?: 'generalAttachment' | 'codeCoverage' | 'consoleLog';
    /**
     * Comment associated with attachment.
     */
    comment?: string;
    /**
     * Attachment created date.
     */
    createdDate?: string;
    /**
     * Attachment file name.
     */
    fileName?: string;
    /**
     * Attachment size.
     */
    size?: number;
    /**
     * Attachment Url.
     */
    url?: string;
};

