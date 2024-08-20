/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphUser } from '../models/GraphUser';
import type { GraphUserCreationContext } from '../models/GraphUserCreationContext';
import type { GraphUserUpdateContext } from '../models/GraphUserUpdateContext';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Materialize an existing AAD or MSA user into the ADO account.
     *
     * NOTE: Created users are not active in an account unless they have been explicitly assigned a parent group at creation time or have signed in
     * and been autolicensed through AAD group memberships.
     *
     * Adding a user to an account is required before the user can be added to ADO groups or assigned an asset.
     *
     * The body of the request must be a derived type of GraphUserCreationContext:
     * * GraphUserMailAddressCreationContext - Create a new user using the mail address as a reference to an existing user from an external AD or AAD backed provider.
     * * GraphUserOriginIdCreationContext - Create a new user using the OriginID as a reference to an existing user from an external AD or AAD backed provider.
     * * GraphUserPrincipalNameCreationContext - Create a new user using the principal name as a reference to an existing user from an external AD or AAD backed provider.
     *
     * If the user to be added corresponds to a user that was previously deleted, then that user will be restored.
     *
     * Optionally, you can add the newly created user as a member of an existing ADO group and/or specify a custom storage key for the user.
     * @returns GraphUser successful operation
     * @throws ApiError
     */
    public usersCreate({
        organization,
        body,
        groupDescriptors,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The subset of the full graph user used to uniquely find the graph subject in an external provider.
         */
        body: GraphUserCreationContext,
        /**
         * A comma separated list of descriptors of groups you want the graph user to join
         */
        groupDescriptors?: string,
    }): CancelablePromise<GraphUser> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/graph/users',
            path: {
                'organization': organization,
            },
            query: {
                'groupDescriptors': groupDescriptors,
            },
            body: body,
        });
    }
    /**
     * Get a list of all users in a given scope.
     *
     * Since the list of users may be large, results are returned in pages of users.  If there are more results
     * than can be returned in a single page, the result set will contain a continuation token for retrieval of the
     * next set of results.
     * @returns GraphUser successful operation
     * @throws ApiError
     */
    public usersList({
        organization,
        subjectTypes,
        continuationToken,
        scopeDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A comma separated list of user subject subtypes to reduce the retrieved results, e.g. msa’, ‘aad’, ‘svc’ (service identity), ‘imp’ (imported identity), etc.
         */
        subjectTypes?: string,
        /**
         * An opaque data blob that allows the next page of data to resume immediately after where the previous page ended. The only reliable way to know if there is more data left is the presence of a continuation token.
         */
        continuationToken?: string,
        /**
         * Specify a non-default scope (collection, project) to search for users.
         */
        scopeDescriptor?: string,
    }): CancelablePromise<Array<GraphUser>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/users',
            path: {
                'organization': organization,
            },
            query: {
                'subjectTypes': subjectTypes,
                'continuationToken': continuationToken,
                'scopeDescriptor': scopeDescriptor,
            },
        });
    }
    /**
     * Disables a user.
     *
     * The user will still be visible, but membership checks for the user will return false.
     * @returns any successful operation
     * @throws ApiError
     */
    public usersDelete({
        organization,
        userDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the user to delete.
         */
        userDescriptor: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/graph/users/{userDescriptor}',
            path: {
                'organization': organization,
                'userDescriptor': userDescriptor,
            },
        });
    }
    /**
     * Get a user by its descriptor.
     * @returns GraphUser successful operation
     * @throws ApiError
     */
    public usersGet({
        organization,
        userDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the desired user.
         */
        userDescriptor: string,
    }): CancelablePromise<GraphUser> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/users/{userDescriptor}',
            path: {
                'organization': organization,
                'userDescriptor': userDescriptor,
            },
        });
    }
    /**
     * Map an existing user to a different user.
     *
     * The body of the request must be a derived type of GraphUserUpdateContext:
     * * GraphUserOriginIdUpdateContext - Map an existing user in an account, to an existing user from an external AD or AAD backed provider using the OriginId as a reference.
     * @returns GraphUser successful operation
     * @throws ApiError
     */
    public usersUpdate({
        organization,
        body,
        userDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The subset of the full graph user used to uniquely find the graph subject in an external provider.
         */
        body: GraphUserUpdateContext,
        /**
         * The descriptor of the user to update
         */
        userDescriptor: string,
    }): CancelablePromise<GraphUser> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/graph/users/{userDescriptor}',
            path: {
                'organization': organization,
                'userDescriptor': userDescriptor,
            },
            body: body,
        });
    }
}
