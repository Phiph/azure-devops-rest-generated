/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IterationCapacity } from '../models/IterationCapacity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IterationcapacitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get an iteration's capacity for all teams in iteration
     * @returns IterationCapacity successful operation
     * @throws ApiError
     */
    public iterationcapacitiesGet({
        organization,
        project,
        iterationId,
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
         * ID of the iteration
         */
        iterationId: string,
    }): CancelablePromise<IterationCapacity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/work/iterations/{iterationId}/iterationcapacities',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
            },
        });
    }
}
