/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskGroup } from '../models/TaskGroup';
import type { TaskGroupCreateParameter } from '../models/TaskGroupCreateParameter';
import type { TaskGroupUpdateParameter } from '../models/TaskGroupUpdateParameter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaskgroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a task group.
     * @returns TaskGroup successful operation
     * @throws ApiError
     */
    public taskgroupsAdd({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Task group object to create.
         */
        body: TaskGroupCreateParameter,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TaskGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete a task group.
     * @returns any successful operation
     * @throws ApiError
     */
    public taskgroupsDelete({
        organization,
        project,
        taskGroupId,
        comment,
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
         * Id of the task group to be deleted.
         */
        taskGroupId: string,
        /**
         * Comments to delete.
         */
        comment?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups/{taskGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'taskGroupId': taskGroupId,
            },
            query: {
                'comment': comment,
            },
        });
    }
    /**
     * List task groups.
     * @returns TaskGroup successful operation
     * @throws ApiError
     */
    public taskgroupsList({
        organization,
        project,
        taskGroupId,
        expanded,
        taskIdFilter,
        deleted,
        top,
        continuationToken,
        queryOrder,
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
         * Id of the task group.
         */
        taskGroupId: string,
        /**
         * 'true' to recursively expand task groups. Default is 'false'.
         */
        expanded?: boolean,
        /**
         * Guid of the taskId to filter.
         */
        taskIdFilter?: string,
        /**
         * 'true'to include deleted task groups. Default is 'false'.
         */
        deleted?: boolean,
        /**
         * Number of task groups to get.
         */
        top?: number,
        /**
         * Gets the task groups after the continuation token provided.
         */
        continuationToken?: string,
        /**
         * Gets the results in the defined order. Default is 'CreatedOnDescending'.
         */
        queryOrder?: 'createdOnAscending' | 'createdOnDescending',
    }): CancelablePromise<Array<TaskGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups/{taskGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'taskGroupId': taskGroupId,
            },
            query: {
                'expanded': expanded,
                'taskIdFilter': taskIdFilter,
                'deleted': deleted,
                '$top': top,
                'continuationToken': continuationToken,
                'queryOrder': queryOrder,
            },
        });
    }
    /**
     * Update a task group.
     * @returns TaskGroup successful operation
     * @throws ApiError
     */
    public taskgroupsUpdate({
        organization,
        body,
        project,
        taskGroupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Task group to update.
         */
        body: TaskGroupUpdateParameter,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the task group to update.
         */
        taskGroupId: string,
    }): CancelablePromise<TaskGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/distributedtask/taskgroups/{taskGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'taskGroupId': taskGroupId,
            },
            body: body,
        });
    }
}
