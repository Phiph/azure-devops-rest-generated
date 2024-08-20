/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequest } from './GitPullRequest';
import type { GitPullRequestQueryInput } from './GitPullRequestQueryInput';
/**
 * A set of pull request queries and their results.
 */
export type GitPullRequestQuery = {
    /**
     * The queries to perform.
     */
    queries?: Array<GitPullRequestQueryInput>;
    /**
     * The results of the queries. This matches the QueryInputs list so Results[n] are the results of QueryInputs[n]. Each entry in the list is a dictionary of commit->pull requests.
     */
    results?: Array<Record<string, Array<GitPullRequest>>>;
};

