/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityReference } from './IdentityReference';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Comment on Work Item
 */
export type WorkItemComment = (WorkItemTrackingResource & {
    /**
     * Represents the possible types for the comment format.
     */
    format?: 'markdown' | 'html';
    /**
     * The text of the comment in HTML format.
     */
    renderedText?: string;
    /**
     * Identity of user who added the comment.
     */
    revisedBy?: IdentityReference;
    /**
     * The date of comment.
     */
    revisedDate?: string;
    /**
     * The work item revision number.
     */
    revision?: number;
    /**
     * The text of the comment.
     */
    text?: string;
});

