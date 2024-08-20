/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityReference } from './IdentityReference';
import type { WorkItemFieldUpdate } from './WorkItemFieldUpdate';
import type { WorkItemRelationUpdates } from './WorkItemRelationUpdates';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Describes an update to a work item.
 */
export type WorkItemUpdate = (WorkItemTrackingResource & {
    /**
     * List of updates to fields.
     */
    fields?: Record<string, WorkItemFieldUpdate>;
    /**
     * ID of update.
     */
    id?: number;
    /**
     * List of updates to relations.
     */
    relations?: WorkItemRelationUpdates;
    /**
     * The revision number of work item update.
     */
    rev?: number;
    /**
     * Identity for the work item update.
     */
    revisedBy?: IdentityReference;
    /**
     * The work item updates revision date.
     */
    revisedDate?: string;
    /**
     * The work item ID.
     */
    workItemId?: number;
});

