/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitMerge } from '../models/GitMerge';
import type { GitMergeParameters } from '../models/GitMergeParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MergesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Request a git merge operation. Currently we support merging only 2 commits.
     * @returns GitMerge successful operation
     * @throws ApiError
     */
    public mergesCreate({
        organization,
        body,
        project,
        repositoryNameOrId,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Parents commitIds and merge commit messsage.
         */
        body: GitMergeParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The name or ID of the repository.
         */
        repositoryNameOrId: string,
        /**
         * True to include links
         */
        includeLinks?: boolean,
    }): CancelablePromise<GitMerge> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/merges',
            path: {
                'organization': organization,
                'project': project,
                'repositoryNameOrId': repositoryNameOrId,
            },
            query: {
                'includeLinks': includeLinks,
            },
            body: body,
        });
    }
    /**
     * Get a specific merge operation's details.
     * @returns GitMerge successful operation
     * @throws ApiError
     */
    public mergesGet({
        organization,
        project,
        repositoryNameOrId,
        mergeOperationId,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The name or ID of the repository.
         */
        repositoryNameOrId: string,
        /**
         * OperationId of the merge request.
         */
        mergeOperationId: number,
        /**
         * True to include links
         */
        includeLinks?: boolean,
    }): CancelablePromise<GitMerge> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/merges/{mergeOperationId}',
            path: {
                'organization': organization,
                'project': project,
                'repositoryNameOrId': repositoryNameOrId,
                'mergeOperationId': mergeOperationId,
            },
            query: {
                'includeLinks': includeLinks,
            },
        });
    }
}
