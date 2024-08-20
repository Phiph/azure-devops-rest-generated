/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from '../models/GitCommitRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestCommitsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the commits for the specified pull request.
     * @returns GitCommitRef successful operation
     * @throws ApiError
     */
    public pullRequestCommitsGetPullRequestCommits({
        organization,
        repositoryId,
        pullRequestId,
        project,
        top,
        continuationToken,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID or name of the repository.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Maximum number of commits to return.
         */
        top?: number,
        /**
         * The continuation token used for pagination.
         */
        continuationToken?: string,
    }): CancelablePromise<Array<GitCommitRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/commits',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            query: {
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Get the commits for the specified iteration of a pull request.
     * @returns GitCommitRef successful operation
     * @throws ApiError
     */
    public pullRequestCommitsGetPullRequestIterationCommits({
        organization,
        repositoryId,
        pullRequestId,
        iterationId,
        project,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID or name of the repository.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the iteration from which to get the commits.
         */
        iterationId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Maximum number of commits to return. The maximum number of commits that can be returned per batch is 500.
         */
        top?: number,
        /**
         * Number of commits to skip.
         */
        skip?: number,
    }): CancelablePromise<Array<GitCommitRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/commits',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'iterationId': iterationId,
                'project': project,
            },
            query: {
                'top': top,
                'skip': skip,
            },
        });
    }
}
