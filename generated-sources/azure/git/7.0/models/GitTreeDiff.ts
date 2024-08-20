/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitTreeDiffEntry } from './GitTreeDiffEntry';
export type GitTreeDiff = {
    /**
     * ObjectId of the base tree of this diff.
     */
    baseTreeId?: string;
    /**
     * List of tree entries that differ between the base and target tree.  Renames and object type changes are returned as a delete for the old object and add for the new object.  If a continuation token is returned in the response header, some tree entries are yet to be processed and may yield more diff entries. If the continuation token is not returned all the diff entries have been included in this response.
     */
    diffEntries?: Array<GitTreeDiffEntry>;
    /**
     * ObjectId of the target tree of this diff.
     */
    targetTreeId?: string;
    /**
     * REST Url to this resource.
     */
    url?: string;
};

