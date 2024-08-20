/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { PropertiesCollection } from '../models/PropertiesCollection';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestPropertiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get external properties of the pull request.
     * @returns PropertiesCollection successful operation
     * @throws ApiError
     */
    public pullRequestPropertiesList({
        organization,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The repository ID of the pull request’s target branch.
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
    }): CancelablePromise<PropertiesCollection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/properties',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
    /**
     * Create or update pull request external properties. The patch operation can be `add`, `replace` or `remove`. For `add` operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For `replace` operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For `remove` operation, the path cannot be empty. If the path does not exist, no action will be performed.
     * @returns PropertiesCollection successful operation
     * @throws ApiError
     */
    public pullRequestPropertiesUpdate({
        organization,
        body,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Properties to add, replace or remove in JSON Patch format.
         */
        body: JsonPatchDocument,
        /**
         * The repository ID of the pull request’s target branch.
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
    }): CancelablePromise<PropertiesCollection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/properties',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
}
