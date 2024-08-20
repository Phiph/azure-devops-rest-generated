/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestSettings } from '../models/TestSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestsettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns number successful operation
     * @throws ApiError
     */
    public testsettingsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestSettings,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/testsettings',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public testsettingsDelete({
        organization,
        project,
        testSettingsId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        testSettingsId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/testsettings',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'testSettingsId': testSettingsId,
            },
        });
    }
    /**
     * @returns TestSettings successful operation
     * @throws ApiError
     */
    public testsettingsGet({
        organization,
        project,
        testSettingsId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        testSettingsId: number,
    }): CancelablePromise<TestSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/testsettings',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'testSettingsId': testSettingsId,
            },
        });
    }
}
