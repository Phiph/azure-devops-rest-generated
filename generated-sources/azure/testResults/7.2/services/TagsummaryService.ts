/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestTagSummary } from '../models/TestTagSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsummaryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all the tags in a build.
     * @returns TestTagSummary successful operation
     * @throws ApiError
     */
    public tagsummaryGetTestTagSummaryForBuild({
        organization,
        project,
        buildId,
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
         * Build ID
         */
        buildId: number,
    }): CancelablePromise<TestTagSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/tagsummary',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
            },
        });
    }
}
