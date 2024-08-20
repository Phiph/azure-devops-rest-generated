/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PullRequest } from '../models/PullRequest';
import type { RepositoryWebhook } from '../models/RepositoryWebhook';
import type { SourceProviderAttributes } from '../models/SourceProviderAttributes';
import type { SourceRepositories } from '../models/SourceRepositories';
import type { SourceRepositoryItem } from '../models/SourceRepositoryItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SourceProvidersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of source providers and their capabilities.
     * @returns SourceProviderAttributes successful operation
     * @throws ApiError
     */
    public sourceProvidersList({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<SourceProviderAttributes>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceproviders',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Gets a list of branches for the given source code repository.
     * @returns string successful operation
     * @throws ApiError
     */
    public sourceProvidersListBranches({
        organization,
        project,
        providerName,
        serviceEndpointId,
        repository,
        branchName,
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
         * The name of the source provider.
         */
        providerName: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
        /**
         * The vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
         */
        repository?: string,
        /**
         * If supplied, the name of the branch to check for specifically.
         */
        branchName?: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/branches',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
            },
            query: {
                'serviceEndpointId': serviceEndpointId,
                'repository': repository,
                'branchName': branchName,
            },
        });
    }
    /**
     * Gets the contents of a file in the given source code repository.
     * @returns string successful operation
     * @throws ApiError
     */
    public sourceProvidersGetFileContents({
        organization,
        project,
        providerName,
        serviceEndpointId,
        repository,
        commitOrBranch,
        path,
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
         * The name of the source provider.
         */
        providerName: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
        /**
         * If specified, the vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
         */
        repository?: string,
        /**
         * The identifier of the commit or branch from which a file's contents are retrieved.
         */
        commitOrBranch?: string,
        /**
         * The path to the file to retrieve, relative to the root of the repository.
         */
        path?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/filecontents',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
            },
            query: {
                'serviceEndpointId': serviceEndpointId,
                'repository': repository,
                'commitOrBranch': commitOrBranch,
                'path': path,
            },
        });
    }
    /**
     * Gets the contents of a directory in the given source code repository.
     * @returns SourceRepositoryItem successful operation
     * @throws ApiError
     */
    public sourceProvidersGetPathContents({
        organization,
        project,
        providerName,
        serviceEndpointId,
        repository,
        commitOrBranch,
        path,
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
         * The name of the source provider.
         */
        providerName: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
        /**
         * If specified, the vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
         */
        repository?: string,
        /**
         * The identifier of the commit or branch from which a file's contents are retrieved.
         */
        commitOrBranch?: string,
        /**
         * The path contents to list, relative to the root of the repository.
         */
        path?: string,
    }): CancelablePromise<Array<SourceRepositoryItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/pathcontents',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
            },
            query: {
                'serviceEndpointId': serviceEndpointId,
                'repository': repository,
                'commitOrBranch': commitOrBranch,
                'path': path,
            },
        });
    }
    /**
     * Gets a pull request object from source provider.
     * @returns PullRequest successful operation
     * @throws ApiError
     */
    public sourceProvidersGetPullRequest({
        organization,
        project,
        providerName,
        pullRequestId,
        repositoryId,
        serviceEndpointId,
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
         * The name of the source provider.
         */
        providerName: string,
        /**
         * Vendor-specific id of the pull request.
         */
        pullRequestId: string,
        /**
         * Vendor-specific identifier or the name of the repository that contains the pull request.
         */
        repositoryId?: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
    }): CancelablePromise<PullRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/pullrequests/{pullRequestId}',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
                'pullRequestId': pullRequestId,
            },
            query: {
                'repositoryId': repositoryId,
                'serviceEndpointId': serviceEndpointId,
            },
        });
    }
    /**
     * Gets a list of source code repositories.
     * @returns SourceRepositories successful operation
     * @throws ApiError
     */
    public sourceProvidersListRepositories({
        organization,
        project,
        providerName,
        serviceEndpointId,
        repository,
        resultSet,
        pageResults,
        continuationToken,
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
         * The name of the source provider.
         */
        providerName: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
        /**
         * If specified, the vendor-specific identifier or the name of a single repository to get.
         */
        repository?: string,
        /**
         * 'top' for the repositories most relevant for the endpoint. If not set, all repositories are returned. Ignored if 'repository' is set.
         */
        resultSet?: 'all' | 'top',
        /**
         * If set to true, this will limit the set of results and will return a continuation token to continue the query.
         */
        pageResults?: boolean,
        /**
         * When paging results, this is a continuation token, returned by a previous call to this method, that can be used to return the next set of repositories.
         */
        continuationToken?: string,
    }): CancelablePromise<SourceRepositories> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/repositories',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
            },
            query: {
                'serviceEndpointId': serviceEndpointId,
                'repository': repository,
                'resultSet': resultSet,
                'pageResults': pageResults,
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Recreates the webhooks for the specified triggers in the given source code repository.
     * @returns any successful operation
     * @throws ApiError
     */
    public sourceProvidersRestoreWebhooks({
        organization,
        body,
        project,
        providerName,
        serviceEndpointId,
        repository,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The types of triggers to restore webhooks for.
         */
        body: Array<string>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The name of the source provider.
         */
        providerName: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
        /**
         * If specified, the vendor-specific identifier or the name of the repository to get webhooks. Can only be omitted for providers that do not support multiple repositories.
         */
        repository?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/webhooks',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
            },
            query: {
                'serviceEndpointId': serviceEndpointId,
                'repository': repository,
            },
            body: body,
        });
    }
    /**
     * Gets a list of webhooks installed in the given source code repository.
     * @returns RepositoryWebhook successful operation
     * @throws ApiError
     */
    public sourceProvidersListWebhooks({
        organization,
        project,
        providerName,
        serviceEndpointId,
        repository,
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
         * The name of the source provider.
         */
        providerName: string,
        /**
         * If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
         */
        serviceEndpointId?: string,
        /**
         * If specified, the vendor-specific identifier or the name of the repository to get webhooks. Can only be omitted for providers that do not support multiple repositories.
         */
        repository?: string,
    }): CancelablePromise<Array<RepositoryWebhook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/sourceProviders/{providerName}/webhooks',
            path: {
                'organization': organization,
                'project': project,
                'providerName': providerName,
            },
            query: {
                'serviceEndpointId': serviceEndpointId,
                'repository': repository,
            },
        });
    }
}
