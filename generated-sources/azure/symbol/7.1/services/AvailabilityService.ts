/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AvailabilityService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Check the availability of symbol service. This includes checking for feature flag, and possibly license in future. Note this is NOT an anonymous endpoint, and the caller will be redirected to authentication before hitting it.
     * @returns any The symbol service is available
     * @throws ApiError
     */
    public availabilityCheckAvailability({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/symbol/availability',
            path: {
                'organization': organization,
            },
        });
    }
}
