/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResourceReference } from './WorkItemTrackingResourceReference';
/**
 * Represents the reference to a specific version of a comment on a Work Item.
 */
export type WorkItemCommentVersionRef = (WorkItemTrackingResourceReference & {
    /**
     * The id assigned to the comment.
     */
    commentId?: number;
    /**
     * [Internal] The work item revision where this comment was originally added.
     */
    createdInRevision?: number;
    /**
     * [Internal] Specifies whether comment was deleted.
     */
    isDeleted?: boolean;
    /**
     * [Internal] The text of the comment.
     */
    text?: string;
    /**
     * The version number.
     */
    version?: number;
});

