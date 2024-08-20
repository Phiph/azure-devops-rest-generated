/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountRecentActivityWorkItemModel2 } from '../models/AccountRecentActivityWorkItemModel2';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountMyWorkRecentActivityService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets recent work item activities
     * @returns AccountRecentActivityWorkItemModel2 successful operation
     * @throws ApiError
     */
    public accountMyWorkRecentActivityList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<AccountRecentActivityWorkItemModel2>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/accountmyworkrecentactivity',
            path: {
                'organization': organization,
            },
        });
    }
}
