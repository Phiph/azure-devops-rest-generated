/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GitItemDescriptor = {
    /**
     * Path to item
     */
    path?: string;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full), or None
     */
    recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full';
    /**
     * Version string (interpretation based on VersionType defined in subclass
     */
    version?: string;
    /**
     * Version modifiers (e.g. previous)
     */
    versionOptions?: 'none' | 'previousChange' | 'firstParent';
    /**
     * How to interpret version (branch,tag,commit)
     */
    versionType?: 'branch' | 'tag' | 'commit';
};

