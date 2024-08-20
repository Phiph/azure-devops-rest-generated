/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgent } from '../models/TaskAgent';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AgentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds an agent to a pool.  You probably don't want to call this endpoint directly. Instead, [configure an agent](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) using the agent download package.
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public agentsAdd({
        organization,
        body,
        poolId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Details about the agent being added
         */
        body: TaskAgent,
        /**
         * The agent pool in which to add the agent
         */
        poolId: number,
    }): CancelablePromise<TaskAgent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            body: body,
        });
    }
    /**
     * Get a list of agents.
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public agentsList({
        organization,
        poolId,
        agentName,
        includeCapabilities,
        includeAssignedRequest,
        includeLastCompletedRequest,
        propertyFilters,
        demands,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The agent pool containing the agents
         */
        poolId: number,
        /**
         * Filter on agent name
         */
        agentName?: string,
        /**
         * Whether to include the agents' capabilities in the response
         */
        includeCapabilities?: boolean,
        /**
         * Whether to include details about the agents' current work
         */
        includeAssignedRequest?: boolean,
        /**
         * Whether to include details about the agents' most recent completed work
         */
        includeLastCompletedRequest?: boolean,
        /**
         * Filter which custom properties will be returned
         */
        propertyFilters?: string,
        /**
         * Filter by demands the agents can satisfy
         */
        demands?: string,
    }): CancelablePromise<Array<TaskAgent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            query: {
                'agentName': agentName,
                'includeCapabilities': includeCapabilities,
                'includeAssignedRequest': includeAssignedRequest,
                'includeLastCompletedRequest': includeLastCompletedRequest,
                'propertyFilters': propertyFilters,
                'demands': demands,
            },
        });
    }
    /**
     * Delete an agent.  You probably don't want to call this endpoint directly. Instead, [use the agent configuration script](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) to remove an agent from your organization.
     * @returns any successful operation
     * @throws ApiError
     */
    public agentsDelete({
        organization,
        poolId,
        agentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The pool ID to remove the agent from
         */
        poolId: number,
        /**
         * The agent ID to remove
         */
        agentId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
        });
    }
    /**
     * Get information about an agent.
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public agentsGet({
        organization,
        poolId,
        agentId,
        includeCapabilities,
        includeAssignedRequest,
        includeLastCompletedRequest,
        propertyFilters,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The agent pool containing the agent
         */
        poolId: number,
        /**
         * The agent ID to get information about
         */
        agentId: number,
        /**
         * Whether to include the agent's capabilities in the response
         */
        includeCapabilities?: boolean,
        /**
         * Whether to include details about the agent's current work
         */
        includeAssignedRequest?: boolean,
        /**
         * Whether to include details about the agents' most recent completed work
         */
        includeLastCompletedRequest?: boolean,
        /**
         * Filter which custom properties will be returned
         */
        propertyFilters?: string,
    }): CancelablePromise<TaskAgent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
            query: {
                'includeCapabilities': includeCapabilities,
                'includeAssignedRequest': includeAssignedRequest,
                'includeLastCompletedRequest': includeLastCompletedRequest,
                'propertyFilters': propertyFilters,
            },
        });
    }
    /**
     * Replace an agent.  You probably don't want to call this endpoint directly. Instead, [use the agent configuration script](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) to remove and reconfigure an agent from your organization.
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public agentsReplaceAgent({
        organization,
        body,
        poolId,
        agentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Updated details about the replacing agent
         */
        body: TaskAgent,
        /**
         * The agent pool to use
         */
        poolId: number,
        /**
         * The agent to replace
         */
        agentId: number,
    }): CancelablePromise<TaskAgent> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
            body: body,
        });
    }
    /**
     * Update agent details.
     * @returns TaskAgent successful operation
     * @throws ApiError
     */
    public agentsUpdate({
        organization,
        body,
        poolId,
        agentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Updated details about the agent
         */
        body: TaskAgent,
        /**
         * The agent pool to use
         */
        poolId: number,
        /**
         * The agent to update
         */
        agentId: number,
    }): CancelablePromise<TaskAgent> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/agents/{agentId}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'agentId': agentId,
            },
            body: body,
        });
    }
}
