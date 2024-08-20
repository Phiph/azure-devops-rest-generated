/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestMessageLogDetails } from '../models/TestMessageLogDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MessageLogsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get test run message logs
     * @returns TestMessageLogDetails successful operation
     * @throws ApiError
     */
    public messageLogsList({
        organization,
        project,
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
         * ID of the run to get.
         */
        runId: number,
    }): CancelablePromise<Array<TestMessageLogDetails>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/messagelogs',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
}
