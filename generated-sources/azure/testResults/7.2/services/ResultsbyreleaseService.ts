/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShallowTestCaseResult } from '../models/ShallowTestCaseResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsbyreleaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ShallowTestCaseResult successful operation
     * @throws ApiError
     */
    public resultsbyreleaseList({
        organization,
        project,
        releaseId,
        releaseEnvid,
        publishContext,
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
        releaseId: number,
        releaseEnvid?: number,
        publishContext?: string,
        outcomes?: string,
        top?: number,
        continuationToken?: string,
    }): CancelablePromise<Array<ShallowTestCaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsbyrelease',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'releaseId': releaseId,
                'releaseEnvid': releaseEnvid,
                'publishContext': publishContext,
                'outcomes': outcomes,
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
}
