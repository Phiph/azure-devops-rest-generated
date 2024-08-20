/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReorderOperation } from '../models/ReorderOperation';
import type { ReorderResult } from '../models/ReorderResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkitemsorderService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Reorder Sprint Backlog/Taskboard Work Items
     * @returns ReorderResult successful operation
     * @throws ApiError
     */
    public workitemsorderReorderIterationWorkItems({
        organization,
        body,
        project,
        team,
        iterationId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ReorderOperation,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * The id of the iteration
         */
        iterationId: string,
    }): CancelablePromise<Array<ReorderResult>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/iterations/{iterationId}/workitemsorder',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'iterationId': iterationId,
            },
            body: body,
        });
    }
    /**
     * Reorder Product Backlog/Boards Work Items
     * @returns ReorderResult successful operation
     * @throws ApiError
     */
    public workitemsorderReorderBacklogWorkItems({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ReorderOperation,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Array<ReorderResult>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/work/workitemsorder',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
