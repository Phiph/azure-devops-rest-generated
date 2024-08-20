/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Process } from '../models/Process';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of processes.
     * @returns Process successful operation
     * @throws ApiError
     */
    public processesList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<Process>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/process/processes',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Get a process by ID.
     * @returns Process successful operation
     * @throws ApiError
     */
    public processesGet({
        organization,
        processId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a process.
         */
        processId: string,
    }): CancelablePromise<Process> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/process/processes/{processId}',
            path: {
                'organization': organization,
                'processId': processId,
            },
        });
    }
}
