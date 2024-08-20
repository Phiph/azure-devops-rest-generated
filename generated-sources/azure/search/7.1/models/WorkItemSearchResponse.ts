/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchResponse } from './EntitySearchResponse';
import type { WorkItemResult } from './WorkItemResult';
/**
 * Defines a response item that is returned for a work item search request.
 */
export type WorkItemSearchResponse = (EntitySearchResponse & {
    /**
     * Total number of matched work items.
     */
    count?: number;
    /**
     * List of top matched work items.
     */
    results?: Array<WorkItemResult>;
});

