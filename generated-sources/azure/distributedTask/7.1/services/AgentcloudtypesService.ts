/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentCloudType } from '../models/TaskAgentCloudType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AgentcloudtypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get agent cloud types.
     * @returns TaskAgentCloudType successful operation
     * @throws ApiError
     */
    public agentcloudtypesList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<TaskAgentCloudType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentcloudtypes',
            path: {
                'organization': organization,
            },
        });
    }
}
