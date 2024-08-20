/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentResourceReference } from './CommentResourceReference';
import type { IdentityRef } from './IdentityRef';
/**
 * Represents an attachment to a comment.
 */
export type CommentAttachment = (CommentResourceReference & {
    /**
     * IdentityRef of the creator of the attachment.
     */
    createdBy?: IdentityRef;
    /**
     * The creation date of the attachment.
     */
    createdDate?: string;
    /**
     * Unique Id of the attachment.
     */
    id?: string;
});

