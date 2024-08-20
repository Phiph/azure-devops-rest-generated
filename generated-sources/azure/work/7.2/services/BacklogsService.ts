/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BacklogLevelConfiguration } from '../models/BacklogLevelConfiguration';
import type { BacklogLevelWorkItems } from '../models/BacklogLevelWorkItems';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BacklogsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all backlog levels
     * @returns BacklogLevelConfiguration successful operation
     * @throws ApiError
     */
    public backlogsList({
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
    }): CancelablePromise<Array<BacklogLevelConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/backlogs',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
    /**
     * Get a list of work items within a backlog level
     * @returns BacklogLevelWorkItems successful operation
     * @throws ApiError
     */
    public backlogsGetBacklogLevelWorkItems({
        organization,
        project,
        team,
        backlogId,
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
        backlogId: string,
    }): CancelablePromise<BacklogLevelWorkItems> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/backlogs/{backlogId}/workItems',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'backlogId': backlogId,
            },
        });
    }
    /**
     * Get a backlog level
     * @returns BacklogLevelConfiguration successful operation
     * @throws ApiError
     */
    public backlogsGetBacklog({
        organization,
        project,
        team,
        id,
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
        /**
         * The id of the backlog level
         */
        id: string,
    }): CancelablePromise<BacklogLevelConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/backlogs/{id}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'id': id,
            },
        });
    }
}
