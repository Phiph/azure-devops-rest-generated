/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProcessWorkItemTypeFieldRequest } from '../models/AddProcessWorkItemTypeFieldRequest';
import type { ProcessWorkItemTypeField } from '../models/ProcessWorkItemTypeField';
import type { UpdateProcessWorkItemTypeFieldRequest } from '../models/UpdateProcessWorkItemTypeFieldRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FieldsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds a field to a work item type.
     * @returns ProcessWorkItemTypeField successful operation
     * @throws ApiError
     */
    public fieldsAdd({
        organization,
        body,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: AddProcessWorkItemTypeFieldRequest,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
    }): CancelablePromise<ProcessWorkItemTypeField> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/fields',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            body: body,
        });
    }
    /**
     * Returns a list of all fields in a work item type.
     * @returns ProcessWorkItemTypeField successful operation
     * @throws ApiError
     */
    public fieldsList({
        organization,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
    }): CancelablePromise<Array<ProcessWorkItemTypeField>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/fields',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
        });
    }
    /**
     * Returns a field in a work item type.
     * @returns ProcessWorkItemTypeField successful operation
     * @throws ApiError
     */
    public fieldsGet({
        organization,
        processId,
        witRefName,
        fieldRefName,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The reference name of the field.
         */
        fieldRefName: string,
        expand?: 'none' | 'allowedValues' | 'all',
    }): CancelablePromise<ProcessWorkItemTypeField> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/fields/{fieldRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'fieldRefName': fieldRefName,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Removes a field from a work item type. Does not permanently delete the field.
     * @returns any successful operation
     * @throws ApiError
     */
    public fieldsRemoveWorkItemTypeField({
        organization,
        processId,
        witRefName,
        fieldRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The reference name of the field.
         */
        fieldRefName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/fields/{fieldRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'fieldRefName': fieldRefName,
            },
        });
    }
    /**
     * Updates a field in a work item type.
     * @returns ProcessWorkItemTypeField successful operation
     * @throws ApiError
     */
    public fieldsUpdate({
        organization,
        body,
        processId,
        witRefName,
        fieldRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateProcessWorkItemTypeFieldRequest,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The reference name of the field.
         */
        fieldRefName: string,
    }): CancelablePromise<ProcessWorkItemTypeField> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/fields/{fieldRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'fieldRefName': fieldRefName,
            },
            body: body,
        });
    }
}
