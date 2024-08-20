/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestCaseResult } from '../models/TestCaseResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add test results to a test run.
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsAdd({
        organization,
        body,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * List of test results to add.
         */
        body: Array<TestCaseResult>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Test run ID into which test results to add.
         */
        runId: number,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/results',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * Get test results for a test run.
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsList({
        organization,
        project,
        runId,
        detailsToInclude,
        skip,
        top,
        outcomes,
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
         * Test run ID of test results to fetch.
         */
        runId: number,
        /**
         * Details to include with test results. Default is None. Other values are Iterations and WorkItems.
         */
        detailsToInclude?: 'none' | 'iterations' | 'workItems' | 'subResults' | 'point',
        /**
         * Number of test results to skip from beginning.
         */
        skip?: number,
        /**
         * Number of test results to return. Maximum is 1000 when detailsToInclude is None and 200 otherwise.
         */
        top?: number,
        /**
         * Comma separated list of test outcomes to filter test results.
         */
        outcomes?: string,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/results',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'detailsToInclude': detailsToInclude,
                '$skip': skip,
                '$top': top,
                'outcomes': outcomes,
            },
        });
    }
    /**
     * Update test results in a test run.
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsUpdate({
        organization,
        body,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * List of test results to update.
         */
        body: Array<TestCaseResult>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Test run ID whose test results to update.
         */
        runId: number,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/results',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * Get a test result for a test run.
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsGet({
        organization,
        project,
        runId,
        testCaseResultId,
        detailsToInclude,
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
         * Test run ID of a test result to fetch.
         */
        runId: number,
        /**
         * Test result ID.
         */
        testCaseResultId: number,
        /**
         * Details to include with test results. Default is None. Other values are Iterations, WorkItems and SubResults.
         */
        detailsToInclude?: 'none' | 'iterations' | 'workItems' | 'subResults' | 'point',
    }): CancelablePromise<TestCaseResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/results/{testCaseResultId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
            query: {
                'detailsToInclude': detailsToInclude,
            },
        });
    }
}
