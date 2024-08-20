/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestVariable } from '../models/TestVariable';
import type { TestVariableCreateUpdateParameters } from '../models/TestVariableCreateUpdateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariablesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a test variable.
     * @returns TestVariable successful operation
     * @throws ApiError
     */
    public variablesCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestVariableCreateUpdateParameters
         */
        body: TestVariableCreateUpdateParameters,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestVariable> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/variables',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of test variables.
     * @returns TestVariable successful operation
     * @throws ApiError
     */
    public variablesList({
        organization,
        project,
        continuationToken,
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
         * If the list of variables returned is not complete, a continuation token to query next batch of variables is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test variables.
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TestVariable>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/variables',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Delete a test variable by its ID.
     * @returns any successful operation
     * @throws ApiError
     */
    public variablesDelete({
        organization,
        project,
        testVariableId,
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
         * ID of the test variable to delete.
         */
        testVariableId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testplan/variables/{testVariableId}',
            path: {
                'organization': organization,
                'project': project,
                'testVariableId': testVariableId,
            },
        });
    }
    /**
     * Get a test variable by its ID.
     * @returns TestVariable successful operation
     * @throws ApiError
     */
    public variablesGet({
        organization,
        project,
        testVariableId,
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
         * ID of the test variable to get.
         */
        testVariableId: number,
    }): CancelablePromise<TestVariable> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/variables/{testVariableId}',
            path: {
                'organization': organization,
                'project': project,
                'testVariableId': testVariableId,
            },
        });
    }
    /**
     * Update a test variable by its ID.
     * @returns TestVariable successful operation
     * @throws ApiError
     */
    public variablesUpdate({
        organization,
        body,
        project,
        testVariableId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestVariableCreateUpdateParameters
         */
        body: TestVariableCreateUpdateParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test variable to update.
         */
        testVariableId: number,
    }): CancelablePromise<TestVariable> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/variables/{testVariableId}',
            path: {
                'organization': organization,
                'project': project,
                'testVariableId': testVariableId,
            },
            body: body,
        });
    }
}
