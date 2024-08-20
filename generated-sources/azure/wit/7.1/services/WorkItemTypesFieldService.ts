/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTypeFieldWithReferences } from '../models/WorkItemTypeFieldWithReferences';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTypesFieldService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of fields for a work item type with detailed references.
     * @returns WorkItemTypeFieldWithReferences successful operation
     * @throws ApiError
     */
    public workItemTypesFieldList({
        organization,
        project,
        type,
        expand,
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
         * Work item type.
         */
        type: string,
        /**
         * Expand level for the API response. Properties: to include allowedvalues, default value, isRequired etc. as a part of response; None: to skip these properties.
         */
        expand?: 'none' | 'allowedValues' | 'dependentFields' | 'all',
    }): CancelablePromise<Array<WorkItemTypeFieldWithReferences>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypes/{type}/fields',
            path: {
                'organization': organization,
                'project': project,
                'type': type,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Get a field for a work item type with detailed references.
     * @returns WorkItemTypeFieldWithReferences successful operation
     * @throws ApiError
     */
    public workItemTypesFieldGet({
        organization,
        project,
        type,
        field,
        expand,
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
         * Work item type.
         */
        type: string,
        field: string,
        /**
         * Expand level for the API response. Properties: to include allowedvalues, default value, isRequired etc. as a part of response; None: to skip these properties.
         */
        expand?: 'none' | 'allowedValues' | 'dependentFields' | 'all',
    }): CancelablePromise<WorkItemTypeFieldWithReferences> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitemtypes/{type}/fields/{field}',
            path: {
                'organization': organization,
                'project': project,
                'type': type,
                'field': field,
            },
            query: {
                '$expand': expand,
            },
        });
    }
}
