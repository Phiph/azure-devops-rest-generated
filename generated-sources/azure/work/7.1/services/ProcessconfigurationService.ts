/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessConfiguration } from '../models/ProcessConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessconfigurationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get process configuration
     * @returns ProcessConfiguration successful operation
     * @throws ApiError
     */
    public processconfigurationGet({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ProcessConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/work/processconfiguration',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
}
