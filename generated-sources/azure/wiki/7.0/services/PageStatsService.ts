/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPageDetail } from '../models/WikiPageDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PageStatsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns page detail corresponding to Page ID.
     * @returns WikiPageDetail successful operation
     * @throws ApiError
     */
    public pageStatsGet({
        organization,
        project,
        wikiIdentifier,
        pageId,
        pageViewsForDays,
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
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki page ID.
         */
        pageId: number,
        /**
         * last N days from the current day for which page views is to be returned. It's inclusive of current day.
         */
        pageViewsForDays?: number,
    }): CancelablePromise<WikiPageDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages/{pageId}/stats',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
                'pageId': pageId,
            },
            query: {
                'pageViewsForDays': pageViewsForDays,
            },
        });
    }
}
