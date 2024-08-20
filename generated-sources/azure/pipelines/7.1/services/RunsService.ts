/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Run } from '../models/Run';
import type { RunPipelineParameters } from '../models/RunPipelineParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RunsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets top 10000 runs for a particular pipeline.
     * @returns Run successful operation
     * @throws ApiError
     */
    public runsList({
        organization,
        project,
        pipelineId,
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
         * The pipeline id
         */
        pipelineId: number,
    }): CancelablePromise<Array<Run>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/runs',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
            },
        });
    }
    /**
     * Runs a pipeline.
     * @returns Run successful operation
     * @throws ApiError
     */
    public runsRunPipeline({
        organization,
        body,
        project,
        pipelineId,
        pipelineVersion,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Optional additional parameters for this run.
         */
        body: RunPipelineParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The pipeline ID.
         */
        pipelineId: number,
        /**
         * The pipeline version.
         */
        pipelineVersion?: number,
    }): CancelablePromise<Run> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/runs',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
            },
            query: {
                'pipelineVersion': pipelineVersion,
            },
            body: body,
        });
    }
    /**
     * Gets a run for a particular pipeline.
     * @returns Run successful operation
     * @throws ApiError
     */
    public runsGet({
        organization,
        project,
        pipelineId,
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
         * The pipeline id
         */
        pipelineId: number,
        /**
         * The run id
         */
        runId: number,
    }): CancelablePromise<Run> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
                'runId': runId,
            },
        });
    }
}
