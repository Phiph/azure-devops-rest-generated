/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedDataForResultTrend } from '../models/AggregatedDataForResultTrend';
import type { TestResultTrendFilter } from '../models/TestResultTrendFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultTrendByReleaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns AggregatedDataForResultTrend successful operation
     * @throws ApiError
     */
    public resultTrendByReleaseQuery({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestResultTrendFilter,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<AggregatedDataForResultTrend>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/resulttrendbyrelease',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
