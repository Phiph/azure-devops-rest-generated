/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardRow } from '../models/BoardRow';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RowsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get rows on a board
     * @returns BoardRow successful operation
     * @throws ApiError
     */
    public rowsList({
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
    }): CancelablePromise<Array<BoardRow>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/rows',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
        });
    }
    /**
     * Update rows on a board
     * @returns BoardRow successful operation
     * @throws ApiError
     */
    public rowsUpdate({
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
         * List of board rows to update
         */
        body: Array<BoardRow>,
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
    }): CancelablePromise<Array<BoardRow>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/rows',
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
