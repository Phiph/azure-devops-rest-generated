/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PipelineTestMetrics } from '../models/PipelineTestMetrics';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get summary of test results.
     * @returns PipelineTestMetrics successful operation
     * @throws ApiError
     */
    public metricsGet({
        organization,
        project,
        pipelineId,
        stageName,
        phaseName,
        jobName,
        metricNames,
        groupByNode,
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
        metricNames?: string,
        /**
         * Group summary for each node of the pipleine heirarchy
         */
        groupByNode?: boolean,
    }): CancelablePromise<PipelineTestMetrics> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/metrics',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'pipelineId': pipelineId,
                'stageName': stageName,
                'phaseName': phaseName,
                'jobName': jobName,
                'metricNames': metricNames,
                'groupByNode': groupByNode,
            },
        });
    }
}
