/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardSuggestedValue } from '../models/BoardSuggestedValue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BoardrowsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get available board rows in a project
     * @returns BoardSuggestedValue successful operation
     * @throws ApiError
     */
    public boardrowsList({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<BoardSuggestedValue>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/work/boardrows',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
}
