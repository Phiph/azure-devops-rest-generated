/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommit } from '../models/GitCommit';
import type { GitCommitChanges } from '../models/GitCommitChanges';
import type { GitCommitRef } from '../models/GitCommitRef';
import type { GitQueryCommitsCriteria } from '../models/GitQueryCommitsCriteria';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommitsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of commits associated with a particular push.
     * @returns GitCommitRef successful operation
     * @throws ApiError
     */
    public commitsGetPushCommits({
        organization,
        repositoryId,
        pushId,
        project,
        top,
        skip,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         */
        repositoryId: string,
        /**
         * The id of the push.
         */
        pushId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The maximum number of commits to return ("get the top x commits").
         */
        top?: number,
        /**
         * The number of commits to skip.
         */
        skip?: number,
        /**
         * Set to false to avoid including REST Url links for resources. Defaults to true.
         */
        includeLinks?: boolean,
    }): CancelablePromise<Array<GitCommitRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/commits',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'pushId': pushId,
                'top': top,
                'skip': skip,
                'includeLinks': includeLinks,
            },
        });
    }
    /**
     * Retrieve a particular commit.
     * @returns GitCommit successful operation
     * @throws ApiError
     */
    public commitsGet({
        organization,
        commitId,
        repositoryId,
        project,
        changeCount,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The id of the commit.
         */
        commitId: string,
        /**
         * The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The number of changes to include in the result.
         */
        changeCount?: number,
    }): CancelablePromise<GitCommit> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}',
            path: {
                'organization': organization,
                'commitId': commitId,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'changeCount': changeCount,
            },
        });
    }
    /**
     * Retrieve changes for a particular commit.
     * @returns GitCommitChanges successful operation
     * @throws ApiError
     */
    public commitsGetChanges({
        organization,
        commitId,
        repositoryId,
        project,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The id of the commit.
         */
        commitId: string,
        /**
         * The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The maximum number of changes to return.
         */
        top?: number,
        /**
         * The number of changes to skip.
         */
        skip?: number,
    }): CancelablePromise<GitCommitChanges> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/changes',
            path: {
                'organization': organization,
                'commitId': commitId,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'top': top,
                'skip': skip,
            },
        });
    }
    /**
     * Retrieve git commits for a project matching the search criteria
     * @returns GitCommitRef successful operation
     * @throws ApiError
     */
    public commitsGetCommitsBatch({
        organization,
        body,
        repositoryId,
        project,
        skip,
        top,
        includeStatuses,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Search options
         */
        body: GitQueryCommitsCriteria,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Number of commits to skip.
         */
        skip?: number,
        /**
         * Maximum number of commits to return.
         */
        top?: number,
        /**
         * True to include additional commit status information.
         */
        includeStatuses?: boolean,
    }): CancelablePromise<Array<GitCommitRef>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/commitsbatch',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                '$skip': skip,
                '$top': top,
                'includeStatuses': includeStatuses,
            },
            body: body,
        });
    }
}
