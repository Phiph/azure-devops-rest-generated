/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataSourceBinding } from '../models/DataSourceBinding';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EndpointproxyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * Use ExecuteServiceEndpointRequest API Instead
     * @returns string successful operation
     * @throws ApiError
     */
    public endpointproxyQuery({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Describes the data source to fetch.
         */
        body: DataSourceBinding,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/serviceendpoint/endpointproxy',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
