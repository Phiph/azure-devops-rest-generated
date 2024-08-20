/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParentChildWIMap } from '../models/ParentChildWIMap';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BoardparentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the list of parent field filter model for the given list of workitem ids
     * @returns ParentChildWIMap successful operation
     * @throws ApiError
     */
    public boardparentsList({
        organization,
        project,
        childBacklogContextCategoryRefName,
        workitemIds,
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
        childBacklogContextCategoryRefName: string,
        workitemIds: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Array<ParentChildWIMap>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/work/boards/boardparents',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            query: {
                'childBacklogContextCategoryRefName': childBacklogContextCategoryRefName,
                'workitemIds': workitemIds,
            },
        });
    }
}
