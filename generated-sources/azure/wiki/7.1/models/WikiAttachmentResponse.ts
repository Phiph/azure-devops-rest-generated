/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiAttachment } from './WikiAttachment';
/**
 * Response contract for the Wiki Attachments API
 */
export type WikiAttachmentResponse = {
    /**
     * Defines properties for wiki attachment file.
     */
    attachment?: WikiAttachment;
    /**
     * Contains the list of ETag values from the response header of the attachments API call. The first item in the list contains the version of the wiki attachment.
     */
    eTag?: Array<string>;
};

