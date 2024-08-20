/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitHubConnectionRepoModel } from './GitHubConnectionRepoModel';
/**
 * Describes Github connection's repo bulk request
 */
export type GitHubConnectionReposBatchRequest = {
    /**
     * Requested repos urls
     */
    gitHubRepositoryUrls?: Array<GitHubConnectionRepoModel>;
    /**
     * Operation type (f. e. add, remove)
     */
    operationType?: string;
};

