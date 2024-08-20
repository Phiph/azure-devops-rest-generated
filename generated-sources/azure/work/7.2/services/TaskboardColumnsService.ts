/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskboardColumns } from '../models/TaskboardColumns';
import type { UpdateTaskboardColumn } from '../models/UpdateTaskboardColumn';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaskboardColumnsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TaskboardColumns successful operation
     * @throws ApiError
     */
    public taskboardColumnsGet({
        organization,
        project,
        team,
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
    }): CancelablePromise<TaskboardColumns> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/taskboardcolumns',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
    /**
     * @returns TaskboardColumns successful operation
     * @throws ApiError
     */
    public taskboardColumnsUpdate({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<UpdateTaskboardColumn>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TaskboardColumns> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/taskboardcolumns',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
