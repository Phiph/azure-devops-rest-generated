/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CapacityPatch } from '../models/CapacityPatch';
import type { TeamCapacity } from '../models/TeamCapacity';
import type { TeamMemberCapacityIdentityRef } from '../models/TeamMemberCapacityIdentityRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CapacitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a team's capacity including total capacity and days off
     * @returns TeamCapacity successful operation
     * @throws ApiError
     */
    public capacitiesGetCapacitiesWithIdentityRefAndTotals({
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
    }): CancelablePromise<TeamCapacity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/capacities',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'team': team,
            },
        });
    }
    /**
     * Replace a team's capacity
     * @returns TeamMemberCapacityIdentityRef successful operation
     * @throws ApiError
     */
    public capacitiesReplaceCapacitiesWithIdentityRef({
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
         * Team capacity to replace
         */
        body: Array<TeamMemberCapacityIdentityRef>,
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
    }): CancelablePromise<Array<TeamMemberCapacityIdentityRef>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/capacities',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Get a team member's capacity
     * @returns TeamMemberCapacityIdentityRef successful operation
     * @throws ApiError
     */
    public capacitiesGetCapacityWithIdentityRef({
        organization,
        project,
        iterationId,
        teamMemberId,
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
         * ID of the team member
         */
        teamMemberId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TeamMemberCapacityIdentityRef> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/capacities/{teamMemberId}',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'teamMemberId': teamMemberId,
                'team': team,
            },
        });
    }
    /**
     * Update a team member's capacity
     * @returns TeamMemberCapacityIdentityRef successful operation
     * @throws ApiError
     */
    public capacitiesUpdate({
        organization,
        body,
        project,
        iterationId,
        teamMemberId,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Updated capacity
         */
        body: CapacityPatch,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the iteration
         */
        iterationId: string,
        /**
         * ID of the team member
         */
        teamMemberId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TeamMemberCapacityIdentityRef> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/teamsettings/iterations/{iterationId}/capacities/{teamMemberId}',
            path: {
                'organization': organization,
                'project': project,
                'iterationId': iterationId,
                'teamMemberId': teamMemberId,
                'team': team,
            },
            body: body,
        });
    }
}
