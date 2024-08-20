/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemType } from '../models/WorkItemType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the list of work item types
     * @returns WorkItemType successful operation
     * @throws ApiError
     */
    public workItemTypesList({
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
    }): CancelablePromise<Array<WorkItemType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypes',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Returns a work item type definition.
     * @returns WorkItemType successful operation
     * @throws ApiError
     */
    public workItemTypesGet({
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
         * Work item type name
         */
        type: string,
    }): CancelablePromise<WorkItemType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypes/{type}',
            path: {
                'organization': organization,
                'project': project,
                'type': type,
            },
        });
    }
}
