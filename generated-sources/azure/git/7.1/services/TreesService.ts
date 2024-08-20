/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitTreeRef } from '../models/GitTreeRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TreesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * Repositories have both a name and an identifier. Identifiers are globally unique, but several projects may contain a repository of the same name. You don't need to include the project if you specify a repository by ID. However, if you specify a repository by name, you must also specify the project (by name or ID.
     * @returns GitTreeRef successful operation
     * @throws ApiError
     */
    public treesGet({
        organization,
        repositoryId,
        sha1,
        project,
        projectId,
        recursive,
        fileName,
        format,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Repository Id.
         */
        repositoryId: string,
        /**
         * SHA1 hash of the tree object.
         */
        sha1: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Project Id.
         */
        projectId?: string,
        /**
         * Search recursively. Include trees underneath this tree. Default is false.
         */
        recursive?: boolean,
        /**
         * Name to use if a .zip file is returned. Default is the object ID.
         */
        fileName?: string,
        /**
         * Use "zip". Defaults to the MIME type set in the Accept header.
         */
        format?: string,
    }): CancelablePromise<GitTreeRef> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/trees/{sha1}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'sha1': sha1,
                'project': project,
            },
            query: {
                'projectId': projectId,
                'recursive': recursive,
                'fileName': fileName,
                '$format': format,
            },
        });
    }
}
