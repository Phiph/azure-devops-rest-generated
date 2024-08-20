/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultDocument } from '../models/TestResultDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultDocumentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestResultDocument successful operation
     * @throws ApiError
     */
    public resultDocumentPublishTestResultDocument({
        organization,
        body,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestResultDocument,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<TestResultDocument> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/resultdocument',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
}
