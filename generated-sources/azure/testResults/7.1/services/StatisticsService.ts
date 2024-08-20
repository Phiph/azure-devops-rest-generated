/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestRunStatistic } from '../models/TestRunStatistic';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatisticsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get test run statistics , used when we want to get summary of a run by outcome.
     * @returns TestRunStatistic successful operation
     * @throws ApiError
     */
    public statisticsGet({
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
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/statistics',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
}
