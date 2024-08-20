/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchResponse } from './EntitySearchResponse';
import type { WikiResult } from './WikiResult';
/**
 * Defines a wiki search response item.
 */
export type WikiSearchResponse = (EntitySearchResponse & {
    /**
     * Total number of matched wiki documents.
     */
    count?: number;
    /**
     * List of top matched wiki documents.
     */
    results?: Array<WikiResult>;
});

