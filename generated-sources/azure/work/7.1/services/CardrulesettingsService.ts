/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardCardRuleSettings } from '../models/BoardCardRuleSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CardrulesettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get board card Rule settings for the board id or board by name
     * @returns BoardCardRuleSettings successful operation
     * @throws ApiError
     */
    public cardrulesettingsGet({
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
    }): CancelablePromise<BoardCardRuleSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/cardrulesettings',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
        });
    }
    /**
     * Update board card Rule settings for the board id or board by name
     * @returns BoardCardRuleSettings successful operation
     * @throws ApiError
     */
    public cardrulesettingsUpdateBoardCardRuleSettings({
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
        body: BoardCardRuleSettings,
        /**
         * Project ID or project name
         */
        project: string,
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardCardRuleSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/cardrulesettings',
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
     * Update taskboard card Rule settings
     * @returns any successful operation
     * @throws ApiError
     */
    public cardrulesettingsUpdateTaskboardCardRuleSettings({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: BoardCardRuleSettings,
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
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/taskboard/cardrulesettings',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
