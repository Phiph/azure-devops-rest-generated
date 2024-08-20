/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base class for search request types.
 */
export type EntitySearchRequestBase = {
    /**
     * Filters to be applied. Set it to null if there are no filters to be applied.
     */
    filters?: Record<string, Array<string>>;
    /**
     * The search text.
     */
    searchText?: string;
};

