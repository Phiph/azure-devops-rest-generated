/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
/**
 * GitAsyncRefOperationSource specifies the pull request or list of commits to use when making a cherry pick and revert operation request. Only one should be provided.
 */
export type GitAsyncRefOperationSource = {
    /**
     * A list of commits to cherry pick or revert
     */
    commitList?: Array<GitCommitRef>;
    /**
     * Id of the pull request to cherry pick or revert
     */
    pullRequestId?: number;
};

