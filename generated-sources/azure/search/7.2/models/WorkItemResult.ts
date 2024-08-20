/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Project } from './Project';
import type { WorkItemHit } from './WorkItemHit';
/**
 * Defines the work item result that matched a work item search request.
 */
export type WorkItemResult = {
    /**
     * A standard set of work item fields and their values.
     */
    fields?: Record<string, string>;
    /**
     * Highlighted snippets of fields that match the search request. The list is sorted by relevance of the snippets.
     */
    hits?: Array<WorkItemHit>;
    /**
     * Project details of the work item.
     */
    project?: Project;
    /**
     * Reference to the work item.
     */
    url?: string;
};

