/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Board } from '../models/Board';
import type { BoardReference } from '../models/BoardReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BoardsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get boards
     * @returns BoardReference successful operation
     * @throws ApiError
     */
    public boardsList({
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
    }): CancelablePromise<Array<BoardReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
    /**
     * Get board
     * @returns Board successful operation
     * @throws ApiError
     */
    public boardsGet({
        organization,
        project,
        id,
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
         * identifier for board, either board's backlog level name (Eg:"Stories") or Id
         */
        id: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Board> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
                'team': team,
            },
        });
    }
    /**
     * Update board options
     * @returns string successful operation
     * @throws ApiError
     */
    public boardsSetBoardOptions({
        organization,
        body,
        project,
        id,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * options to updated
         */
        body: Record<string, string>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * identifier for board, either category plural name (Eg:"Stories") or guid
         */
        id: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Record<string, string>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
                'team': team,
            },
            body: body,
        });
    }
}
