/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResultRetentionSettings } from '../models/ResultRetentionSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultRetentionSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get test result retention settings
     * @returns ResultRetentionSettings successful operation
     * @throws ApiError
     */
    public resultRetentionSettingsGet({
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
    }): CancelablePromise<ResultRetentionSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/resultretentionsettings',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Update test result retention settings
     * @returns ResultRetentionSettings successful operation
     * @throws ApiError
     */
    public resultRetentionSettingsUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Test result retention settings details to be updated
         */
        body: ResultRetentionSettings,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ResultRetentionSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/test/resultretentionsettings',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
