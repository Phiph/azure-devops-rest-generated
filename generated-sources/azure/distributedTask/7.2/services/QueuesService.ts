/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentQueue } from '../models/TaskAgentQueue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueuesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new agent queue to connect a project to an agent pool.
     * @returns TaskAgentQueue successful operation
     * @throws ApiError
     */
    public queuesAdd({
        organization,
        body,
        project,
        authorizePipelines,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Details about the queue to create
         */
        body: TaskAgentQueue,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Automatically authorize this queue when using YAML
         */
        authorizePipelines?: boolean,
    }): CancelablePromise<TaskAgentQueue> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/queues',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'authorizePipelines': authorizePipelines,
            },
            body: body,
        });
    }
    /**
     * Get a list of agent queues by pool ids
     * @returns TaskAgentQueue successful operation
     * @throws ApiError
     */
    public queuesGetAgentQueuesForPools({
        organization,
        poolIds,
        project,
        actionFilter,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A comma-separated list of pool ids to get the corresponding queues for
         */
        poolIds: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Filter by whether the calling user has use or manage permissions
         */
        actionFilter?: 'none' | 'manage' | 'use',
    }): CancelablePromise<Array<TaskAgentQueue>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/queues',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'poolIds': poolIds,
                'actionFilter': actionFilter,
            },
        });
    }
    /**
     * Removes an agent queue from a project.
     * @returns any successful operation
     * @throws ApiError
     */
    public queuesDelete({
        organization,
        queueId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The agent queue to remove
         */
        queueId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/queues/{queueId}',
            path: {
                'organization': organization,
                'queueId': queueId,
                'project': project,
            },
        });
    }
    /**
     * Get information about an agent queue.
     * @returns TaskAgentQueue successful operation
     * @throws ApiError
     */
    public queuesGet({
        organization,
        queueId,
        project,
        actionFilter,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The agent queue to get information about
         */
        queueId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Filter by whether the calling user has use or manage permissions
         */
        actionFilter?: 'none' | 'manage' | 'use',
    }): CancelablePromise<TaskAgentQueue> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/queues/{queueId}',
            path: {
                'organization': organization,
                'queueId': queueId,
                'project': project,
            },
            query: {
                'actionFilter': actionFilter,
            },
        });
    }
}
