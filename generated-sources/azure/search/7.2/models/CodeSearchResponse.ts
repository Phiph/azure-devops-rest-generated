/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeResult } from './CodeResult';
import type { EntitySearchResponse } from './EntitySearchResponse';
/**
 * Defines a code search response item.
 */
export type CodeSearchResponse = (EntitySearchResponse & {
    /**
     * Total number of matched files.
     */
    count?: number;
    /**
     * List of matched files.
     */
    results?: Array<CodeResult>;
});

