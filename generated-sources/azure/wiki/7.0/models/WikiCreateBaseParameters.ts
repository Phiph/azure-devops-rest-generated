/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base wiki creation parameters.
 */
export type WikiCreateBaseParameters = {
    /**
     * Folder path inside repository which is shown as Wiki. Not required for ProjectWiki type.
     */
    mappedPath?: string;
    /**
     * Wiki name.
     */
    name?: string;
    /**
     * ID of the project in which the wiki is to be created.
     */
    projectId?: string;
    /**
     * ID of the git repository that backs up the wiki. Not required for ProjectWiki type.
     */
    repositoryId?: string;
    /**
     * Type of the wiki.
     */
    type?: 'projectWiki' | 'codeWiki';
};

