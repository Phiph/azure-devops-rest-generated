/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestIterationDetailsModel } from '../models/TestIterationDetailsModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IterationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get iterations for a result
     * @returns TestIterationDetailsModel successful operation
     * @throws ApiError
     */
    public iterationsList({
        organization,
        project,
        runId,
        testCaseResultId,
        includeActionResults,
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
         * ID of the test run that contains the result.
         */
        runId: number,
        /**
         * ID of the test result that contains the iterations.
         */
        testCaseResultId: number,
        /**
         * Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.
         */
        includeActionResults?: boolean,
    }): CancelablePromise<Array<TestIterationDetailsModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/iterations',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
            query: {
                'includeActionResults': includeActionResults,
            },
        });
    }
    /**
     * Get iteration for a result
     * @returns TestIterationDetailsModel successful operation
     * @throws ApiError
     */
    public iterationsGet({
        organization,
        project,
        runId,
        testCaseResultId,
        iterationId,
        includeActionResults,
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
         * ID of the test run that contains the result.
         */
        runId: number,
        /**
         * ID of the test result that contains the iterations.
         */
        testCaseResultId: number,
        /**
         * Id of the test results Iteration.
         */
        iterationId: number,
        /**
         * Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.
         */
        includeActionResults?: boolean,
    }): CancelablePromise<TestIterationDetailsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/iterations/{iterationId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
                'iterationId': iterationId,
            },
            query: {
                'includeActionResults': includeActionResults,
            },
        });
    }
}
