/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequestChange } from './GitPullRequestChange';
/**
 * Collection of changes made in a pull request.
 */
export type GitPullRequestIterationChanges = {
    /**
     * Changes made in the iteration.
     */
    changeEntries?: Array<GitPullRequestChange>;
    /**
     * Value to specify as skip to get the next page of changes.  This will be zero if there are no more changes.
     */
    nextSkip?: number;
    /**
     * Value to specify as top to get the next page of changes.  This will be zero if there are no more changes.
     */
    nextTop?: number;
};

