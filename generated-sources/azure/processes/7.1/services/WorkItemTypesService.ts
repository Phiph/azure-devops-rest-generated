/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProcessWorkItemTypeRequest } from '../models/CreateProcessWorkItemTypeRequest';
import type { ProcessWorkItemType } from '../models/ProcessWorkItemType';
import type { UpdateProcessWorkItemTypeRequest } from '../models/UpdateProcessWorkItemTypeRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a work item type in the process.
     * @returns ProcessWorkItemType successful operation
     * @throws ApiError
     */
    public workItemTypesCreate({
        organization,
        body,
        processId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: CreateProcessWorkItemTypeRequest,
        /**
         * The ID of the process on which to create work item type.
         */
        processId: string,
    }): CancelablePromise<ProcessWorkItemType> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypes',
            path: {
                'organization': organization,
                'processId': processId,
            },
            body: body,
        });
    }
    /**
     * Returns a list of all work item types in a process.
     * @returns ProcessWorkItemType successful operation
     * @throws ApiError
     */
    public workItemTypesList({
        organization,
        processId,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * Flag to determine what properties of work item type to return
         */
        expand?: 'none' | 'states' | 'behaviors' | 'layout',
    }): CancelablePromise<Array<ProcessWorkItemType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypes',
            path: {
                'organization': organization,
                'processId': processId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Removes a work item type in the process.
     * @returns any successful operation
     * @throws ApiError
     */
    public workItemTypesDelete({
        organization,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypes/{witRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
        });
    }
    /**
     * Returns a single work item type in a process.
     * @returns ProcessWorkItemType successful operation
     * @throws ApiError
     */
    public workItemTypesGet({
        organization,
        processId,
        witRefName,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * Flag to determine what properties of work item type to return
         */
        expand?: 'none' | 'states' | 'behaviors' | 'layout',
    }): CancelablePromise<ProcessWorkItemType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypes/{witRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Updates a work item type of the process.
     * @returns ProcessWorkItemType successful operation
     * @throws ApiError
     */
    public workItemTypesUpdate({
        organization,
        body,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateProcessWorkItemTypeRequest,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
    }): CancelablePromise<ProcessWorkItemType> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypes/{witRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            body: body,
        });
    }
}
