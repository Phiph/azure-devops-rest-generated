/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitStatus } from '../models/GitStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatusesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create Git commit status.
     * @returns GitStatus successful operation
     * @throws ApiError
     */
    public statusesCreate({
        organization,
        body,
        commitId,
        repositoryId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Git commit status object to create.
         */
        body: GitStatus,
        /**
         * ID of the Git commit.
         */
        commitId: string,
        /**
         * ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitStatus> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/statuses',
            path: {
                'organization': organization,
                'commitId': commitId,
                'repositoryId': repositoryId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get statuses associated with the Git commit.
     * @returns GitStatus successful operation
     * @throws ApiError
     */
    public statusesList({
        organization,
        commitId,
        repositoryId,
        project,
        top,
        skip,
        latestOnly,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the Git commit.
         */
        commitId: string,
        /**
         * ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Optional. The number of statuses to retrieve. Default is 1000.
         */
        top?: number,
        /**
         * Optional. The number of statuses to ignore. Default is 0. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         */
        skip?: number,
        /**
         * The flag indicates whether to get only latest statuses grouped by `Context.Name` and `Context.Genre`.
         */
        latestOnly?: boolean,
    }): CancelablePromise<Array<GitStatus>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/statuses',
            path: {
                'organization': organization,
                'commitId': commitId,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'top': top,
                'skip': skip,
                'latestOnly': latestOnly,
            },
        });
    }
}
