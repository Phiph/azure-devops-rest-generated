/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Identity } from '../models/Identity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IdentitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Resolve legacy identity information for use with older APIs such as the Security APIs
     * @returns Identity successful operation
     * @throws ApiError
     */
    public identitiesReadIdentities({
        organization,
        descriptors,
        identityIds,
        subjectDescriptors,
        searchFilter,
        filterValue,
        queryMembership,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A comma separated list of identity descriptors to resolve
         */
        descriptors?: string,
        /**
         * A comma seperated list of storage keys to resolve
         */
        identityIds?: string,
        /**
         * A comma seperated list of subject descriptors to resolve
         */
        subjectDescriptors?: string,
        /**
         * The type of search to perform. Values can be AccountName (domain\alias), DisplayName, MailAddress, General (display name, account name, or unique name), or LocalGroupName (only search Azure Devops groups).
         */
        searchFilter?: string,
        /**
         * The search value, as specified by the searchFilter.
         */
        filterValue?: string,
        /**
         * The membership information to include with the identities. Values can be None for no membership data or Direct to include the groups that the identity is a member of and the identities that are a member of this identity (groups only)
         */
        queryMembership?: 'none' | 'direct' | 'expanded' | 'expandedUp' | 'expandedDown',
    }): CancelablePromise<Array<Identity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/identities',
            path: {
                'organization': organization,
            },
            query: {
                'descriptors': descriptors,
                'identityIds': identityIds,
                'subjectDescriptors': subjectDescriptors,
                'searchFilter': searchFilter,
                'filterValue': filterValue,
                'queryMembership': queryMembership,
            },
        });
    }
}
