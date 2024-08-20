/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameter for creating a git import request when source is Git version control
 */
export type GitImportGitSource = {
    /**
     * Tells if this is a sync request or not
     */
    overwrite?: boolean;
    /**
     * Url for the source repo
     */
    url?: string;
};

