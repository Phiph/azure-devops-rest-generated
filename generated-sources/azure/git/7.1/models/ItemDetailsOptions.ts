/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Optional details to include when returning an item model
 */
export type ItemDetailsOptions = {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata?: boolean;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full) or None for folder items
     */
    recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full';
};

