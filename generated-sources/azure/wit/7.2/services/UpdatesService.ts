/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemUpdate } from '../models/WorkItemUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UpdatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the deltas between work item revisions
     * @returns WorkItemUpdate successful operation
     * @throws ApiError
     */
    public updatesList({
        organization,
        id,
        project,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
        top?: number,
        skip?: number,
    }): CancelablePromise<Array<WorkItemUpdate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{id}/updates',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Returns a single update for a work item
     * @returns WorkItemUpdate successful operation
     * @throws ApiError
     */
    public updatesGet({
        organization,
        id,
        updateNumber,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        id: number,
        updateNumber: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemUpdate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{id}/updates/{updateNumber}',
            path: {
                'organization': organization,
                'id': id,
                'updateNumber': updateNumber,
                'project': project,
            },
        });
    }
}
