/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShallowTestCaseResult } from '../models/ShallowTestCaseResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsbybuildService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ShallowTestCaseResult successful operation
     * @throws ApiError
     */
    public resultsbybuildList({
        organization,
        project,
        buildId,
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
        buildId: number,
        publishContext?: string,
        outcomes?: string,
        top?: number,
        continuationToken?: string,
    }): CancelablePromise<Array<ShallowTestCaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsbybuild',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
                'publishContext': publishContext,
                'outcomes': outcomes,
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
}
