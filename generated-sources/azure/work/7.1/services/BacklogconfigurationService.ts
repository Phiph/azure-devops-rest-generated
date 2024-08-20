/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BacklogConfiguration } from '../models/BacklogConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BacklogconfigurationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets backlog configuration for a team
     * @returns BacklogConfiguration successful operation
     * @throws ApiError
     */
    public backlogconfigurationGet({
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
    }): CancelablePromise<BacklogConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/backlogconfiguration',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
}
