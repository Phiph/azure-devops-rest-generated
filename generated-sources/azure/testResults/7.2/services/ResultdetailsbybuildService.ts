/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultsDetails } from '../models/TestResultsDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultdetailsbybuildService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestResultsDetails successful operation
     * @throws ApiError
     */
    public resultdetailsbybuildGet({
        organization,
        project,
        buildId,
        publishContext,
        groupBy,
        filter,
        orderby,
        shouldIncludeResults,
        queryRunSummaryForInProgress,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        buildId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string,
        shouldIncludeResults?: boolean,
        queryRunSummaryForInProgress?: boolean,
    }): CancelablePromise<TestResultsDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultdetailsbybuild',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
                'publishContext': publishContext,
                'groupBy': groupBy,
                '$filter': filter,
                '$orderby': orderby,
                'shouldIncludeResults': shouldIncludeResults,
                'queryRunSummaryForInProgress': queryRunSummaryForInProgress,
            },
        });
    }
}
