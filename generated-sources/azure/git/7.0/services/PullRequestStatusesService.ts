/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequestStatus } from '../models/GitPullRequestStatus';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestStatusesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a pull request status.
     *
     * The only required field for the status is `Context.Name` that uniquely identifies the status.
     * Note that you can specify iterationId in the request body to post the status on the iteration.
     * @returns GitPullRequestStatus successful operation
     * @throws ApiError
     */
    public pullRequestStatusesCreate({
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
         * Pull request status to create.
         */
        body: GitPullRequestStatus,
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
    }): CancelablePromise<GitPullRequestStatus> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get all the statuses associated with a pull request.
     * @returns GitPullRequestStatus successful operation
     * @throws ApiError
     */
    public pullRequestStatusesList({
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
    }): CancelablePromise<Array<GitPullRequestStatus>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
    /**
     * Update pull request statuses collection. The only supported operation type is `remove`.
     *
     * This operation allows to delete multiple statuses in one call.
     * The path of the `remove` operation should refer to the ID of the pull request status.
     * For example `path="/1"` refers to the pull request status with ID 1.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestStatusesUpdate({
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
         * Operations to apply to the pull request statuses in JSON Patch format.
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
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete pull request status.
     *
     * You can remove multiple statuses in one call by using Update operation.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestStatusesDelete({
        organization,
        repositoryId,
        pullRequestId,
        statusId,
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
         * ID of the pull request status.
         */
        statusId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'statusId': statusId,
                'project': project,
            },
        });
    }
    /**
     * Get the specific pull request status by ID. The status ID is unique within the pull request across all iterations.
     * @returns GitPullRequestStatus successful operation
     * @throws ApiError
     */
    public pullRequestStatusesGet({
        organization,
        repositoryId,
        pullRequestId,
        statusId,
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
         * ID of the pull request status.
         */
        statusId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPullRequestStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'statusId': statusId,
                'project': project,
            },
        });
    }
}
