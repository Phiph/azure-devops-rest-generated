/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitTreeDiff } from './GitTreeDiff';
export type GitTreeDiffResponse = {
    /**
     * The HTTP client methods find the continuation token header in the response and populate this field.
     */
    continuationToken?: Array<string>;
    treeDiff?: GitTreeDiff;
};

