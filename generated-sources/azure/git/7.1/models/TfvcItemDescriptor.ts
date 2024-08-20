/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Item path and Version descriptor properties
 */
export type TfvcItemDescriptor = {
    /**
     * Item path.
     */
    path?: string;
    /**
     * Defaults to OneLevel.
     */
    recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full';
    /**
     * Specify the desired version, can be null or empty string only if VersionType is latest or tip.
     */
    version?: string;
    /**
     * Defaults to None.
     */
    versionOption?: 'none' | 'previous' | 'useRename';
    /**
     * Defaults to Latest.
     */
    versionType?: 'none' | 'changeset' | 'shelveset' | 'change' | 'date' | 'latest' | 'tip' | 'mergeSource';
};

