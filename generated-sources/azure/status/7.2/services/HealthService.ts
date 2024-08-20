/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceStatus } from '../models/ServiceStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HealthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries status information for the service all-up, or scoped to a particular service and/or geography
     * @returns ServiceStatus successful operation
     * @throws ApiError
     */
    public healthGet({
        services,
        geographies,
    }: {
        /**
         * A comma-separated list of services for which to get status information for. Supported values: Artifacts, Boards, Core services, Other services, Pipelines, Repos, Test Plans.
         */
        services?: string,
        /**
         * A comma-separated list of geographies for which to get status information for. Supported values: APAC, AU, BR, CA, EU, IN, UK, US.
         */
        geographies?: string,
    }): CancelablePromise<ServiceStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/_apis/status/health',
            query: {
                'services': services,
                'geographies': geographies,
            },
        });
    }
}
