/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GitVersionDescriptor = {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    version?: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    versionOptions?: 'none' | 'previousChange' | 'firstParent';
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    versionType?: 'branch' | 'tag' | 'commit';
};

