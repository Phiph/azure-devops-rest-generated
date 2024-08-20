/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemReference } from '../models/WorkItemReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BugsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns WorkItemReference successful operation
     * @throws ApiError
     */
    public bugsList({
        organization,
        project,
        runId,
        testCaseResultId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
        testCaseResultId: number,
    }): CancelablePromise<Array<WorkItemReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/bugs',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
        });
    }
}
