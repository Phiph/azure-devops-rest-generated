/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardChart } from '../models/BoardChart';
import type { BoardChartReference } from '../models/BoardChartReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChartsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get board charts
     * @returns BoardChartReference successful operation
     * @throws ApiError
     */
    public chartsList({
        organization,
        project,
        board,
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
         * Identifier for board, either board's backlog level name (Eg:"Stories") or Id
         */
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Array<BoardChartReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/charts',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
        });
    }
    /**
     * Get a board chart
     * @returns BoardChart successful operation
     * @throws ApiError
     */
    public chartsGet({
        organization,
        project,
        board,
        name,
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
         * Identifier for board, either board's backlog level name (Eg:"Stories") or Id
         */
        board: string,
        /**
         * The chart name
         */
        name: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardChart> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/charts/{name}',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'name': name,
                'team': team,
            },
        });
    }
    /**
     * Update a board chart
     * @returns BoardChart successful operation
     * @throws ApiError
     */
    public chartsUpdate({
        organization,
        body,
        project,
        board,
        name,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: BoardChart,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Identifier for board, either board's backlog level name (Eg:"Stories") or Id
         */
        board: string,
        /**
         * The chart name
         */
        name: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardChart> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/charts/{name}',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'name': name,
                'team': team,
            },
            body: body,
        });
    }
}
