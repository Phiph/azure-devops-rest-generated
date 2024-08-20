/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomTestFieldDefinition } from '../models/CustomTestFieldDefinition';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExtensionfieldsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns CustomTestFieldDefinition successful operation
     * @throws ApiError
     */
    public extensionfieldsAdd({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<CustomTestFieldDefinition>,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<CustomTestFieldDefinition>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/extensionfields',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * @returns CustomTestFieldDefinition successful operation
     * @throws ApiError
     */
    public extensionfieldsQuery({
        organization,
        project,
        scopeFilter,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        scopeFilter: 'none' | 'testRun' | 'testResult' | 'system' | 'all',
    }): CancelablePromise<Array<CustomTestFieldDefinition>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/extensionfields',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'scopeFilter': scopeFilter,
            },
        });
    }
}
