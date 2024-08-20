/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PreviewRun } from '../models/PreviewRun';
import type { RunPipelineParameters } from '../models/RunPipelineParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PreviewService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queues a dry run of the pipeline and returns an object containing the final yaml.
     * @returns PreviewRun successful operation
     * @throws ApiError
     */
    public previewPreview({
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
    }): CancelablePromise<PreviewRun> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/pipelines/{pipelineId}/preview',
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
}
