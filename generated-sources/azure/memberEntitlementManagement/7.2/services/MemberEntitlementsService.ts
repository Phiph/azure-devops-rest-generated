/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MemberEntitlementsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any[] successful operation
     * @throws ApiError
     */
    public memberEntitlementsSearchMemberEntitlements({
        organization,
        continuationToken,
        select,
        filter,
        orderBy,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        continuationToken?: string,
        select?: 'license' | 'extensions' | 'projects' | 'groupRules' | 'all',
        filter?: string,
        orderBy?: string,
    }): CancelablePromise<any[]> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/memberentitlements',
            path: {
                'organization': organization,
            },
            query: {
                'continuationToken': continuationToken,
                'select': select,
                '$filter': filter,
                '$orderBy': orderBy,
            },
        });
    }
}
