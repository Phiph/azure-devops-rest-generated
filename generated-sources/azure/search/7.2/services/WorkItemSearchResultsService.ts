/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemSearchRequest } from '../models/WorkItemSearchRequest';
import type { WorkItemSearchResponse } from '../models/WorkItemSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemSearchResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Provides a set of results for the search text.
     * @returns WorkItemSearchResponse successful operation
     * @throws ApiError
     */
    public workItemSearchResultsFetchWorkItemSearchResults({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The Work Item Search Request.
         */
        body: WorkItemSearchRequest,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemSearchResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/search/workitemsearchresults',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
