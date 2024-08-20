/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentCloudRequest } from '../models/TaskAgentCloudRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RequestsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TaskAgentCloudRequest successful operation
     * @throws ApiError
     */
    public requestsList({
        organization,
        agentCloudId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        agentCloudId: number,
    }): CancelablePromise<Array<TaskAgentCloudRequest>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}/requests',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
        });
    }
}
