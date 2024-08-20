/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceEndpointExecutionRecord } from '../models/ServiceEndpointExecutionRecord';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionhistoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get service endpoint execution records.
     * @returns ServiceEndpointExecutionRecord successful operation
     * @throws ApiError
     */
    public executionhistoryList({
        organization,
        project,
        endpointId,
        top,
        continuationToken,
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
         * Id of the service endpoint.
         */
        endpointId: string,
        /**
         * Number of service endpoint execution records to get.
         */
        top?: number,
        /**
         * A continuation token, returned by a previous call to this method, that can be used to return the next set of records
         */
        continuationToken?: number,
    }): CancelablePromise<Array<ServiceEndpointExecutionRecord>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/serviceendpoint/{endpointId}/executionhistory',
            path: {
                'organization': organization,
                'project': project,
                'endpointId': endpointId,
            },
            query: {
                'top': top,
                'continuationToken': continuationToken,
            },
        });
    }
}
