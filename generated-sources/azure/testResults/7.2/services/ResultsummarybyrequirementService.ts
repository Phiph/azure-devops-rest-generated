/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultsContext } from '../models/TestResultsContext';
import type { TestSummaryForWorkItem } from '../models/TestSummaryForWorkItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsummarybyrequirementService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestSummaryForWorkItem successful operation
     * @throws ApiError
     */
    public resultsummarybyrequirementQuery({
        organization,
        body,
        project,
        workItemIds,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestResultsContext,
        /**
         * Project ID or project name
         */
        project: string,
        workItemIds?: string,
    }): CancelablePromise<Array<TestSummaryForWorkItem>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/resultsummarybyrequirement',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'workItemIds': workItemIds,
            },
            body: body,
        });
    }
}
