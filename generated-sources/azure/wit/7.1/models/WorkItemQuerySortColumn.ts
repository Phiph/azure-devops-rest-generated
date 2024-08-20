/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemFieldReference } from './WorkItemFieldReference';
/**
 * A sort column.
 */
export type WorkItemQuerySortColumn = {
    /**
     * The direction to sort by.
     */
    descending?: boolean;
    /**
     * A work item field.
     */
    field?: WorkItemFieldReference;
};

