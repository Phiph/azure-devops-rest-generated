/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateTagParameters } from '../models/UpdateTagParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds tags to a build.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsAddBuildTags({
        organization,
        body,
        project,
        buildId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The tags to add.
         */
        body: Array<string>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the build.
         */
        buildId: number,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            body: body,
        });
    }
    /**
     * Gets the tags for a build.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsGetBuildTags({
        organization,
        project,
        buildId,
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
         * The ID of the build.
         */
        buildId: number,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
        });
    }
    /**
     * Adds/Removes tags from a build.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsUpdateBuildTags({
        organization,
        body,
        project,
        buildId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The tags to add/remove.
         */
        body: UpdateTagParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the build.
         */
        buildId: number,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            body: body,
        });
    }
    /**
     * Adds a tag to a build.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsAddBuildTag({
        organization,
        project,
        buildId,
        tag,
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
         * The ID of the build.
         */
        buildId: number,
        /**
         * The tag to add.
         */
        tag: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/tags/{tag}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
                'tag': tag,
            },
        });
    }
    /**
     * Removes a tag from a build. NOTE: This API will not work for tags with special characters. To remove tags with special characters, use the PATCH method instead (in 6.0+)
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsDeleteBuildTag({
        organization,
        project,
        buildId,
        tag,
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
         * The ID of the build.
         */
        buildId: number,
        /**
         * The tag to remove.
         */
        tag: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/tags/{tag}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
                'tag': tag,
            },
        });
    }
    /**
     * Adds multiple tags to a definition.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsAddDefinitionTags({
        organization,
        body,
        project,
        definitionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The tags to add.
         */
        body: Array<string>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the definition.
         */
        definitionId: number,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/definitions/{DefinitionId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            body: body,
        });
    }
    /**
     * Gets the tags for a definition.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsGetDefinitionTags({
        organization,
        project,
        definitionId,
        revision,
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
         * The ID of the definition.
         */
        definitionId: number,
        /**
         * The definition revision number. If not specified, uses the latest revision of the definition.
         */
        revision?: number,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{DefinitionId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'revision': revision,
            },
        });
    }
    /**
     * Adds/Removes tags from a definition.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsUpdateDefinitionTags({
        organization,
        body,
        project,
        definitionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The tags to add/remove.
         */
        body: UpdateTagParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the definition.
         */
        definitionId: number,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/definitions/{DefinitionId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            body: body,
        });
    }
    /**
     * Adds a tag to a definition
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsAddDefinitionTag({
        organization,
        project,
        definitionId,
        tag,
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
         * The ID of the definition.
         */
        definitionId: number,
        /**
         * The tag to add.
         */
        tag: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/build/definitions/{DefinitionId}/tags/{tag}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
                'tag': tag,
            },
        });
    }
    /**
     * Removes a tag from a definition. NOTE: This API will not work for tags with special characters. To remove tags with special characters, use the PATCH method instead (in 6.0+)
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsDeleteDefinitionTag({
        organization,
        project,
        definitionId,
        tag,
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
         * The ID of the definition.
         */
        definitionId: number,
        /**
         * The tag to remove.
         */
        tag: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/definitions/{DefinitionId}/tags/{tag}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
                'tag': tag,
            },
        });
    }
    /**
     * Gets a list of all build tags in the project.
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsGetTags({
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
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/tags',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Removes a tag from builds, definitions, and from the tag store
     * @returns string successful operation
     * @throws ApiError
     */
    public tagsDeleteTag({
        organization,
        project,
        tag,
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
         * The tag to remove.
         */
        tag: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/tags/{tag}',
            path: {
                'organization': organization,
                'project': project,
                'tag': tag,
            },
        });
    }
}
