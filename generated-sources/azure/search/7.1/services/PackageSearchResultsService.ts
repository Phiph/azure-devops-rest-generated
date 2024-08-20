/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackageSearchRequest } from '../models/PackageSearchRequest';
import type { PackageSearchResponseContent } from '../models/PackageSearchResponseContent';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PackageSearchResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Provides a set of results for the search text.
     * @returns PackageSearchResponseContent successful operation
     * @throws ApiError
     */
    public packageSearchResultsFetchPackageSearchResults({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The Package Search Request.
         */
        body: PackageSearchRequest,
    }): CancelablePromise<PackageSearchResponseContent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/search/packagesearchresults',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
