/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentPool } from '../models/TaskAgentPool';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PoolsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create an agent pool.
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public poolsAdd({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Details about the new agent pool
         */
        body: TaskAgentPool,
    }): CancelablePromise<TaskAgentPool> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/pools',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get a list of agent pools.
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public poolsGetAgentPoolsByIds({
        organization,
        poolIds,
        actionFilter,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * pool Ids to fetch
         */
        poolIds: string,
        /**
         * Filter by whether the calling user has use or manage permissions
         */
        actionFilter?: 'none' | 'manage' | 'use',
    }): CancelablePromise<Array<TaskAgentPool>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools',
            path: {
                'organization': organization,
            },
            query: {
                'poolIds': poolIds,
                'actionFilter': actionFilter,
            },
        });
    }
    /**
     * Delete an agent pool.
     * @returns any successful operation
     * @throws ApiError
     */
    public poolsDelete({
        organization,
        poolId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the agent pool to delete
         */
        poolId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
        });
    }
    /**
     * Get information about an agent pool.
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public poolsGet({
        organization,
        poolId,
        properties,
        actionFilter,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * An agent pool ID
         */
        poolId: number,
        /**
         * Agent pool properties (comma-separated)
         */
        properties?: string,
        /**
         * Filter by whether the calling user has use or manage permissions
         */
        actionFilter?: 'none' | 'manage' | 'use',
    }): CancelablePromise<TaskAgentPool> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            query: {
                'properties': properties,
                'actionFilter': actionFilter,
            },
        });
    }
    /**
     * Update properties on an agent pool
     * @returns TaskAgentPool successful operation
     * @throws ApiError
     */
    public poolsUpdate({
        organization,
        body,
        poolId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Updated agent pool details
         */
        body: TaskAgentPool,
        /**
         * The agent pool to update
         */
        poolId: number,
    }): CancelablePromise<TaskAgentPool> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}',
            path: {
                'organization': organization,
                'poolId': poolId,
            },
            body: body,
        });
    }
}
