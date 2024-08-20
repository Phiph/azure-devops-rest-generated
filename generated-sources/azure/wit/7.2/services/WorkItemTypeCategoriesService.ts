/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTypeCategory } from '../models/WorkItemTypeCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTypeCategoriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all work item type categories.
     * @returns WorkItemTypeCategory successful operation
     * @throws ApiError
     */
    public workItemTypeCategoriesList({
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
    }): CancelablePromise<Array<WorkItemTypeCategory>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypecategories',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Get specific work item type category by name.
     * @returns WorkItemTypeCategory successful operation
     * @throws ApiError
     */
    public workItemTypeCategoriesGet({
        organization,
        project,
        category,
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
         * The category name
         */
        category: string,
    }): CancelablePromise<WorkItemTypeCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypecategories/{category}',
            path: {
                'organization': organization,
                'project': project,
                'category': category,
            },
        });
    }
}
