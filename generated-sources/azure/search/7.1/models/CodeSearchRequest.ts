/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchRequest } from './EntitySearchRequest';
/**
 * Defines a code search request.
 */
export type CodeSearchRequest = (EntitySearchRequest & {
    /**
     * Flag to opt for including matched code snippet in the result. Default behavior is false.
     */
    includeSnippet?: boolean;
});

