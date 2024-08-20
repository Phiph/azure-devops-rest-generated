/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphUser } from './GraphUser';
export type PagedGraphUsers = {
    /**
     * This will be non-null if there is another page of data. There will never be more than one continuation token returned by a request.
     */
    continuationToken?: Array<string>;
    /**
     * The enumerable set of users found within a page.
     */
    graphUsers?: Array<GraphUser>;
};

