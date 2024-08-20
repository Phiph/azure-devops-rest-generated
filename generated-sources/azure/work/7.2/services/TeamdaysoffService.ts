/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamSettingsDaysOff } from '../models/TeamSettingsDaysOff';
import type { TeamSettingsDaysOffPatch } from '../models/TeamSettingsDaysOffPatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamdaysoffService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get team's days off for an iteration
     * @returns TeamSettingsDaysOff successful operation
     * @throws ApiError
     */
    public teamdaysoffGet({
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
    }): CancelablePromise<TeamSettingsDaysOff> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/teamdaysoff',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'team': team,
            },
        });
    }
    /**
     * Set a team's days off for an iteration
     * @returns TeamSettingsDaysOff successful operation
     * @throws ApiError
     */
    public teamdaysoffUpdate({
        organization,
        body,
        project,
        iterationId,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Team's days off patch containing a list of start and end dates
         */
        body: TeamSettingsDaysOffPatch,
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
    }): CancelablePromise<TeamSettingsDaysOff> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/teamdaysoff',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'team': team,
            },
            body: body,
        });
    }
}
