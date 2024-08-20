/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentPoolReference } from '../models/TaskAgentPoolReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PoolService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TaskAgentPoolReference successful operation
     * @throws ApiError
     */
    public poolGet({
        organization,
        project,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        environmentId: number,
    }): CancelablePromise<TaskAgentPoolReference> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/providers/virtualmachines/pool',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
        });
    }
}
