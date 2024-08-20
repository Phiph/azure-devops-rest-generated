/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitAsyncRefOperationParameters } from '../models/GitAsyncRefOperationParameters';
import type { GitCherryPick } from '../models/GitCherryPick';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CherryPicksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Cherry pick a specific commit or commits that are associated to a pull request into a new branch.
     * @returns GitCherryPick successful operation
     * @throws ApiError
     */
    public cherryPicksCreate({
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
    }): CancelablePromise<GitCherryPick> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/cherryPicks',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            body: body,
        });
    }
    /**
     * Retrieve information about a cherry pick operation for a specific branch. This operation is expensive due to the underlying object structure, so this API only looks at the 1000 most recent cherry pick operations.
     * @returns GitCherryPick successful operation
     * @throws ApiError
     */
    public cherryPicksGetCherryPickForRefName({
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
         * The GitAsyncRefOperationParameters generatedRefName used for the cherry pick operation.
         */
        refName: string,
    }): CancelablePromise<GitCherryPick> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/cherryPicks',
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
     * Retrieve information about a cherry pick operation by cherry pick Id.
     * @returns GitCherryPick successful operation
     * @throws ApiError
     */
    public cherryPicksGetCherryPick({
        organization,
        project,
        cherryPickId,
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
         * ID of the cherry pick.
         */
        cherryPickId: number,
        /**
         * ID of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<GitCherryPick> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}',
            path: {
                'organization': organization,
                'project': project,
                'cherryPickId': cherryPickId,
                'repositoryId': repositoryId,
            },
        });
    }
}
