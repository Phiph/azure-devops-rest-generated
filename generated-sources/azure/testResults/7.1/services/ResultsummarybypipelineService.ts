/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultSummary } from '../models/TestResultSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsummarybypipelineService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get summary of test results.
     * @returns TestResultSummary successful operation
     * @throws ApiError
     */
    public resultsummarybypipelineQuery({
        organization,
        project,
        pipelineId,
        stageName,
        phaseName,
        jobName,
        includeFailureDetails,
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
         * If true returns failure insights
         */
        includeFailureDetails?: boolean,
    }): CancelablePromise<TestResultSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsummarybypipeline',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'pipelineId': pipelineId,
                'stageName': stageName,
                'phaseName': phaseName,
                'jobName': jobName,
                'includeFailureDetails': includeFailureDetails,
            },
        });
    }
}
