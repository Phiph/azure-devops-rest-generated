/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultsSettings } from '../models/TestResultsSettings';
import type { TestResultsUpdateSettings } from '../models/TestResultsUpdateSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get TestResultsSettings data
     * @returns TestResultsSettings successful operation
     * @throws ApiError
     */
    public settingsGet({
        organization,
        project,
        settingsType,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        settingsType?: 'all' | 'flaky' | 'newTestLogging',
    }): CancelablePromise<TestResultsSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/settings',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'settingsType': settingsType,
            },
        });
    }
    /**
     * Update project settings of test results
     * @returns TestResultsSettings successful operation
     * @throws ApiError
     */
    public settingsUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestResultsUpdateSettings,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestResultsSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testresults/settings',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
