/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Represents a list of work item comments.
 */
export type CommentList = (WorkItemTrackingResource & {
    /**
     * List of comments in the current batch.
     */
    comments?: Array<Comment>;
    /**
     * A string token that can be used to retrieving next page of comments if available. Otherwise null.
     */
    continuationToken?: string;
    /**
     * The count of comments in the current batch.
     */
    count?: number;
    /**
     * Uri to the next page of comments if it is available. Otherwise null.
     */
    nextPage?: string;
    /**
     * Total count of comments on a work item.
     */
    totalCount?: number;
});

