/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
import type { WorkItemTypeReference } from './WorkItemTypeReference';
/**
 * Describes a work item type category.
 */
export type WorkItemTypeCategory = (WorkItemTrackingResource & {
    /**
     * Gets or sets the default type of the work item.
     */
    defaultWorkItemType?: WorkItemTypeReference;
    /**
     * The name of the category.
     */
    name?: string;
    /**
     * The reference name of the category.
     */
    referenceName?: string;
    /**
     * The work item types that belong to the category.
     */
    workItemTypes?: Array<WorkItemTypeReference>;
});

