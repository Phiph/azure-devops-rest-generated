/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequestIteration } from '../models/GitPullRequestIteration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestIterationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the list of iterations for the specified pull request.
     * @returns GitPullRequestIteration successful operation
     * @throws ApiError
     */
    public pullRequestIterationsList({
        organization,
        repositoryId,
        pullRequestId,
        project,
        includeCommits,
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
         * If true, include the commits associated with each iteration in the response.
         */
        includeCommits?: boolean,
    }): CancelablePromise<Array<GitPullRequestIteration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            query: {
                'includeCommits': includeCommits,
            },
        });
    }
    /**
     * Get the specified iteration for a pull request.
     * @returns GitPullRequestIteration successful operation
     * @throws ApiError
     */
    public pullRequestIterationsGet({
        organization,
        repositoryId,
        pullRequestId,
        iterationId,
        project,
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
         * ID of the pull request iteration to return.
         */
        iterationId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPullRequestIteration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'iterationId': iterationId,
                'project': project,
            },
        });
    }
}
