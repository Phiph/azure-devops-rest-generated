/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryModel } from '../models/QueryModel';
import type { TestCaseResult } from '../models/TestCaseResult';
import type { TestResultsQuery } from '../models/TestResultsQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestResultsQuery successful operation
     * @throws ApiError
     */
    public resultsGetTestResultsByQuery({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestResultsQuery,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestResultsQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/results',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsGetTestResultsByQueryWiql({
        organization,
        body,
        project,
        includeResultDetails,
        includeIterationDetails,
        skip,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: QueryModel,
        /**
         * Project ID or project name
         */
        project: string,
        includeResultDetails?: boolean,
        includeIterationDetails?: boolean,
        skip?: number,
        top?: number,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/results/query',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'includeResultDetails': includeResultDetails,
                'includeIterationDetails': includeIterationDetails,
                '$skip': skip,
                '$top': top,
            },
            body: body,
        });
    }
    /**
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
        body: Array<TestCaseResult>,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsGetTestResults({
        organization,
        project,
        runId,
        detailsToInclude,
        skip,
        top,
        outcomes,
        newTestsOnly,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
        detailsToInclude?: 'none' | 'iterations' | 'workItems' | 'subResults' | 'point',
        skip?: number,
        top?: number,
        outcomes?: string,
        newTestsOnly?: boolean,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results',
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
                '$newTestsOnly': newTestsOnly,
            },
        });
    }
    /**
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
        body: Array<TestCaseResult>,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<Array<TestCaseResult>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * @returns TestCaseResult successful operation
     * @throws ApiError
     */
    public resultsGetTestResultById({
        organization,
        project,
        runId,
        testResultId,
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
        runId: number,
        testResultId: number,
        detailsToInclude?: 'none' | 'iterations' | 'workItems' | 'subResults' | 'point',
    }): CancelablePromise<TestCaseResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testResultId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testResultId': testResultId,
            },
            query: {
                'detailsToInclude': detailsToInclude,
            },
        });
    }
}
