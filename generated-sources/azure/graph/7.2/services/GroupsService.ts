/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphGroup } from '../models/GraphGroup';
import type { GraphGroupCreationContext } from '../models/GraphGroupCreationContext';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new Azure DevOps group or materialize an existing AAD group.
     *
     * The body of the request must be a derived type of GraphGroupCreationContext:
     * * GraphGroupVstsCreationContext - Create a new Azure DevOps group that is not backed by an external provider.
     * * GraphGroupMailAddressCreationContext - Create a new group using the mail address as a reference to an existing group from an external AD or AAD backed provider.
     * * GraphGroupOriginIdCreationContext - Create a new group using the OriginID as a reference to a group from an external AD or AAD backed provider.
     *
     * Optionally, you can add the newly created group as a member of an existing Azure DevOps group and/or specify a custom storage key for the group.
     * @returns GraphGroup successful operation
     * @throws ApiError
     */
    public groupsCreate({
        organization,
        body,
        scopeDescriptor,
        groupDescriptors,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The subset of the full graph group used to uniquely find the graph subject in an external provider.
         */
        body: GraphGroupCreationContext,
        /**
         * A descriptor referencing the scope (collection, project) in which the group should be created. If omitted, will be created in the scope of the enclosing account or organization. Valid only for VSTS groups.
         */
        scopeDescriptor?: string,
        /**
         * A comma separated list of descriptors referencing groups you want the graph group to join
         */
        groupDescriptors?: string,
    }): CancelablePromise<GraphGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/graph/groups',
            path: {
                'organization': organization,
            },
            query: {
                'scopeDescriptor': scopeDescriptor,
                'groupDescriptors': groupDescriptors,
            },
            body: body,
        });
    }
    /**
     * Gets a list of all groups in the current scope (usually organization or account).
     *
     * The optional parameters are used to filter down the returned results. Returned results are in no guaranteed order.
     *
     * Since the list of groups may be large, results are returned in pages of groups.  If there are more results
     * than can be returned in a single page, the result set will contain a continuation token for retrieval of the
     * next set of results.
     * @returns GraphGroup successful operation
     * @throws ApiError
     */
    public groupsList({
        organization,
        scopeDescriptor,
        subjectTypes,
        continuationToken,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Specify a non-default scope (collection, project) to search for groups.
         */
        scopeDescriptor?: string,
        /**
         * A comma separated list of user subject subtypes to reduce the retrieved results, e.g. Microsoft.IdentityModel.Claims.ClaimsIdentity
         */
        subjectTypes?: string,
        /**
         * An opaque data blob that allows the next page of data to resume immediately after where the previous page ended. The only reliable way to know if there is more data left is the presence of a continuation token.
         */
        continuationToken?: string,
    }): CancelablePromise<Array<GraphGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/groups',
            path: {
                'organization': organization,
            },
            query: {
                'scopeDescriptor': scopeDescriptor,
                'subjectTypes': subjectTypes,
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Removes an Azure DevOps group from all of its parent groups.
     *
     * The group will still be visible, but membership
     * checks for the group, and all descendants which derive membership through it, will return false.”
     * @returns any successful operation
     * @throws ApiError
     */
    public groupsDelete({
        organization,
        groupDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the group to delete.
         */
        groupDescriptor: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/graph/groups/{groupDescriptor}',
            path: {
                'organization': organization,
                'groupDescriptor': groupDescriptor,
            },
        });
    }
    /**
     * Get a group by its descriptor.
     *
     * The group will be returned even if it has been deleted from the account or has had all its memberships
     * deleted.
     * @returns GraphGroup successful operation
     * @throws ApiError
     */
    public groupsGet({
        organization,
        groupDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the desired graph group.
         */
        groupDescriptor: string,
    }): CancelablePromise<GraphGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/groups/{groupDescriptor}',
            path: {
                'organization': organization,
                'groupDescriptor': groupDescriptor,
            },
        });
    }
    /**
     * Update the properties of an Azure DevOps group.
     *
     * Currently limited to only changing the description and account name.
     * @returns GraphGroup successful operation
     * @throws ApiError
     */
    public groupsUpdate({
        organization,
        groupDescriptor,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the group to modify.
         */
        groupDescriptor: string,
        /**
         * The JSON+Patch document containing the fields to alter.
         */
        body: JsonPatchDocument,
    }): CancelablePromise<GraphGroup> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/graph/groups/{groupDescriptor}',
            path: {
                'organization': organization,
                'groupDescriptor': groupDescriptor,
            },
            body: body,
        });
    }
}
