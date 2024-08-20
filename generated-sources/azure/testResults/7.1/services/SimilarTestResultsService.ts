/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestCaseResult } from '../models/TestCaseResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SimilarTestResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the list of results whose failure matches with the provided one.
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public similarTestResultsList({
        organization,
        project,
        runId,
        testResultId,
        testSubResultId,
        top,
        continuationToken,
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
         * id of test run
         */
        runId: number,
        /**
         * id of test result inside a test run
         */
        testResultId: number,
        /**
         * id of subresult inside a test result
         */
        testSubResultId: number,
        /**
         * Maximum number of results to return
         */
        top?: number,
        /**
         * Header to pass the continuationToken
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testResultId}/similartestresults',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testResultId': testResultId,
            },
            headers: {
                'continuationToken': continuationToken,
            },
            query: {
                'testSubResultId': testSubResultId,
                '$top': top,
            },
        });
    }
}
