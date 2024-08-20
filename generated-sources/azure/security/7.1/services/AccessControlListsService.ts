/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessControlList } from '../models/AccessControlList';
import type { VssJsonCollectionWrapper } from '../models/VssJsonCollectionWrapper';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccessControlListsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Return a list of access control lists for the specified security namespace and token. All ACLs in the security namespace will be retrieved if no optional parameters are provided.
     * @returns AccessControlList successful operation
     * @throws ApiError
     */
    public accessControlListsQuery({
        securityNamespaceId,
        organization,
        token,
        descriptors,
        includeExtendedInfo,
        recurse,
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
         * Security token
         */
        token?: string,
        /**
         * An optional filter string containing a list of identity descriptors separated by ',' whose ACEs should be retrieved. If this is left null, entire ACLs will be returned.
         */
        descriptors?: string,
        /**
         * If true, populate the extended information properties for the access control entries contained in the returned lists.
         */
        includeExtendedInfo?: boolean,
        /**
         * If true and this is a hierarchical namespace, return child ACLs of the specified token.
         */
        recurse?: boolean,
    }): CancelablePromise<Array<AccessControlList>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/accesscontrollists/{securityNamespaceId}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
            },
            query: {
                'token': token,
                'descriptors': descriptors,
                'includeExtendedInfo': includeExtendedInfo,
                'recurse': recurse,
            },
        });
    }
    /**
     * Remove access control lists under the specfied security namespace.
     * @returns boolean successful operation
     * @throws ApiError
     */
    public accessControlListsRemoveAccessControlLists({
        securityNamespaceId,
        organization,
        tokens,
        recurse,
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
         * One or more comma-separated security tokens
         */
        tokens?: string,
        /**
         * If true and this is a hierarchical namespace, also remove child ACLs of the specified tokens.
         */
        recurse?: boolean,
    }): CancelablePromise<boolean> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/accesscontrollists/{securityNamespaceId}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
            },
            query: {
                'tokens': tokens,
                'recurse': recurse,
            },
        });
    }
    /**
     * Create or update one or more access control lists. All data that currently exists for the ACLs supplied will be overwritten.
     * @returns any successful operation
     * @throws ApiError
     */
    public accessControlListsSetAccessControlLists({
        body,
        securityNamespaceId,
        organization,
    }: {
        /**
         * A list of ACLs to create or update.
         */
        body: VssJsonCollectionWrapper,
        /**
         * Security namespace identifier.
         */
        securityNamespaceId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/accesscontrollists/{securityNamespaceId}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
            },
            body: body,
        });
    }
}
