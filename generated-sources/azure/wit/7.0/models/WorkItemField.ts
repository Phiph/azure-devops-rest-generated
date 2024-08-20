/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemFieldOperation } from './WorkItemFieldOperation';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Describes a field on a work item and it's properties specific to that work item type.
 */
export type WorkItemField = (WorkItemTrackingResource & {
    /**
     * Indicates whether the field is sortable in server queries.
     */
    canSortBy?: boolean;
    /**
     * The description of the field.
     */
    description?: string;
    /**
     * Indicates whether this field is deleted.
     */
    isDeleted?: boolean;
    /**
     * Indicates whether this field is an identity field.
     */
    isIdentity?: boolean;
    /**
     * Indicates whether this instance is picklist.
     */
    isPicklist?: boolean;
    /**
     * Indicates whether this instance is a suggested picklist .
     */
    isPicklistSuggested?: boolean;
    /**
     * Indicates whether the field can be queried in the server.
     */
    isQueryable?: boolean;
    /**
     * The name of the field.
     */
    name?: string;
    /**
     * If this field is picklist, the identifier of the picklist associated, otherwise null
     */
    picklistId?: string;
    /**
     * Indicates whether the field is [read only].
     */
    readOnly?: boolean;
    /**
     * The reference name of the field.
     */
    referenceName?: string;
    /**
     * The supported operations on this field.
     */
    supportedOperations?: Array<WorkItemFieldOperation>;
    /**
     * The type of the field.
     */
    type?: 'string' | 'integer' | 'dateTime' | 'plainText' | 'html' | 'treePath' | 'history' | 'double' | 'guid' | 'boolean' | 'identity' | 'picklistString' | 'picklistInteger' | 'picklistDouble';
    /**
     * The usage of the field.
     */
    usage?: 'none' | 'workItem' | 'workItemLink' | 'tree' | 'workItemTypeExtension';
});

