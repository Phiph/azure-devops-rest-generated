/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskboardWorkItemColumn } from '../models/TaskboardWorkItemColumn';
import type { UpdateTaskboardWorkItemColumn } from '../models/UpdateTaskboardWorkItemColumn';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaskboardWorkItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TaskboardWorkItemColumn successful operation
     * @throws ApiError
     */
    public taskboardWorkItemsList({
        organization,
        project,
        team,
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
         * Team ID or team name
         */
        team: string,
        iterationId: string,
    }): CancelablePromise<Array<TaskboardWorkItemColumn>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/taskboardworkitems/{iterationId}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'iterationId': iterationId,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public taskboardWorkItemsUpdate({
        organization,
        body,
        project,
        team,
        iterationId,
        workItemId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateTaskboardWorkItemColumn,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
        iterationId: string,
        workItemId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/taskboardworkitems/{iterationId}/{workItemId}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'iterationId': iterationId,
                'workItemId': workItemId,
            },
            body: body,
        });
    }
}
