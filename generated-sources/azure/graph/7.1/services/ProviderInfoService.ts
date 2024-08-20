/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphProviderInfo } from '../models/GraphProviderInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProviderInfoService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GraphProviderInfo successful operation
     * @throws ApiError
     */
    public providerInfoGet({
        userDescriptor,
        organization,
    }: {
        userDescriptor: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<GraphProviderInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/Users/{userDescriptor}/providerinfo',
            path: {
                'userDescriptor': userDescriptor,
                'organization': organization,
            },
        });
    }
}
