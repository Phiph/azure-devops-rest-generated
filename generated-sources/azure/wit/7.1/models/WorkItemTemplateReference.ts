/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Describes a shallow reference to a work item template.
 */
export type WorkItemTemplateReference = (WorkItemTrackingResource & {
    /**
     * The description of the work item template.
     */
    description?: string;
    /**
     * The identifier of the work item template.
     */
    id?: string;
    /**
     * The name of the work item template.
     */
    name?: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName?: string;
});

