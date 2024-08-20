/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiSearchRequest } from '../models/WikiSearchRequest';
import type { WikiSearchResponse } from '../models/WikiSearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WikiSearchResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Provides a set of results for the search request.
     * @returns WikiSearchResponse successful operation
     * @throws ApiError
     */
    public wikiSearchResultsFetchWikiSearchResults({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The Wiki Search Request.
         */
        body: WikiSearchRequest,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WikiSearchResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/search/wikisearchresults',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
