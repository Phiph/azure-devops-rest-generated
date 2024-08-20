/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitItemDescriptor } from './GitItemDescriptor';
export type GitItemRequestData = {
    /**
     * Whether to include metadata for all items
     */
    includeContentMetadata?: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks?: boolean;
    /**
     * Collection of items to fetch, including path, version, and recursion level
     */
    itemDescriptors?: Array<GitItemDescriptor>;
    /**
     * Whether to include shallow ref to commit that last changed each item
     */
    latestProcessedChange?: boolean;
};

