/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GitTreeDiffEntry = {
    /**
     * SHA1 hash of the object in the base tree, if it exists. Will be null in case of adds.
     */
    baseObjectId?: string;
    /**
     * Type of change that affected this entry.
     */
    changeType?: 'none' | 'add' | 'edit' | 'encoding' | 'rename' | 'delete' | 'undelete' | 'branch' | 'merge' | 'lock' | 'rollback' | 'sourceRename' | 'targetRename' | 'property' | 'all';
    /**
     * Object type of the tree entry. Blob, Tree or Commit("submodule")
     */
    objectType?: 'bad' | 'commit' | 'tree' | 'blob' | 'tag' | 'ext2' | 'ofsDelta' | 'refDelta';
    /**
     * Relative path in base and target trees.
     */
    path?: string;
    /**
     * SHA1 hash of the object in the target tree, if it exists. Will be null in case of deletes.
     */
    targetObjectId?: string;
};

