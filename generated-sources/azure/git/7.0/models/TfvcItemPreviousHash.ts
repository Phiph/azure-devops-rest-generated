/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcItem } from './TfvcItem';
/**
 * Metadata for an item including the previous hash value for files.
 */
export type TfvcItemPreviousHash = (TfvcItem & {
    /**
     * MD5 hash as a base 64 string, applies to files only.
     */
    previousHashValue?: string;
});

