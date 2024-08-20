/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamFieldValues } from '../models/TeamFieldValues';
import type { TeamFieldValuesPatch } from '../models/TeamFieldValuesPatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamfieldvaluesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a collection of team field values
     * @returns TeamFieldValues successful operation
     * @throws ApiError
     */
    public teamfieldvaluesGet({
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
    }): CancelablePromise<TeamFieldValues> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/teamfieldvalues',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
    /**
     * Update team field values
     * @returns TeamFieldValues successful operation
     * @throws ApiError
     */
    public teamfieldvaluesUpdate({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TeamFieldValuesPatch,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TeamFieldValues> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/teamfieldvalues',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
