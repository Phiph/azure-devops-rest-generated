/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatusService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * <p>Gets the build status for a definition, optionally scoped to a specific branch, stage, job, and configuration.</p> <p>If there are more than one, then it is required to pass in a stageName value when specifying a jobName, and the same rule then applies for both if passing a configuration parameter.</p>
     * @returns string successful operation
     * @throws ApiError
     */
    public statusGet({
        organization,
        project,
        definition,
        branchName,
        stageName,
        jobName,
        configuration,
        label,
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
         * Either the definition name with optional leading folder path, or the definition id.
         */
        definition: string,
        /**
         * Only consider the most recent build for this branch. If not specified, the default branch is used.
         */
        branchName?: string,
        /**
         * Use this stage within the pipeline to render the status.
         */
        stageName?: string,
        /**
         * Use this job within a stage of the pipeline to render the status.
         */
        jobName?: string,
        /**
         * Use this job configuration to render the status
         */
        configuration?: string,
        /**
         * Replaces the default text on the left side of the badge.
         */
        label?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/status/{definition}',
            path: {
                'organization': organization,
                'project': project,
                'definition': definition,
            },
            query: {
                'branchName': branchName,
                'stageName': stageName,
                'jobName': jobName,
                'configuration': configuration,
                'label': label,
            },
        });
    }
}
