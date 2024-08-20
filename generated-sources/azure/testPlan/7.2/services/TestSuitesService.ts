/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestSuite } from '../models/TestSuite';
import type { TestSuiteCreateParams } from '../models/TestSuiteCreateParams';
import type { TestSuiteUpdateParams } from '../models/TestSuiteUpdateParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestSuitesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Find the list of all test suites in which a given test case is present. This is helpful if you need to find out which test suites are using a test case, when you need to make changes to a test case.
     * @returns TestSuite successful operation
     * @throws ApiError
     */
    public testSuitesGetSuitesByTestCaseId({
        organization,
        testCaseId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the test case for which suites need to be fetched.
         */
        testCaseId: number,
    }): CancelablePromise<Array<TestSuite>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/testplan/suites',
            path: {
                'organization': organization,
            },
            query: {
                'testCaseId': testCaseId,
            },
        });
    }
    /**
     * Create test suite.
     * @returns TestSuite successful operation
     * @throws ApiError
     */
    public testSuitesCreate({
        organization,
        body,
        project,
        planId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Parameters for suite creation
         */
        body: TestSuiteCreateParams,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan that contains the suites.
         */
        planId: number,
    }): CancelablePromise<TestSuite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/suites',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
            },
            body: body,
        });
    }
    /**
     * Get test suites for plan.
     * @returns TestSuite successful operation
     * @throws ApiError
     */
    public testSuitesGetTestSuitesForPlan({
        organization,
        project,
        planId,
        expand,
        continuationToken,
        asTreeView,
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
         * ID of the test plan for which suites are requested.
         */
        planId: number,
        /**
         * Include the children suites and testers details.
         */
        expand?: 'none' | 'children' | 'defaultTesters',
        /**
         * If the list of suites returned is not complete, a continuation token to query next batch of suites is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test suites.
         */
        continuationToken?: string,
        /**
         * If the suites returned should be in a tree structure.
         */
        asTreeView?: boolean,
    }): CancelablePromise<Array<TestSuite>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/suites',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
            },
            query: {
                'expand': expand,
                'continuationToken': continuationToken,
                'asTreeView': asTreeView,
            },
        });
    }
    /**
     * Delete test suite.
     * @returns any successful operation
     * @throws ApiError
     */
    public testSuitesDelete({
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
         * ID of the test plan that contains the suite.
         */
        planId: number,
        /**
         * ID of the test suite to delete.
         */
        suiteId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/suites/{suiteId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
        });
    }
    /**
     * Get test suite by suite id.
     * @returns TestSuite successful operation
     * @throws ApiError
     */
    public testSuitesGet({
        organization,
        project,
        planId,
        suiteId,
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
         * ID of the test plan that contains the suites.
         */
        planId: number,
        /**
         * ID of the suite to get.
         */
        suiteId: number,
        /**
         * Include the children suites and testers details
         */
        expand?: 'none' | 'children' | 'defaultTesters',
    }): CancelablePromise<TestSuite> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/suites/{suiteId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            query: {
                'expand': expand,
            },
        });
    }
    /**
     * Update test suite.
     * @returns TestSuite successful operation
     * @throws ApiError
     */
    public testSuitesUpdate({
        organization,
        body,
        project,
        planId,
        suiteId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Parameters for suite updation
         */
        body: TestSuiteUpdateParams,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan that contains the suites.
         */
        planId: number,
        /**
         * ID of the parent suite.
         */
        suiteId: number,
    }): CancelablePromise<TestSuite> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/suites/{suiteId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            body: body,
        });
    }
}
