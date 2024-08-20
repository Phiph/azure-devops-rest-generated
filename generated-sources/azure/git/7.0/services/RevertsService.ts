/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitAsyncRefOperationParameters } from '../models/GitAsyncRefOperationParameters';
import type { GitRevert } from '../models/GitRevert';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevertsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Starts the operation to create a new branch which reverts changes introduced by either a specific commit or commits that are associated to a pull request.
     * @returns GitRevert successful operation
     * @throws ApiError
     */
    public revertsCreate({
        organization,
        body,
        project,
        repositoryId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: GitAsyncRefOperationParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<GitRevert> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/reverts',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            body: body,
        });
    }
    /**
     * Retrieve information about a revert operation for a specific branch.
     * @returns GitRevert successful operation
     * @throws ApiError
     */
    public revertsGetRevertForRefName({
        organization,
        project,
        repositoryId,
        refName,
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
         * ID of the repository.
         */
        repositoryId: string,
        /**
         * The GitAsyncRefOperationParameters generatedRefName used for the revert operation.
         */
        refName: string,
    }): CancelablePromise<GitRevert> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/reverts',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            query: {
                'refName': refName,
            },
        });
    }
    /**
     * Retrieve information about a revert operation by revert Id.
     * @returns GitRevert successful operation
     * @throws ApiError
     */
    public revertsGetRevert({
        organization,
        project,
        revertId,
        repositoryId,
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
         * ID of the revert operation.
         */
        revertId: number,
        /**
         * ID of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<GitRevert> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}',
            path: {
                'organization': organization,
                'project': project,
                'revertId': revertId,
                'repositoryId': repositoryId,
            },
        });
    }
}
