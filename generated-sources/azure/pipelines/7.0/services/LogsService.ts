/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Log } from '../models/Log';
import type { LogCollection } from '../models/LogCollection';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LogsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of logs from a pipeline run.
     * @returns LogCollection successful operation
     * @throws ApiError
     */
    public logsList({
        organization,
        project,
        pipelineId,
        runId,
        expand,
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
         * ID of the pipeline.
         */
        pipelineId: number,
        /**
         * ID of the run of that pipeline.
         */
        runId: number,
        /**
         * Expand options. Default is None.
         */
        expand?: 'none' | 'signedContent',
    }): CancelablePromise<LogCollection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/runs/{runId}/logs',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
                'runId': runId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Get a specific log from a pipeline run
     * @returns Log successful operation
     * @throws ApiError
     */
    public logsGet({
        organization,
        project,
        pipelineId,
        runId,
        logId,
        expand,
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
         * ID of the pipeline.
         */
        pipelineId: number,
        /**
         * ID of the run of that pipeline.
         */
        runId: number,
        /**
         * ID of the log.
         */
        logId: number,
        /**
         * Expand options. Default is None.
         */
        expand?: 'none' | 'signedContent',
    }): CancelablePromise<Log> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/runs/{runId}/logs/{logId}',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
                'runId': runId,
                'logId': logId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
}
