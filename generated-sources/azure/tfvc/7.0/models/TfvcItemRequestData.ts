/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcItemDescriptor } from './TfvcItemDescriptor';
/**
 * Request body used by Get Items Batch
 */
export type TfvcItemRequestData = {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata?: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks?: boolean;
    itemDescriptors?: Array<TfvcItemDescriptor>;
};

