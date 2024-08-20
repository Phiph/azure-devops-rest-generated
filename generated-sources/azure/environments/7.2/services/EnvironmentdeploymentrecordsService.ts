/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentDeploymentExecutionRecord } from '../models/EnvironmentDeploymentExecutionRecord';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentdeploymentrecordsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get environment deployment execution history
     * @returns EnvironmentDeploymentExecutionRecord successful operation
     * @throws ApiError
     */
    public environmentdeploymentrecordsList({
        organization,
        project,
        environmentId,
        continuationToken,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        environmentId: number,
        continuationToken?: string,
        top?: number,
    }): CancelablePromise<Array<EnvironmentDeploymentExecutionRecord>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/environmentdeploymentrecords',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            query: {
                'continuationToken': continuationToken,
                'top': top,
            },
        });
    }
}
