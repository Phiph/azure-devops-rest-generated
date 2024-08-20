/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTagDefinition } from '../models/WorkItemTagDefinition';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all the tags for the project.
     * @returns WorkItemTagDefinition successful operation
     * @throws ApiError
     */
    public tagsList({
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
    }): CancelablePromise<Array<WorkItemTagDefinition>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/tags',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Delete the tag for the project. Please note, that the deleted tag will be removed from all Work Items as well as Pull Requests.
     * @returns any successful operation
     * @throws ApiError
     */
    public tagsDelete({
        organization,
        project,
        tagIdOrName,
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
         * Tag ID or tag name.
         */
        tagIdOrName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/tags/{tagIdOrName}',
            path: {
                'organization': organization,
                'project': project,
                'tagIdOrName': tagIdOrName,
            },
        });
    }
    /**
     * Get the tag for the project.
     * @returns WorkItemTagDefinition successful operation
     * @throws ApiError
     */
    public tagsGet({
        organization,
        project,
        tagIdOrName,
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
         * Tag ID or tag name.
         */
        tagIdOrName: string,
    }): CancelablePromise<WorkItemTagDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/tags/{tagIdOrName}',
            path: {
                'organization': organization,
                'project': project,
                'tagIdOrName': tagIdOrName,
            },
        });
    }
    /**
     * Update the tag for the project.
     * @returns WorkItemTagDefinition successful operation
     * @throws ApiError
     */
    public tagsUpdate({
        organization,
        body,
        project,
        tagIdOrName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemTagDefinition,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Tag ID or tag name.
         */
        tagIdOrName: string,
    }): CancelablePromise<WorkItemTagDefinition> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/tags/{tagIdOrName}',
            path: {
                'organization': organization,
                'project': project,
                'tagIdOrName': tagIdOrName,
            },
            body: body,
        });
    }
}
