/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePipelineParameters } from '../models/CreatePipelineParameters';
import type { Pipeline } from '../models/Pipeline';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PipelinesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a pipeline.
     * @returns Pipeline successful operation
     * @throws ApiError
     */
    public pipelinesCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Input parameters.
         */
        body: CreatePipelineParameters,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Pipeline> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/pipelines',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of pipelines.
     * @returns Pipeline successful operation
     * @throws ApiError
     */
    public pipelinesList({
        organization,
        project,
        orderBy,
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
         * A sort expression. Defaults to "name asc"
         */
        orderBy?: string,
        /**
         * The maximum number of pipelines to return
         */
        top?: number,
        /**
         * A continuation token from a previous request, to retrieve the next page of results
         */
        continuationToken?: string,
    }): CancelablePromise<Array<Pipeline>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'orderBy': orderBy,
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Gets a pipeline, optionally at the specified version
     * @returns Pipeline successful operation
     * @throws ApiError
     */
    public pipelinesGet({
        organization,
        project,
        pipelineId,
        pipelineVersion,
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
         * The pipeline ID
         */
        pipelineId: number,
        /**
         * The pipeline version
         */
        pipelineVersion?: number,
    }): CancelablePromise<Pipeline> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
            },
            query: {
                'pipelineVersion': pipelineVersion,
            },
        });
    }
}
