/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitImportRequest } from '../models/GitImportRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ImportRequestsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create an import request.
     * @returns GitImportRequest successful operation
     * @throws ApiError
     */
    public importRequestsCreate({
        organization,
        body,
        project,
        repositoryId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The import request to create.
         */
        body: GitImportRequest,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<GitImportRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/importRequests',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            body: body,
        });
    }
    /**
     * Retrieve import requests for a repository.
     * @returns GitImportRequest successful operation
     * @throws ApiError
     */
    public importRequestsQuery({
        organization,
        project,
        repositoryId,
        includeAbandoned,
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
        repositoryId: string,
        /**
         * True to include abandoned import requests in the results.
         */
        includeAbandoned?: boolean,
    }): CancelablePromise<Array<GitImportRequest>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/importRequests',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            query: {
                'includeAbandoned': includeAbandoned,
            },
        });
    }
    /**
     * Retrieve a particular import request.
     * @returns GitImportRequest successful operation
     * @throws ApiError
     */
    public importRequestsGet({
        organization,
        project,
        repositoryId,
        importRequestId,
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
        repositoryId: string,
        /**
         * The unique identifier for the import request.
         */
        importRequestId: number,
    }): CancelablePromise<GitImportRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
                'importRequestId': importRequestId,
            },
        });
    }
    /**
     * Retry or abandon a failed import request.
     *
     * There can only be one active import request associated with a repository. Marking a failed import request abandoned makes it inactive.
     * @returns GitImportRequest successful operation
     * @throws ApiError
     */
    public importRequestsUpdate({
        organization,
        body,
        project,
        repositoryId,
        importRequestId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The updated version of the import request. Currently, the only change allowed is setting the Status to Queued or Abandoned.
         */
        body: GitImportRequest,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * The unique identifier for the import request to update.
         */
        importRequestId: number,
    }): CancelablePromise<GitImportRequest> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
                'importRequestId': importRequestId,
            },
            body: body,
        });
    }
}
