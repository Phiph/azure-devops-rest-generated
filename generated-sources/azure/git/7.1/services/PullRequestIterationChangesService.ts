/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequestIterationChanges } from '../models/GitPullRequestIterationChanges';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestIterationChangesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve the changes made in a pull request between two iterations.
     * @returns GitPullRequestIterationChanges successful operation
     * @throws ApiError
     */
    public pullRequestIterationChangesGet({
        organization,
        repositoryId,
        pullRequestId,
        iterationId,
        project,
        top,
        skip,
        compareTo,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the pull request iteration. <br /> Iteration one is the head of the source branch at the time the pull request is created and subsequent iterations are created when there are pushes to the source branch. Allowed values are between 1 and the maximum iteration on this pull request.
         */
        iterationId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Optional. The number of changes to retrieve.  The default value is 100 and the maximum value is 2000.
         */
        top?: number,
        /**
         * Optional. The number of changes to ignore.  For example, to retrieve changes 101-150, set top 50 and skip to 100.
         */
        skip?: number,
        /**
         * ID of the pull request iteration to compare against.  The default value is zero which indicates the comparison is made against the common commit between the source and target branches
         */
        compareTo?: number,
    }): CancelablePromise<GitPullRequestIterationChanges> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/changes',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'iterationId': iterationId,
                'project': project,
            },
            query: {
                '$top': top,
                '$skip': skip,
                '$compareTo': compareTo,
            },
        });
    }
}
