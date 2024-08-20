/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMember } from '../models/TeamMember';
import type { WebApiTeam } from '../models/WebApiTeam';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a team in a team project.
     *
     * Possible failure scenarios
     * Invalid project name/ID (project doesn't exist) 404
     * Invalid team name or description 400
     * Team already exists 400
     * Insufficient privileges 400
     * @returns WebApiTeam successful operation
     * @throws ApiError
     */
    public teamsCreate({
        organization,
        body,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The team data used to create the team.
         */
        body: WebApiTeam,
        /**
         * The name or ID (GUID) of the team project in which to create the team.
         */
        projectId: string,
    }): CancelablePromise<WebApiTeam> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/projects/{projectId}/teams',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            body: body,
        });
    }
    /**
     * Get a list of teams.
     * @returns WebApiTeam successful operation
     * @throws ApiError
     */
    public teamsGetTeams({
        organization,
        projectId,
        mine,
        top,
        skip,
        expandIdentity,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        projectId: string,
        /**
         * If true return all the teams requesting user is member, otherwise return all the teams user has read access.
         */
        mine?: boolean,
        /**
         * Maximum number of teams to return.
         */
        top?: number,
        /**
         * Number of teams to skip.
         */
        skip?: number,
        /**
         * A value indicating whether or not to expand Identity information in the result WebApiTeam object.
         */
        expandIdentity?: boolean,
    }): CancelablePromise<Array<WebApiTeam>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects/{projectId}/teams',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            query: {
                '$mine': mine,
                '$top': top,
                '$skip': skip,
                '$expandIdentity': expandIdentity,
            },
        });
    }
    /**
     * Delete a team.
     * @returns any successful operation
     * @throws ApiError
     */
    public teamsDelete({
        organization,
        projectId,
        teamId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID (GUID) of the team project containing the team to delete.
         */
        projectId: string,
        /**
         * The name or ID of the team to delete.
         */
        teamId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/projects/{projectId}/teams/{teamId}',
            path: {
                'organization': organization,
                'projectId': projectId,
                'teamId': teamId,
            },
        });
    }
    /**
     * Get a specific team.
     * @returns WebApiTeam successful operation
     * @throws ApiError
     */
    public teamsGet({
        organization,
        projectId,
        teamId,
        expandIdentity,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID (GUID) of the team project containing the team.
         */
        projectId: string,
        /**
         * The name or ID (GUID) of the team.
         */
        teamId: string,
        /**
         * A value indicating whether or not to expand Identity information in the result WebApiTeam object.
         */
        expandIdentity?: boolean,
    }): CancelablePromise<WebApiTeam> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects/{projectId}/teams/{teamId}',
            path: {
                'organization': organization,
                'projectId': projectId,
                'teamId': teamId,
            },
            query: {
                '$expandIdentity': expandIdentity,
            },
        });
    }
    /**
     * Update a team's name and/or description.
     * @returns WebApiTeam successful operation
     * @throws ApiError
     */
    public teamsUpdate({
        organization,
        body,
        projectId,
        teamId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WebApiTeam,
        /**
         * The name or ID (GUID) of the team project containing the team to update.
         */
        projectId: string,
        /**
         * The name of ID of the team to update.
         */
        teamId: string,
    }): CancelablePromise<WebApiTeam> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/projects/{projectId}/teams/{teamId}',
            path: {
                'organization': organization,
                'projectId': projectId,
                'teamId': teamId,
            },
            body: body,
        });
    }
    /**
     * Get a list of members for a specific team.
     * @returns TeamMember successful operation
     * @throws ApiError
     */
    public teamsGetTeamMembersWithExtendedProperties({
        organization,
        projectId,
        teamId,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID (GUID) of the team project the team belongs to.
         */
        projectId: string,
        /**
         * The name or ID (GUID) of the team .
         */
        teamId: string,
        top?: number,
        skip?: number,
    }): CancelablePromise<Array<TeamMember>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects/{projectId}/teams/{teamId}/members',
            path: {
                'organization': organization,
                'projectId': projectId,
                'teamId': teamId,
            },
            query: {
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Get a list of all teams.
     * @returns WebApiTeam successful operation
     * @throws ApiError
     */
    public teamsGetAllTeams({
        organization,
        mine,
        top,
        skip,
        expandIdentity,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * If true, then return all teams requesting user is member. Otherwise return all teams user has read access.
         */
        mine?: boolean,
        /**
         * Maximum number of teams to return.
         */
        top?: number,
        /**
         * Number of teams to skip.
         */
        skip?: number,
        /**
         * A value indicating whether or not to expand Identity information in the result WebApiTeam object.
         */
        expandIdentity?: boolean,
    }): CancelablePromise<Array<WebApiTeam>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/teams',
            path: {
                'organization': organization,
            },
            query: {
                '$mine': mine,
                '$top': top,
                '$skip': skip,
                '$expandIdentity': expandIdentity,
            },
        });
    }
}
