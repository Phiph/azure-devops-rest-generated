/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResultsFilter } from '../models/ResultsFilter';
import type { TestResultHistory } from '../models/TestResultHistory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HistoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestResultHistory successful operation
     * @throws ApiError
     */
    public historyQuery({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ResultsFilter,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestResultHistory> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/results/history',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
