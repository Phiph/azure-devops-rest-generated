/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemDetails } from './WorkItemDetails';
/**
 * This data model is used in Work item-based tabs of Test Plans Library.
 */
export type LibraryWorkItemsData = {
    /**
     * Specifies the column option field names
     */
    columnOptions?: Array<string>;
    /**
     * Continuation token to fetch next set of elements. Present only when HasMoreElements is true.
     */
    continuationToken?: string;
    /**
     * Boolean indicating if the WIQL query has exceeded the limit of items returned.
     */
    exceededWorkItemQueryLimit?: boolean;
    /**
     * Boolean indicating if there are more elements present than what are being sent.
     */
    hasMoreElements?: boolean;
    /**
     * Specifies if there was an error while execution of data provider.
     */
    returnCode?: 'success' | 'error';
    /**
     * List of work items returned when OrderByField is sent something other than Id.
     */
    workItemIds?: Array<number>;
    /**
     * List of work items to be returned.
     */
    workItems?: Array<WorkItemDetails>;
};

