/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentCloud } from '../models/TaskAgentCloud';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AgentcloudsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public agentcloudsAdd({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TaskAgentCloud,
    }): CancelablePromise<TaskAgentCloud> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/agentclouds',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public agentcloudsList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<TaskAgentCloud>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentclouds',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public agentcloudsDelete({
        organization,
        agentCloudId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        agentCloudId: number,
    }): CancelablePromise<TaskAgentCloud> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
        });
    }
    /**
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public agentcloudsGet({
        organization,
        agentCloudId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        agentCloudId: number,
    }): CancelablePromise<TaskAgentCloud> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
        });
    }
    /**
     * @returns TaskAgentCloud successful operation
     * @throws ApiError
     */
    public agentcloudsUpdate({
        organization,
        body,
        agentCloudId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TaskAgentCloud,
        agentCloudId: number,
    }): CancelablePromise<TaskAgentCloud> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/agentclouds/{agentCloudId}',
            path: {
                'organization': organization,
                'agentCloudId': agentCloudId,
            },
            body: body,
        });
    }
}
