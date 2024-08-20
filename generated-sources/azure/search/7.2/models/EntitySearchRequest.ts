/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchRequestBase } from './EntitySearchRequestBase';
import type { SortOption } from './SortOption';
/**
 * Base contract for search request types without scroll support.
 */
export type EntitySearchRequest = (EntitySearchRequestBase & {
    /**
     * Options for sorting search results. If set to null, the results will be returned sorted by relevance. If more than one sort option is provided, the results are sorted in the order specified in the OrderBy.
     */
    $orderBy?: Array<SortOption>;
    /**
     * Number of results to be skipped.
     */
    $skip?: number;
    /**
     * Number of results to be returned.
     */
    $top?: number;
    /**
     * Flag to opt for faceting in the result. Default behavior is false.
     */
    includeFacets?: boolean;
});

