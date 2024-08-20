/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardColumn } from '../models/BoardColumn';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ColumnsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get columns on a board
     * @returns BoardColumn successful operation
     * @throws ApiError
     */
    public columnsList({
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
         * Name or ID of the specific board
         */
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Array<BoardColumn>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/columns',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
        });
    }
    /**
     * Update columns on a board
     * @returns BoardColumn successful operation
     * @throws ApiError
     */
    public columnsUpdate({
        organization,
        body,
        project,
        board,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * List of board columns to update
         */
        body: Array<BoardColumn>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Name or ID of the specific board
         */
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Array<BoardColumn>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/columns',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
            body: body,
        });
    }
}
