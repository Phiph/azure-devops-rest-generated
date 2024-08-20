/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeSearchRequest } from '../models/CodeSearchRequest';
import type { CodeSearchResponse } from '../models/CodeSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CodeSearchResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Provides a set of results for the search text.
     * @returns CodeSearchResponse successful operation
     * @throws ApiError
     */
    public codeSearchResultsFetchCodeSearchResults({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The Code Search Request.
         */
        body: CodeSearchRequest,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<CodeSearchResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/search/codesearchresults',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
