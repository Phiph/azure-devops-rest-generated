/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProcessModel } from '../models/CreateProcessModel';
import type { ProcessInfo } from '../models/ProcessInfo';
import type { UpdateProcessModel } from '../models/UpdateProcessModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a process.
     * @returns ProcessInfo successful operation
     * @throws ApiError
     */
    public processesCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * CreateProcessModel.
         */
        body: CreateProcessModel,
    }): CancelablePromise<ProcessInfo> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get list of all processes including system and inherited.
     * @returns ProcessInfo successful operation
     * @throws ApiError
     */
    public processesList({
        organization,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        expand?: 'none' | 'projects',
    }): CancelablePromise<Array<ProcessInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes',
            path: {
                'organization': organization,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Removes a process of a specific ID.
     * @returns any successful operation
     * @throws ApiError
     */
    public processesDelete({
        organization,
        processTypeId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        processTypeId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processTypeId}',
            path: {
                'organization': organization,
                'processTypeId': processTypeId,
            },
        });
    }
    /**
     * Edit a process of a specific ID.
     * @returns ProcessInfo successful operation
     * @throws ApiError
     */
    public processesEditProcess({
        organization,
        body,
        processTypeId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateProcessModel,
        processTypeId: string,
    }): CancelablePromise<ProcessInfo> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processTypeId}',
            path: {
                'organization': organization,
                'processTypeId': processTypeId,
            },
            body: body,
        });
    }
    /**
     * Get a single process of a specified ID.
     * @returns ProcessInfo successful operation
     * @throws ApiError
     */
    public processesGet({
        organization,
        processTypeId,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        processTypeId: string,
        expand?: 'none' | 'projects',
    }): CancelablePromise<ProcessInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processTypeId}',
            path: {
                'organization': organization,
                'processTypeId': processTypeId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
}
