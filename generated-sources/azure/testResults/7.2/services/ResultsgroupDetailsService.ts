/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultsDetails } from '../models/TestResultsDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsgroupDetailsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all the available groups details and for these groups get failed and aborted results.
     * @returns TestResultsDetails successful operation
     * @throws ApiError
     */
    public resultsgroupDetailsTestResultsGroupDetails({
        organization,
        project,
        pipelineId,
        stageName,
        phaseName,
        jobName,
        shouldIncludeFailedAndAbortedResults,
        queryGroupSummaryForInProgress,
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
         * Pipeline Id. This is same as build Id.
         */
        pipelineId: number,
        /**
         * Name of the stage. Maximum supported length for name is 256 character.
         */
        stageName?: string,
        /**
         * Name of the phase. Maximum supported length for name is 256 character.
         */
        phaseName?: string,
        /**
         * Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
         */
        jobName?: string,
        /**
         * If true, it will return Ids of failed and aborted results for each test group
         */
        shouldIncludeFailedAndAbortedResults?: boolean,
        /**
         * If true, it will calculate summary for InProgress runs as well.
         */
        queryGroupSummaryForInProgress?: boolean,
    }): CancelablePromise<TestResultsDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsgroupdetails',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'pipelineId': pipelineId,
                'stageName': stageName,
                'phaseName': phaseName,
                'jobName': jobName,
                'shouldIncludeFailedAndAbortedResults': shouldIncludeFailedAndAbortedResults,
                'queryGroupSummaryForInProgress': queryGroupSummaryForInProgress,
            },
        });
    }
}
