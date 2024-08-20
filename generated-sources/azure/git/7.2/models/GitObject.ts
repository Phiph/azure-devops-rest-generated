/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Git object identifier and type information.
 */
export type GitObject = {
    /**
     * Object Id (Sha1Id).
     */
    objectId?: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag)
     */
    objectType?: 'bad' | 'commit' | 'tree' | 'blob' | 'tag' | 'ext2' | 'ofsDelta' | 'refDelta';
};

