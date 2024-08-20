/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldUpdate } from '../models/FieldUpdate';
import type { WorkItemField2 } from '../models/WorkItemField2';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FieldsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new field.
     * @returns WorkItemField2 successful operation
     * @throws ApiError
     */
    public fieldsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * New field definition
         */
        body: WorkItemField2,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemField2> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/fields',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Returns information for all fields. The project ID/name parameter is optional.
     * @returns WorkItemField2 successful operation
     * @throws ApiError
     */
    public fieldsList({
        organization,
        project,
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
         * Use ExtensionFields to include extension fields, otherwise exclude them. Unless the feature flag for this parameter is enabled, extension fields are always included.
         */
        expand?: 'none' | 'extensionFields' | 'includeDeleted',
    }): CancelablePromise<Array<WorkItemField2>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/fields',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Deletes the field. To undelete a filed, see "Update Field" API.
     * @returns any successful operation
     * @throws ApiError
     */
    public fieldsDelete({
        organization,
        fieldNameOrRefName,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Field simple name or reference name
         */
        fieldNameOrRefName: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/fields/{fieldNameOrRefName}',
            path: {
                'organization': organization,
                'fieldNameOrRefName': fieldNameOrRefName,
                'project': project,
            },
        });
    }
    /**
     * Gets information on a specific field.
     * @returns WorkItemField2 successful operation
     * @throws ApiError
     */
    public fieldsGet({
        organization,
        fieldNameOrRefName,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Field simple name or reference name
         */
        fieldNameOrRefName: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemField2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/fields/{fieldNameOrRefName}',
            path: {
                'organization': organization,
                'fieldNameOrRefName': fieldNameOrRefName,
                'project': project,
            },
        });
    }
    /**
     * Update a field.
     * @returns WorkItemField2 successful operation
     * @throws ApiError
     */
    public fieldsUpdate({
        organization,
        body,
        fieldNameOrRefName,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Payload contains desired value of the field's properties
         */
        body: FieldUpdate,
        /**
         * Name/reference name of the field to be updated
         */
        fieldNameOrRefName: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemField2> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/fields/{fieldNameOrRefName}',
            path: {
                'organization': organization,
                'fieldNameOrRefName': fieldNameOrRefName,
                'project': project,
            },
            body: body,
        });
    }
}
