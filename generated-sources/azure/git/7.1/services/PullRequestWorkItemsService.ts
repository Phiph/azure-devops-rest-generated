/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResourceRef } from '../models/ResourceRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestWorkItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of work items associated with a pull request.
     * @returns ResourceRef successful operation
     * @throws ApiError
     */
    public pullRequestWorkItemsList({
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
         * ID or name of the repository.
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
    }): CancelablePromise<Array<ResourceRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/workitems',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
}
