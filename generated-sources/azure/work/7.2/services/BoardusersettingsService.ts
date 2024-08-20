/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardUserSettings } from '../models/BoardUserSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BoardusersettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get board user settings for a board id
     * @returns BoardUserSettings successful operation
     * @throws ApiError
     */
    public boardusersettingsGet({
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
         * Board ID or Name
         */
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardUserSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/boardusersettings',
            path: {
                'organization': organization,
                'project': project,
                'board': board,
                'team': team,
            },
        });
    }
    /**
     * Update board user settings for the board id
     *
     * We don't want stakeholders to update board settings (currently just autorefresh). The BacklogManagement feature check validates this.
     * @returns BoardUserSettings successful operation
     * @throws ApiError
     */
    public boardusersettingsUpdate({
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
        body: Record<string, string>,
        /**
         * Project ID or project name
         */
        project: string,
        board: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<BoardUserSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/boards/{board}/boardusersettings',
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
