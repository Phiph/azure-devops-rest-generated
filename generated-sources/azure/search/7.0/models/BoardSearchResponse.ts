/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardResult } from './BoardResult';
import type { EntitySearchResponse } from './EntitySearchResponse';
/**
 * Defines a Board search response item.
 */
export type BoardSearchResponse = (EntitySearchResponse & {
    /**
     * Total number of matched Board documents.
     */
    count?: number;
    /**
     * List of top matched Board documents.
     */
    results?: Array<BoardResult>;
});

