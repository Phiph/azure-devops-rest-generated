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
     * Creates a new folder.
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
         * The folder.
         */
        body: Folder,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The full path of the folder.
         */
        path: string,
    }): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/build/folders',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'path': path,
            },
            body: body,
        });
    }
    /**
     * Deletes a definition folder. Definitions and their corresponding builds will also be deleted.
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
         * The full path to the folder.
         */
        path: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/folders',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'path': path,
            },
        });
    }
    /**
     * Updates an existing folder at given  existing path
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
         * The new version of the folder.
         */
        body: Folder,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The full path to the folder.
         */
        path: string,
    }): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/folders',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'path': path,
            },
            body: body,
        });
    }
    /**
     * Gets a list of build definition folders.
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
         * The path to start with.
         */
        path: string,
        /**
         * The order in which folders should be returned.
         */
        queryOrder?: 'none' | 'folderAscending' | 'folderDescending',
    }): CancelablePromise<Array<Folder>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/folders/{path}',
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
}
