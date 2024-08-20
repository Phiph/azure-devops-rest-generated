/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IterationWorkItems } from '../models/IterationWorkItems';
import type { TeamSettingsIteration } from '../models/TeamSettingsIteration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IterationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a team's iterations using timeframe filter
     * @returns TeamSettingsIteration successful operation
     * @throws ApiError
     */
    public iterationsList({
        organization,
        project,
        team,
        timeframe,
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
         * A filter for which iterations are returned based on relative time. Only Current is supported currently.
         */
        timeframe?: string,
    }): CancelablePromise<Array<TeamSettingsIteration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            query: {
                '$timeframe': timeframe,
            },
        });
    }
    /**
     * Add an iteration to the team
     * @returns TeamSettingsIteration successful operation
     * @throws ApiError
     */
    public iterationsPostTeamIteration({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Iteration to add
         */
        body: TeamSettingsIteration,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TeamSettingsIteration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Delete a team's iteration by iterationId
     * @returns any successful operation
     * @throws ApiError
     */
    public iterationsDelete({
        organization,
        project,
        id,
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
         * ID of the iteration
         */
        id: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
                'team': team,
            },
        });
    }
    /**
     * Get team's iteration by iterationId
     * @returns TeamSettingsIteration successful operation
     * @throws ApiError
     */
    public iterationsGet({
        organization,
        project,
        id,
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
         * ID of the iteration
         */
        id: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TeamSettingsIteration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
                'team': team,
            },
        });
    }
    /**
     * Get work items for iteration
     * @returns IterationWorkItems successful operation
     * @throws ApiError
     */
    public iterationsGetIterationWorkItems({
        organization,
        project,
        iterationId,
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
         * ID of the iteration
         */
        iterationId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<IterationWorkItems> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/workitems',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'team': team,
            },
        });
    }
}
