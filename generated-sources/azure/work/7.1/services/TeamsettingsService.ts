/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamSetting } from '../models/TeamSetting';
import type { TeamSettingsPatch } from '../models/TeamSettingsPatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a team's settings
     * @returns TeamSetting successful operation
     * @throws ApiError
     */
    public teamsettingsGet({
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
    }): CancelablePromise<TeamSetting> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
    /**
     * Update a team's settings
     * @returns TeamSetting successful operation
     * @throws ApiError
     */
    public teamsettingsUpdate({
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
         * TeamSettings changes
         */
        body: TeamSettingsPatch,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TeamSetting> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
