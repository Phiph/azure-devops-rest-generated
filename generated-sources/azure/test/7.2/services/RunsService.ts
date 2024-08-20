/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunCreateModel } from '../models/RunCreateModel';
import type { RunUpdateModel } from '../models/RunUpdateModel';
import type { TestRun } from '../models/TestRun';
import type { TestRunStatistic } from '../models/TestRunStatistic';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RunsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create new test run.
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Run details RunCreateModel
         */
        body: RunCreateModel,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestRun> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/runs',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of test runs.
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsList({
        organization,
        project,
        buildUri,
        owner,
        tmiRunId,
        planId,
        includeRunDetails,
        automated,
        skip,
        top,
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
         * URI of the build that the runs used.
         */
        buildUri?: string,
        /**
         * Team foundation ID of the owner of the runs.
         */
        owner?: string,
        tmiRunId?: string,
        /**
         * ID of the test plan that the runs are a part of.
         */
        planId?: number,
        /**
         * If true, include all the properties of the runs.
         */
        includeRunDetails?: boolean,
        /**
         * If true, only returns automated runs.
         */
        automated?: boolean,
        /**
         * Number of test runs to skip.
         */
        skip?: number,
        /**
         * Number of test runs to return.
         */
        top?: number,
    }): CancelablePromise<Array<TestRun>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/runs',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildUri': buildUri,
                'owner': owner,
                'tmiRunId': tmiRunId,
                'planId': planId,
                'includeRunDetails': includeRunDetails,
                'automated': automated,
                '$skip': skip,
                '$top': top,
            },
        });
    }
    /**
     * Delete a test run by its ID.
     * @returns any successful operation
     * @throws ApiError
     */
    public runsDelete({
        organization,
        project,
        runId,
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
         * ID of the run to delete.
         */
        runId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/test/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
    /**
     * Get a test run by its ID.
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsGetTestRunById({
        organization,
        project,
        runId,
        includeDetails,
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
         * ID of the run to get.
         */
        runId: number,
        /**
         * Default value is true. It includes details like run statistics, release, build, test environment, post process state, and more.
         */
        includeDetails?: boolean,
    }): CancelablePromise<TestRun> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'includeDetails': includeDetails,
            },
        });
    }
    /**
     * Update test run by its ID.
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsUpdate({
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
         * Run details RunUpdateModel
         */
        body: RunUpdateModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the run to update.
         */
        runId: number,
    }): CancelablePromise<TestRun> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/test/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * Get test run statistics , used when we want to get summary of a run by outcome.
     * @returns TestRunStatistic successful operation
     * @throws ApiError
     */
    public runsGetTestRunStatistics({
        organization,
        project,
        runId,
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
         * ID of the run to get.
         */
        runId: number,
    }): CancelablePromise<TestRunStatistic> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/runs/{runId}/Statistics',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
}
