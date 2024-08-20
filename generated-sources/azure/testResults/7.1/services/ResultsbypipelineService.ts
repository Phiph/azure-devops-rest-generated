/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShallowTestCaseResult } from '../models/ShallowTestCaseResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsbypipelineService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of results.
     * @returns ShallowTestCaseResult successful operation
     * @throws ApiError
     */
    public resultsbypipelineList({
        organization,
        project,
        pipelineId,
        stageName,
        phaseName,
        jobName,
        outcomes,
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
         * List of outcome of results
         */
        outcomes?: string,
        /**
         * Maximum number of results to return
         */
        top?: number,
        /**
         * Header to pass the continuationToken
         */
        continuationToken?: string,
    }): CancelablePromise<Array<ShallowTestCaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsbypipeline',
            path: {
                'organization': organization,
                'project': project,
            },
            headers: {
                'continuationToken': continuationToken,
            },
            query: {
                'pipelineId': pipelineId,
                'stageName': stageName,
                'phaseName': phaseName,
                'jobName': jobName,
                'outcomes': outcomes,
                '$top': top,
            },
        });
    }
}
