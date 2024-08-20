/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Pull request query input parameters.
 */
export type GitPullRequestQueryInput = {
    /**
     * The list of commit IDs to search for.
     */
    items?: Array<string>;
    /**
     * The type of query to perform.
     */
    type?: 'notSet' | 'lastMergeCommit' | 'commit';
};

