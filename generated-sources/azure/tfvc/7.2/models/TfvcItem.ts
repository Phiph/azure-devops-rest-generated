/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemModel } from './ItemModel';
/**
 * Metadata for an item.
 */
export type TfvcItem = (ItemModel & {
    /**
     * Item changed datetime.
     */
    changeDate?: string;
    /**
     * Greater than 0 if item is deleted.
     */
    deletionId?: number;
    /**
     * File encoding from database, -1 represents binary.
     */
    encoding?: number;
    /**
     * MD5 hash as a base 64 string, applies to files only.
     */
    hashValue?: string;
    /**
     * True if item is a branch.
     */
    isBranch?: boolean;
    /**
     * True if there is a change pending.
     */
    isPendingChange?: boolean;
    /**
     * The size of the file, if applicable.
     */
    size?: number;
    /**
     * Changeset version Id.
     */
    version?: number;
});

