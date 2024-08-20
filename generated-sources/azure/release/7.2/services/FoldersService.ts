/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folder } from '../models/Folder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FoldersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * This method is no longer supported. Use CreateFolder with folder parameter API.
     * @returns Folder successful operation
     * @throws ApiError
     */
    public foldersCreate({
        organization,
        body,
        project,
        path,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * folder.
         */
        body: Folder,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Path of the folder.
         */
        path: string,
    }): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/release/folders/{path}',
            path: {
                'organization': organization,
                'project': project,
                'path': path,
            },
            body: body,
        });
    }
    /**
     * Deletes a definition folder for given folder name and path and all it's existing definitions.
     * @returns any successful operation
     * @throws ApiError
     */
    public foldersDelete({
        organization,
        project,
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
         * Path of the folder to delete.
         */
        path: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/release/folders/{path}',
            path: {
                'organization': organization,
                'project': project,
                'path': path,
            },
        });
    }
    /**
     * Gets folders.
     * @returns Folder successful operation
     * @throws ApiError
     */
    public foldersList({
        organization,
        project,
        path,
        queryOrder,
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
         * Path of the folder.
         */
        path: string,
        /**
         * Gets the results in the defined order. Default is 'None'.
         */
        queryOrder?: 'none' | 'ascending' | 'descending',
    }): CancelablePromise<Array<Folder>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/folders/{path}',
            path: {
                'organization': organization,
                'project': project,
                'path': path,
            },
            query: {
                'queryOrder': queryOrder,
            },
        });
    }
    /**
     * Updates an existing folder at given existing path.
     * @returns Folder successful operation
     * @throws ApiError
     */
    public foldersUpdate({
        organization,
        body,
        project,
        path,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * folder.
         */
        body: Folder,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Path of the folder to update.
         */
        path: string,
    }): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/release/folders/{path}',
            path: {
                'organization': organization,
                'project': project,
                'path': path,
            },
            body: body,
        });
    }
}
