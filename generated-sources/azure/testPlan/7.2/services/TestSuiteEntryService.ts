/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuiteEntry } from '../models/SuiteEntry';
import type { SuiteEntryUpdateParams } from '../models/SuiteEntryUpdateParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestSuiteEntryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of test suite entries in the test suite.
     * @returns SuiteEntry successful operation
     * @throws ApiError
     */
    public testSuiteEntryList({
        organization,
        project,
        suiteId,
        suiteEntryType,
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
         * Id of the parent suite.
         */
        suiteId: number,
        suiteEntryType?: 'testCase' | 'suite',
    }): CancelablePromise<Array<SuiteEntry>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/suiteentry/{suiteId}',
            path: {
                'organization': organization,
                'project': project,
                'suiteId': suiteId,
            },
            query: {
                'suiteEntryType': suiteEntryType,
            },
        });
    }
    /**
     * Reorder test suite entries in the test suite.
     * @returns SuiteEntry successful operation
     * @throws ApiError
     */
    public testSuiteEntryReorderSuiteEntries({
        organization,
        body,
        project,
        suiteId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * List of SuiteEntry to reorder.
         */
        body: Array<SuiteEntryUpdateParams>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the parent test suite.
         */
        suiteId: number,
    }): CancelablePromise<Array<SuiteEntry>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/suiteentry/{suiteId}',
            path: {
                'organization': organization,
                'project': project,
                'suiteId': suiteId,
            },
            body: body,
        });
    }
}
