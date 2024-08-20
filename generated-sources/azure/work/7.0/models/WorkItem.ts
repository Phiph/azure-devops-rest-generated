/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemCommentVersionRef } from './WorkItemCommentVersionRef';
import type { WorkItemRelation } from './WorkItemRelation';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Describes a work item.
 */
export type WorkItem = (WorkItemTrackingResource & {
    /**
     * Reference to a specific version of the comment added/edited/deleted in this revision.
     */
    commentVersionRef?: WorkItemCommentVersionRef;
    /**
     * Map of field and values for the work item.
     */
    fields?: Record<string, any>;
    /**
     * The work item ID.
     */
    id?: number;
    /**
     * Relations of the work item.
     */
    relations?: Array<WorkItemRelation>;
    /**
     * Revision number of the work item.
     */
    rev?: number;
});

