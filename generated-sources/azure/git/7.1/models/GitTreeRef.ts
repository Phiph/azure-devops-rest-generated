/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitTreeEntryRef } from './GitTreeEntryRef';
import type { ReferenceLinks } from './ReferenceLinks';
export type GitTreeRef = {
    _links?: ReferenceLinks;
    /**
     * SHA1 hash of git object
     */
    objectId?: string;
    /**
     * Sum of sizes of all children
     */
    size?: number;
    /**
     * Blobs and trees under this tree
     */
    treeEntries?: Array<GitTreeEntryRef>;
    /**
     * Url to tree
     */
    url?: string;
};

