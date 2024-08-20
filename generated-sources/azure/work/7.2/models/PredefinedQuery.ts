/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItem } from './WorkItem';
/**
 * Represents a single pre-defined query.
 */
export type PredefinedQuery = {
    /**
     * Whether or not the query returned the complete set of data or if the data was truncated.
     */
    hasMore?: boolean;
    /**
     * Id of the query
     */
    id?: string;
    /**
     * Localized name of the query
     */
    name?: string;
    /**
     * The results of the query.  This will be a set of WorkItem objects with only the 'id' set.  The client is responsible for paging in the data as needed.
     */
    results?: Array<WorkItem>;
    /**
     * REST API Url to use to retrieve results for this query
     */
    url?: string;
    /**
     * Url to use to display a page in the browser with the results of this query
     */
    webUrl?: string;
};

