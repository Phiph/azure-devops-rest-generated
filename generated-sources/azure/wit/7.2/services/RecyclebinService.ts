/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemDelete } from '../models/WorkItemDelete';
import type { WorkItemDeleteShallowReference } from '../models/WorkItemDeleteShallowReference';
import type { WorkItemDeleteUpdate } from '../models/WorkItemDeleteUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RecyclebinService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of the IDs and the URLs of the deleted the work items in the Recycle Bin.
     * @returns WorkItemDeleteShallowReference successful operation
     * @throws ApiError
     */
    public recyclebinGetDeletedWorkItemShallowReferences({
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
    }): CancelablePromise<Array<WorkItemDeleteShallowReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/recyclebin',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Destroys the specified work item permanently from the Recycle Bin. This action can not be undone.
     * @returns any successful operation
     * @throws ApiError
     */
    public recyclebinDestroyWorkItem({
        organization,
        id,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the work item to be destroyed permanently
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/recyclebin/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
        });
    }
    /**
     * Gets a deleted work item from Recycle Bin.
     * @returns WorkItemDelete successful operation
     * @throws ApiError
     */
    public recyclebinGet({
        organization,
        id,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the work item to be returned
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemDelete> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/recyclebin/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
        });
    }
    /**
     * Restores the deleted work item from Recycle Bin.
     * @returns WorkItemDelete successful operation
     * @throws ApiError
     */
    public recyclebinRestoreWorkItem({
        organization,
        body,
        id,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Paylod with instructions to update the IsDeleted flag to false
         */
        body: WorkItemDeleteUpdate,
        /**
         * ID of the work item to be restored
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemDelete> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/recyclebin/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            body: body,
        });
    }
}
