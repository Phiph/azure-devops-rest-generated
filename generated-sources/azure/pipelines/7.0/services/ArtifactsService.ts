/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a specific artifact from a pipeline run
     * @returns Artifact successful operation
     * @throws ApiError
     */
    public artifactsGet({
        organization,
        project,
        pipelineId,
        runId,
        artifactName,
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
         * Name of the artifact.
         */
        artifactName: string,
        /**
         * Expand options. Default is None.
         */
        expand?: 'none' | 'signedContent',
    }): CancelablePromise<Artifact> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/runs/{runId}/artifacts',
            path: {
                'organization': organization,
                'project': project,
                'pipelineId': pipelineId,
                'runId': runId,
            },
            query: {
                'artifactName': artifactName,
                '$expand': expand,
            },
        });
    }
}
