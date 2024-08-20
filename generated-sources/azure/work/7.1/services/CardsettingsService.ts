/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardCardSettings } from '../models/BoardCardSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CardsettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get board card settings for the board id or board by name
     * @returns BoardCardSettings successful operation
     * @throws ApiError
     */
    public cardsettingsGet({
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
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardCardSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/cardsettings',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
        });
    }
    /**
     * Update board card settings for the board id or board by name
     * @returns BoardCardSettings successful operation
     * @throws ApiError
     */
    public cardsettingsUpdateBoardCardSettings({
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
        body: BoardCardSettings,
        /**
         * Project ID or project name
         */
        project: string,
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardCardSettings> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/cardsettings',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Update taskboard card settings
     * @returns any successful operation
     * @throws ApiError
     */
    public cardsettingsUpdateTaskboardCardSettings({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: BoardCardSettings,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/work/taskboard/cardsettings',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
