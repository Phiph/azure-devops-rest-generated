/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphServicePrincipal } from '../models/GraphServicePrincipal';
import type { GraphServicePrincipalCreationContext } from '../models/GraphServicePrincipalCreationContext';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServicePrincipalsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Materialize an existing AAD service principal into the ADO account.
     *
     * NOTE: Created service principals are not active in an account.
     *
     * Adding a service principal to an account is required before the service principal can be added to ADO groups or assigned an asset.
     *
     * The body of the request must be a derived type of GraphServicePrincipalCreationContext:
     * * GraphServicePrincipalOriginIdCreationContext - Create a new service principal using the OriginID as a reference to an existing service principal from AAD backed provider.
     *
     * If the service principal to be added corresponds to a service principal that was previously deleted, then that service principal will be restored.
     *
     * Optionally, you can add the newly created service principal as a member of an existing ADO group and/or specify a custom storage key for the service principal.
     * @returns GraphServicePrincipal successful operation
     * @throws ApiError
     */
    public servicePrincipalsCreate({
        organization,
        body,
        groupDescriptors,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The subset of the full graph service principal used to uniquely find the graph subject in an external provider.
         */
        body: GraphServicePrincipalCreationContext,
        /**
         * A comma separated list of descriptors of groups you want the graph service principal to join
         */
        groupDescriptors?: string,
    }): CancelablePromise<GraphServicePrincipal> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/graph/serviceprincipals',
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
     * Get a list of all service principals in a given scope.
     *
     * Since the list of service principals may be large, results are returned in pages of service principals. If there are more results
     * than can be returned in a single page, the result set will contain a continuation token for retrieval of the
     * next set of results. The only reliable way to know if there is no more service principals left is the lack of a continuation token.
     * @returns GraphServicePrincipal successful operation
     * @throws ApiError
     */
    public servicePrincipalsList({
        organization,
        continuationToken,
        scopeDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * An opaque data blob that allows the next page of data to resume immediately after where the previous page ended. The only reliable way to know if there is more data left is the presence of a continuation token.
         */
        continuationToken?: string,
        /**
         * Specify a non-default scope (collection, project) to search for service principals.
         */
        scopeDescriptor?: string,
    }): CancelablePromise<Array<GraphServicePrincipal>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/serviceprincipals',
            path: {
                'organization': organization,
            },
            query: {
                'continuationToken': continuationToken,
                'scopeDescriptor': scopeDescriptor,
            },
        });
    }
    /**
     * Disables a service principal.
     *
     * The service principal will still be visible, but membership checks for the service principal will return false.
     * @returns any successful operation
     * @throws ApiError
     */
    public servicePrincipalsDelete({
        organization,
        servicePrincipalDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the service principal to delete.
         */
        servicePrincipalDescriptor: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/graph/serviceprincipals/{servicePrincipalDescriptor}',
            path: {
                'organization': organization,
                'servicePrincipalDescriptor': servicePrincipalDescriptor,
            },
        });
    }
    /**
     * Get a service principal by its descriptor.
     * @returns GraphServicePrincipal successful operation
     * @throws ApiError
     */
    public servicePrincipalsGet({
        organization,
        servicePrincipalDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the desired service principal.
         */
        servicePrincipalDescriptor: string,
    }): CancelablePromise<GraphServicePrincipal> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/serviceprincipals/{servicePrincipalDescriptor}',
            path: {
                'organization': organization,
                'servicePrincipalDescriptor': servicePrincipalDescriptor,
            },
        });
    }
}
