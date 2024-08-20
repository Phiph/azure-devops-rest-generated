/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildResourceUsage } from '../models/BuildResourceUsage';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResourceUsageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets information about build resources in the system.
     * @returns BuildResourceUsage successful operation
     * @throws ApiError
     */
    public resourceUsageGet({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<BuildResourceUsage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/build/resourceusage',
            path: {
                'organization': organization,
            },
        });
    }
}
