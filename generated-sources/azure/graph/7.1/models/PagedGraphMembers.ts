/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphMember } from './GraphMember';
export type PagedGraphMembers = {
    /**
     * This will be non-null if there is another page of data. There will never be more than one continuation token returned by a request.
     */
    continuationToken?: Array<string>;
    /**
     * The enumerable list of members found within a page.
     */
    graphMembers?: Array<GraphMember>;
};

