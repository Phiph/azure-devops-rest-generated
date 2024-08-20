/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contract encapsulating parameters for the pages batch.
 */
export type WikiPagesBatchRequest = {
    /**
     * If the list of page data returned is not complete, a continuation token to query next batch of pages is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of Wiki Page Data.
     */
    continuationToken?: string;
    /**
     * last N days from the current day for which page views is to be returned. It's inclusive of current day.
     */
    pageViewsForDays?: number;
    /**
     * Total count of pages on a wiki to return.
     */
    top?: number;
};

