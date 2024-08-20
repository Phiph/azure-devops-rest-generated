/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemFieldReference } from './WorkItemFieldReference';
import type { WorkItemLink } from './WorkItemLink';
import type { WorkItemQuerySortColumn } from './WorkItemQuerySortColumn';
import type { WorkItemReference } from './WorkItemReference';
/**
 * The result of a work item query.
 */
export type WorkItemQueryResult = {
    /**
     * The date the query was run in the context of.
     */
    asOf?: string;
    /**
     * The columns of the query.
     */
    columns?: Array<WorkItemFieldReference>;
    /**
     * The result type
     */
    queryResultType?: 'workItem' | 'workItemLink';
    /**
     * The type of the query
     */
    queryType?: 'flat' | 'tree' | 'oneHop';
    /**
     * The sort columns of the query.
     */
    sortColumns?: Array<WorkItemQuerySortColumn>;
    /**
     * The work item links returned by the query.
     */
    workItemRelations?: Array<WorkItemLink>;
    /**
     * The work items returned by the query.
     */
    workItems?: Array<WorkItemReference>;
};

