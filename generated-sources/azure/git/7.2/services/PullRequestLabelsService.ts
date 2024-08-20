/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebApiCreateTagRequestData } from '../models/WebApiCreateTagRequestData';
import type { WebApiTagDefinition } from '../models/WebApiTagDefinition';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestLabelsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a tag (if that does not exists yet) and add that as a label (tag) for a specified pull request. The only required field is the name of the new label (tag).
     * @returns WebApiTagDefinition successful operation
     * @throws ApiError
     */
    public pullRequestLabelsCreate({
        organization,
        body,
        repositoryId,
        pullRequestId,
        project,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Label to assign to the pull request.
         */
        body: WebApiCreateTagRequestData,
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
        /**
         * Project ID or project name.
         */
        projectId?: string,
    }): CancelablePromise<WebApiTagDefinition> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            query: {
                'projectId': projectId,
            },
            body: body,
        });
    }
    /**
     * Get all the labels (tags) assigned to a pull request.
     * @returns WebApiTagDefinition successful operation
     * @throws ApiError
     */
    public pullRequestLabelsList({
        organization,
        repositoryId,
        pullRequestId,
        project,
        projectId,
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
        /**
         * Project ID or project name.
         */
        projectId?: string,
    }): CancelablePromise<Array<WebApiTagDefinition>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            query: {
                'projectId': projectId,
            },
        });
    }
    /**
     * Removes a label (tag) from the set of those assigned to the pull request. The tag itself will not be deleted.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestLabelsDelete({
        organization,
        repositoryId,
        pullRequestId,
        labelIdOrName,
        project,
        projectId,
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
         * The name or ID of the label requested.
         */
        labelIdOrName: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Project ID or project name.
         */
        projectId?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'labelIdOrName': labelIdOrName,
                'project': project,
            },
            query: {
                'projectId': projectId,
            },
        });
    }
    /**
     * Retrieves a single label (tag) that has been assigned to a pull request.
     * @returns WebApiTagDefinition successful operation
     * @throws ApiError
     */
    public pullRequestLabelsGet({
        organization,
        repositoryId,
        pullRequestId,
        labelIdOrName,
        project,
        projectId,
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
         * The name or ID of the label requested.
         */
        labelIdOrName: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Project ID or project name.
         */
        projectId?: string,
    }): CancelablePromise<WebApiTagDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'labelIdOrName': labelIdOrName,
                'project': project,
            },
            query: {
                'projectId': projectId,
            },
        });
    }
}
