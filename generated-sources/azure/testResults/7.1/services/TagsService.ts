/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestTag } from '../models/TestTag';
import type { TestTagsUpdateModel } from '../models/TestTagsUpdateModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestTag successful operation
     * @throws ApiError
     */
    public tagsUpdate({
        organization,
        body,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestTagsUpdateModel,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<Array<TestTag>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/tags',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * @returns TestTag successful operation
     * @throws ApiError
     */
    public tagsGetTestTagsForBuild({
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
        buildId: number,
    }): CancelablePromise<Array<TestTag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/tags',
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
