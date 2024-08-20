/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TestAttachment = {
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
     * Attachment file name
     */
    fileName?: string;
    /**
     * ID of the attachment.
     */
    id?: number;
    /**
     * Attachment size.
     */
    size?: number;
    /**
     * Attachment Url.
     */
    url?: string;
};

