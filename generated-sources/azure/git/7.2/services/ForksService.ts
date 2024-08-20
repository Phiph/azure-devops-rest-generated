/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitForkSyncRequest } from '../models/GitForkSyncRequest';
import type { GitForkSyncRequestParameters } from '../models/GitForkSyncRequestParameters';
import type { GitRepositoryRef } from '../models/GitRepositoryRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ForksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve all forks of a repository in the collection.
     * @returns GitRepositoryRef successful operation
     * @throws ApiError
     */
    public forksList({
        organization,
        repositoryNameOrId,
        collectionId,
        project,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryNameOrId: string,
        /**
         * Team project collection ID.
         */
        collectionId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * True to include links.
         */
        includeLinks?: boolean,
    }): CancelablePromise<Array<GitRepositoryRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/forks/{collectionId}',
            path: {
                'organization': organization,
                'repositoryNameOrId': repositoryNameOrId,
                'collectionId': collectionId,
                'project': project,
            },
            query: {
                'includeLinks': includeLinks,
            },
        });
    }
    /**
     * Request that another repository's refs be fetched into this one. It syncs two existing forks. To create a fork, please see the <a href="https://docs.microsoft.com/en-us/rest/api/vsts/git/repositories/create?view=azure-devops-rest-5.1"> repositories endpoint</a>
     * @returns GitForkSyncRequest successful operation
     * @throws ApiError
     */
    public forksCreateForkSyncRequest({
        organization,
        body,
        repositoryNameOrId,
        project,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Source repository and ref mapping.
         */
        body: GitForkSyncRequestParameters,
        /**
         * The name or ID of the repository.
         */
        repositoryNameOrId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * True to include links
         */
        includeLinks?: boolean,
    }): CancelablePromise<GitForkSyncRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests',
            path: {
                'organization': organization,
                'repositoryNameOrId': repositoryNameOrId,
                'project': project,
            },
            query: {
                'includeLinks': includeLinks,
            },
            body: body,
        });
    }
    /**
     * Retrieve all requested fork sync operations on this repository.
     * @returns GitForkSyncRequest successful operation
     * @throws ApiError
     */
    public forksGetForkSyncRequests({
        organization,
        repositoryNameOrId,
        project,
        includeAbandoned,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryNameOrId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * True to include abandoned requests.
         */
        includeAbandoned?: boolean,
        /**
         * True to include links.
         */
        includeLinks?: boolean,
    }): CancelablePromise<Array<GitForkSyncRequest>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests',
            path: {
                'organization': organization,
                'repositoryNameOrId': repositoryNameOrId,
                'project': project,
            },
            query: {
                'includeAbandoned': includeAbandoned,
                'includeLinks': includeLinks,
            },
        });
    }
    /**
     * Get a specific fork sync operation's details.
     * @returns GitForkSyncRequest successful operation
     * @throws ApiError
     */
    public forksGetForkSyncRequest({
        organization,
        repositoryNameOrId,
        forkSyncOperationId,
        project,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryNameOrId: string,
        /**
         * OperationId of the sync request.
         */
        forkSyncOperationId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * True to include links.
         */
        includeLinks?: boolean,
    }): CancelablePromise<GitForkSyncRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}',
            path: {
                'organization': organization,
                'repositoryNameOrId': repositoryNameOrId,
                'forkSyncOperationId': forkSyncOperationId,
                'project': project,
            },
            query: {
                'includeLinks': includeLinks,
            },
        });
    }
}
