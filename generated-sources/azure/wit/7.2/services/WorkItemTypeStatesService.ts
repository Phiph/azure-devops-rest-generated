/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemStateColor } from '../models/WorkItemStateColor';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTypeStatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the state names and colors for a work item type.
     * @returns WorkItemStateColor successful operation
     * @throws ApiError
     */
    public workItemTypeStatesList({
        organization,
        project,
        type,
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
         * The state name
         */
        type: string,
    }): CancelablePromise<Array<WorkItemStateColor>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypes/{type}/states',
            path: {
                'organization': organization,
                'project': project,
                'type': type,
            },
        });
    }
}
