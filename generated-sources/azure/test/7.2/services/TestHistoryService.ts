/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestHistoryQuery } from '../models/TestHistoryQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestHistoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get history of a test method using TestHistoryQuery
     * @returns TestHistoryQuery successful operation
     * @throws ApiError
     */
    public testHistoryQuery({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestHistoryQuery to get history
         */
        body: TestHistoryQuery,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestHistoryQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/Results/testhistory',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
