/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
import type { ItemModel } from './ItemModel';
export type GitItem = (ItemModel & {
    /**
     * SHA1 of commit item was fetched at
     */
    commitId?: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag, ...)
     */
    gitObjectType?: 'bad' | 'commit' | 'tree' | 'blob' | 'tag' | 'ext2' | 'ofsDelta' | 'refDelta';
    /**
     * Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached
     */
    latestProcessedChange?: GitCommitRef;
    /**
     * Git object id
     */
    objectId?: string;
    /**
     * Git object id
     */
    originalObjectId?: string;
});

