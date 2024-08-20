/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Status information about a requested merge operation.
 */
export type GitMergeOperationStatusDetail = {
    /**
     * Error message if the operation failed.
     */
    failureMessage?: string;
    /**
     * The commitId of the resultant merge commit.
     */
    mergeCommitId?: string;
};

