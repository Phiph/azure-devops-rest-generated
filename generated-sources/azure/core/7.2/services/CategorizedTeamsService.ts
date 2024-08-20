/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategorizedWebApiTeams } from '../models/CategorizedWebApiTeams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CategorizedTeamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets list of user readable teams in a project and teams user is member of (excluded from readable list).
     * @returns CategorizedWebApiTeams successful operation
     * @throws ApiError
     */
    public categorizedTeamsGet({
        organization,
        projectId,
        expandIdentity,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID (GUID) of the team project containing the teams to retrieve.
         */
        projectId: string,
        /**
         * A value indicating whether or not to expand Identity information in the result WebApiTeam object.
         */
        expandIdentity?: boolean,
        /**
         * Maximum number of teams to return.
         */
        top?: number,
        /**
         * Number of teams to skip.
         */
        skip?: number,
    }): CancelablePromise<CategorizedWebApiTeams> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects/{projectId}/categorizedteams/',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            query: {
                '$expandIdentity': expandIdentity,
                '$top': top,
                '$skip': skip,
            },
        });
    }
}
