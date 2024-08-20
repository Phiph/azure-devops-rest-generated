/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsersSummary } from '../models/UsersSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserEntitlementSummaryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get summary of Licenses, Extension, Projects, Groups and their assignments in the collection.
     * @returns UsersSummary successful operation
     * @throws ApiError
     */
    public userEntitlementSummaryGet({
        organization,
        select,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Comma (",") separated list of properties to select. Supported property names are {AccessLevels, Licenses, Projects, Groups}.
         */
        select?: string,
    }): CancelablePromise<UsersSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/userentitlementsummary',
            path: {
                'organization': organization,
            },
            query: {
                'select': select,
            },
        });
    }
}
