/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuiteTestCase } from '../models/SuiteTestCase';
import type { SuiteTestCaseUpdateModel } from '../models/SuiteTestCaseUpdateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestSuitesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all test cases in a suite.
     * @returns SuiteTestCase successful operation
     * @throws ApiError
     */
    public testSuitesList({
        organization,
        project,
        planId,
        suiteId,
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
         * ID of the test plan that contains the suites.
         */
        planId: number,
        /**
         * ID of the suite to get.
         */
        suiteId: number,
    }): CancelablePromise<Array<SuiteTestCase>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/suites/{suiteId}/testcases',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
        });
    }
    /**
     * Add test cases to suite.
     * @returns SuiteTestCase successful operation
     * @throws ApiError
     */
    public testSuitesAdd({
        organization,
        project,
        planId,
        suiteId,
        testCaseIds,
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
         * ID of the test plan that contains the suite.
         */
        planId: number,
        /**
         * ID of the test suite to which the test cases must be added.
         */
        suiteId: number,
        /**
         * IDs of the test cases to add to the suite. Ids are specified in comma separated format.
         */
        testCaseIds: string,
    }): CancelablePromise<Array<SuiteTestCase>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/suites/{suiteId}/testcases/{testCaseIds}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'testCaseIds': testCaseIds,
            },
        });
    }
    /**
     * Get a specific test case in a test suite with test case id.
     * @returns SuiteTestCase successful operation
     * @throws ApiError
     */
    public testSuitesGet({
        organization,
        project,
        planId,
        suiteId,
        testCaseIds,
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
         * ID of the test plan that contains the suites.
         */
        planId: number,
        /**
         * ID of the suite that contains the test case.
         */
        suiteId: number,
        /**
         * ID of the test case to get.
         */
        testCaseIds: number,
    }): CancelablePromise<SuiteTestCase> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/suites/{suiteId}/testcases/{testCaseIds}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'testCaseIds': testCaseIds,
            },
        });
    }
    /**
     * The test points associated with the test cases are removed from the test suite. The test case work item is not deleted from the system. See test cases resource to delete a test case permanently.
     * @returns any successful operation
     * @throws ApiError
     */
    public testSuitesRemoveTestCasesFromSuiteUrl({
        organization,
        project,
        planId,
        suiteId,
        testCaseIds,
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
         * ID of the test plan that contains the suite.
         */
        planId: number,
        /**
         * ID of the suite to get.
         */
        suiteId: number,
        /**
         * IDs of the test cases to remove from the suite.
         */
        testCaseIds: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/suites/{suiteId}/testcases/{testCaseIds}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'testCaseIds': testCaseIds,
            },
        });
    }
    /**
     * Updates the properties of the test case association in a suite.
     * @returns SuiteTestCase successful operation
     * @throws ApiError
     */
    public testSuitesUpdate({
        organization,
        body,
        project,
        planId,
        suiteId,
        testCaseIds,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Model for updation of the properties of test case suite association.
         */
        body: SuiteTestCaseUpdateModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan that contains the suite.
         */
        planId: number,
        /**
         * ID of the test suite to which the test cases must be added.
         */
        suiteId: number,
        /**
         * IDs of the test cases to add to the suite. Ids are specified in comma separated format.
         */
        testCaseIds: string,
    }): CancelablePromise<Array<SuiteTestCase>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/suites/{suiteId}/testcases/{testCaseIds}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'testCaseIds': testCaseIds,
            },
            body: body,
        });
    }
}
