/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourceRepository } from './SourceRepository';
/**
 * A set of repositories returned from the source provider.
 */
export type SourceRepositories = {
    /**
     * A token used to continue this paged request; 'null' if the request is complete
     */
    continuationToken?: string;
    /**
     * The number of repositories requested for each page
     */
    pageLength?: number;
    /**
     * A list of repositories
     */
    repositories?: Array<SourceRepository>;
    /**
     * The total number of pages, or '-1' if unknown
     */
    totalPageCount?: number;
};

