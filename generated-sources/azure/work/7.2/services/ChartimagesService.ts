/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChartimagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a board chart image.
     * @returns string successful operation
     * @throws ApiError
     */
    public chartimagesGetBoardChartImage({
        organization,
        project,
        team,
        board,
        name,
        width,
        height,
        showDetails,
        title,
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
         * Identifier for board, either board's backlog level name (e.g. "Issues") or Id.
         */
        board: string,
        /**
         * The chart name. e.g. CumulativeFlow.
         */
        name: string,
        /**
         * The width of the chart in pixels. Must be greater than 0.
         */
        width?: number,
        /**
         * The height of the chart in pixels. Must be greater than 0.
         */
        height?: number,
        /**
         * Whether or not the chart should include detailed information (e.g. axis labels, titles, trend lines, etc.).
         */
        showDetails?: boolean,
        /**
         * The title of the chart. Can only be dislayed if ShowLabels is true.
         */
        title?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/chartimages/{name}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'board': board,
                'name': name,
            },
            query: {
                'width': width,
                'height': height,
                'showDetails': showDetails,
                'title': title,
            },
        });
    }
    /**
     * Get an iteration chart image.
     * @returns string successful operation
     * @throws ApiError
     */
    public chartimagesGetIterationChartImage({
        organization,
        project,
        team,
        iterationId,
        name,
        width,
        height,
        showDetails,
        title,
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
         * ID of the iteration.
         */
        iterationId: string,
        /**
         * The chart name. e.g. Burndown.
         */
        name: string,
        /**
         * The width of the chart in pixels. Must be greater than 0.
         */
        width?: number,
        /**
         * The height of the chart in pixels. Must be greater than 0.
         */
        height?: number,
        /**
         * Whether or not the chart should include detailed information (e.g. axis labels, titles, trend lines, etc.)
         */
        showDetails?: boolean,
        /**
         * The title of the chart. Can only be dislayed if ShowLabels is true.
         */
        title?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/iterations/{iterationId}/chartimages/{name}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'iterationId': iterationId,
                'name': name,
            },
            query: {
                'width': width,
                'height': height,
                'showDetails': showDetails,
                'title': title,
            },
        });
    }
    /**
     * Get an iterations chart image.
     * @returns string successful operation
     * @throws ApiError
     */
    public chartimagesGetIterationsChartImage({
        organization,
        project,
        team,
        name,
        iterationsNumber,
        width,
        height,
        showDetails,
        title,
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
         * The chart name. e.g. Velocity.
         */
        name: string,
        /**
         * Number of iterations the chart is for.
         */
        iterationsNumber?: number,
        /**
         * The width of the chart in pixels. Must be greater than 0.
         */
        width?: number,
        /**
         * The height of the chart in pixels. Must be greater than 0.
         */
        height?: number,
        /**
         * Whether or not the chart should include detailed information (e.g. axis labels, titles, trend lines, etc.)
         */
        showDetails?: boolean,
        /**
         * The title of the chart. Can only be dislayed if ShowLabels is true.
         */
        title?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/iterations/chartimages/{name}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'name': name,
            },
            query: {
                'iterationsNumber': iterationsNumber,
                'width': width,
                'height': height,
                'showDetails': showDetails,
                'title': title,
            },
        });
    }
}
