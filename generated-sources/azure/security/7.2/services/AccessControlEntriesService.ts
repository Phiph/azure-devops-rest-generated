/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessControlEntry } from '../models/AccessControlEntry';
import type { JObject } from '../models/JObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccessControlEntriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Remove the specified ACEs from the ACL belonging to the specified token.
     * @returns boolean successful operation
     * @throws ApiError
     */
    public accessControlEntriesRemoveAccessControlEntries({
        securityNamespaceId,
        organization,
        token,
        descriptors,
    }: {
        /**
         * Security namespace identifier.
         */
        securityNamespaceId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The token whose ACL should be modified.
         */
        token?: string,
        /**
         * String containing a list of identity descriptors separated by ',' whose entries should be removed.
         */
        descriptors?: string,
    }): CancelablePromise<boolean> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/accesscontrolentries/{securityNamespaceId}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
            },
            query: {
                'token': token,
                'descriptors': descriptors,
            },
        });
    }
    /**
     * Add or update ACEs in the ACL for the provided token. The request body contains the target token, a list of [ACEs](https://docs.microsoft.com/en-us/rest/api/azure/devops/security/access%20control%20entries/set%20access%20control%20entries?#accesscontrolentry) and a optional merge parameter. In the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior. If set, the existing ACE has its allow and deny merged with the incoming ACE's allow and deny. If unset, the existing ACE is displaced.
     * @returns AccessControlEntry successful operation
     * @throws ApiError
     */
    public accessControlEntriesSetAccessControlEntries({
        body,
        securityNamespaceId,
        organization,
    }: {
        body: JObject,
        /**
         * Security namespace identifier.
         */
        securityNamespaceId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<AccessControlEntry>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/accesscontrolentries/{securityNamespaceId}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
            },
            body: body,
        });
    }
}
