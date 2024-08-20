/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuiteTestCaseCreateUpdateParameters } from '../models/SuiteTestCaseCreateUpdateParameters';
import type { TestCase } from '../models/TestCase';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SuiteTestCaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add test cases to a suite with specified configurations
     * @returns TestCase successful operation
     * @throws ApiError
     */
    public suiteTestCaseAdd({
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
         * SuiteTestCaseCreateUpdateParameters object.
         */
        body: Array<SuiteTestCaseCreateUpdateParameters>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan to which test cases are to be added.
         */
        planId: number,
        /**
         * ID of the test suite to which test cases are to be added.
         */
        suiteId: number,
    }): CancelablePromise<Array<TestCase>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            body: body,
        });
    }
    /**
     * Get Test Case List return those test cases which have all the configuration Ids as mentioned in the optional parameter. If configuration Ids is null, it return all the test cases
     * @returns TestCase successful operation
     * @throws ApiError
     */
    public suiteTestCaseGetTestCaseList({
        organization,
        project,
        planId,
        suiteId,
        testIds,
        configurationIds,
        witFields,
        continuationToken,
        returnIdentityRef,
        expand,
        excludeFlags,
        isRecursive,
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
         * ID of the test plan for which test cases are requested.
         */
        planId: number,
        /**
         * ID of the test suite for which test cases are requested.
         */
        suiteId: number,
        /**
         * Test Case Ids to be fetched.
         */
        testIds?: string,
        /**
         * Fetch Test Cases which contains all the configuration Ids specified.
         */
        configurationIds?: string,
        /**
         * Get the list of witFields.
         */
        witFields?: string,
        /**
         * If the list of test cases returned is not complete, a continuation token to query next batch of test cases is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test cases.
         */
        continuationToken?: string,
        /**
         * If set to true, returns all identity fields, like AssignedTo, ActivatedBy etc., as IdentityRef objects. If set to false, these fields are returned as unique names in string format. This is false by default.
         */
        returnIdentityRef?: boolean,
        /**
         * If set to false, will get a smaller payload containing only basic details about the suite test case object
         */
        expand?: boolean,
        /**
         * Flag to exclude various values from payload. For example to remove point assignments pass exclude = 1. To remove extra information (links, test plan , test suite) pass exclude = 2. To remove both extra information and point assignments pass exclude = 3 (1 + 2).
         */
        excludeFlags?: 'none' | 'pointAssignments' | 'extraInformation',
        isRecursive?: boolean,
    }): CancelablePromise<Array<TestCase>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            query: {
                'testIds': testIds,
                'configurationIds': configurationIds,
                'witFields': witFields,
                'continuationToken': continuationToken,
                'returnIdentityRef': returnIdentityRef,
                'expand': expand,
                'excludeFlags': excludeFlags,
                'isRecursive': isRecursive,
            },
        });
    }
    /**
     * Removes test cases from a suite based on the list of test case Ids provided. This API can be used to remove a larger number of test cases.
     * @returns any successful operation
     * @throws ApiError
     */
    public suiteTestCaseRemoveTestCasesListFromSuite({
        organization,
        project,
        planId,
        suiteId,
        testIds,
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
         * ID of the test plan from which test cases are to be removed.
         */
        planId: number,
        /**
         * ID of the test suite from which test cases are to be removed.
         */
        suiteId: number,
        /**
         * Comma separated string of Test Case Ids to be removed.
         */
        testIds: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            query: {
                'testIds': testIds,
            },
        });
    }
    /**
     * Update the configurations for test cases
     * @returns TestCase successful operation
     * @throws ApiError
     */
    public suiteTestCaseUpdate({
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
         * A SuiteTestCaseCreateUpdateParameters object.
         */
        body: Array<SuiteTestCaseCreateUpdateParameters>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan to which test cases are to be updated.
         */
        planId: number,
        /**
         * ID of the test suite to which test cases are to be updated.
         */
        suiteId: number,
    }): CancelablePromise<Array<TestCase>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            body: body,
        });
    }
    /**
     * Get a particular Test Case from a Suite.
     * @returns TestCase successful operation
     * @throws ApiError
     */
    public suiteTestCaseGetTestCase({
        organization,
        project,
        planId,
        suiteId,
        testCaseId,
        witFields,
        returnIdentityRef,
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
         * ID of the test plan for which test cases are requested.
         */
        planId: number,
        /**
         * ID of the test suite for which test cases are requested.
         */
        suiteId: number,
        /**
         * Test Case Id to be fetched.
         */
        testCaseId: string,
        /**
         * Get the list of witFields.
         */
        witFields?: string,
        /**
         * If set to true, returns all identity fields, like AssignedTo, ActivatedBy etc., as IdentityRef objects. If set to false, these fields are returned as unique names in string format. This is false by default.
         */
        returnIdentityRef?: boolean,
    }): CancelablePromise<Array<TestCase>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'testCaseId': testCaseId,
            },
            query: {
                'witFields': witFields,
                'returnIdentityRef': returnIdentityRef,
            },
        });
    }
}
