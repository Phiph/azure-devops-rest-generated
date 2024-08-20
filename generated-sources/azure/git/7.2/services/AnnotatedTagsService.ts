/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitAnnotatedTag } from '../models/GitAnnotatedTag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AnnotatedTagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create an annotated tag.
     *
     * Repositories have both a name and an identifier. Identifiers are globally unique, but several projects
     * may contain a repository of the same name. You don't need to include the project if you specify a
     * repository by ID. However, if you specify a repository by name, you must also specify the project (by name or ID).
     * @returns GitAnnotatedTag successful operation
     * @throws ApiError
     */
    public annotatedTagsCreate({
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
         * Object containing details of tag to be created.
         */
        body: GitAnnotatedTag,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID or name of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<GitAnnotatedTag> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/annotatedtags',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            body: body,
        });
    }
    /**
     * Get an annotated tag.
     *
     * Repositories have both a name and an identifier. Identifiers are globally unique, but several projects
     * may contain a repository of the same name. You don't need to include the project if you specify a
     * repository by ID. However, if you specify a repository by name, you must also specify the project (by name or ID).
     * @returns GitAnnotatedTag successful operation
     * @throws ApiError
     */
    public annotatedTagsGet({
        organization,
        project,
        repositoryId,
        objectId,
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
         * ID or name of the repository.
         */
        repositoryId: string,
        /**
         * ObjectId (Sha1Id) of tag to get.
         */
        objectId: string,
    }): CancelablePromise<GitAnnotatedTag> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/annotatedtags/{objectId}',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
                'objectId': objectId,
            },
        });
    }
}
