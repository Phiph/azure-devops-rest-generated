/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceEndpointType } from '../models/ServiceEndpointType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get service endpoint types.
     * @returns ServiceEndpointType successful operation
     * @throws ApiError
     */
    public typesList({
        organization,
        type,
        scheme,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Type of service endpoint.
         */
        type?: string,
        /**
         * Scheme of service endpoint.
         */
        scheme?: string,
    }): CancelablePromise<Array<ServiceEndpointType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/serviceendpoint/types',
            path: {
                'organization': organization,
            },
            query: {
                'type': type,
                'scheme': scheme,
            },
        });
    }
}
