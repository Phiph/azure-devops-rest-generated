/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemComment } from './WorkItemComment';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Collection of comments.
 */
export type WorkItemComments = (WorkItemTrackingResource & {
    /**
     * Comments collection.
     */
    comments?: Array<WorkItemComment>;
    /**
     * The count of comments.
     */
    count?: number;
    /**
     * Count of comments from the revision.
     */
    fromRevisionCount?: number;
    /**
     * Total count of comments.
     */
    totalCount?: number;
});

