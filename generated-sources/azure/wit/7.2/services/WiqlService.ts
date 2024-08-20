/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Wiql } from '../models/Wiql';
import type { WorkItemQueryResult } from '../models/WorkItemQueryResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WiqlService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the results of the query given its WIQL.
     * @returns WorkItemQueryResult successful operation
     * @throws ApiError
     */
    public wiqlQueryByWiql({
        organization,
        body,
        project,
        team,
        timePrecision,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The query containing the WIQL.
         */
        body: Wiql,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Whether or not to use time precision.
         */
        timePrecision?: boolean,
        /**
         * The max number of results to return.
         */
        top?: number,
    }): CancelablePromise<WorkItemQueryResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/{team}/_apis/wit/wiql',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            query: {
                'timePrecision': timePrecision,
                '$top': top,
            },
            body: body,
        });
    }
    /**
     * Gets the results of the query given the query ID.
     * @returns number successful operation
     * @throws ApiError
     */
    public wiqlGet({
        organization,
        id,
        project,
        team,
        timePrecision,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The query ID.
         */
        id: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Whether or not to use time precision.
         */
        timePrecision?: boolean,
        /**
         * The max number of results to return.
         */
        top?: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/{organization}/{project}/{team}/_apis/wit/wiql/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
                'team': team,
            },
            query: {
                'timePrecision': timePrecision,
                '$top': top,
            },
        });
    }
    /**
     * Gets the results of the query given the query ID.
     * @returns WorkItemQueryResult successful operation
     * @throws ApiError
     */
    public wiqlQueryById({
        organization,
        id,
        project,
        team,
        timePrecision,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The query ID.
         */
        id: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Whether or not to use time precision.
         */
        timePrecision?: boolean,
        /**
         * The max number of results to return.
         */
        top?: number,
    }): CancelablePromise<WorkItemQueryResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/wit/wiql/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
                'team': team,
            },
            query: {
                'timePrecision': timePrecision,
                '$top': top,
            },
        });
    }
}
