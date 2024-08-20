/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefreshAuthenticationParameters } from '../models/RefreshAuthenticationParameters';
import type { ServiceEndpoint } from '../models/ServiceEndpoint';
import type { ServiceEndpointProjectReference } from '../models/ServiceEndpointProjectReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EndpointsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new service endpoint
     * @returns ServiceEndpoint successful operation
     * @throws ApiError
     */
    public endpointsCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Service endpoint to create
         */
        body: ServiceEndpoint,
    }): CancelablePromise<ServiceEndpoint> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/serviceendpoint/endpoints',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Update the service endpoints.
     * @returns ServiceEndpoint successful operation
     * @throws ApiError
     */
    public endpointsUpdateServiceEndpoints({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Names of the service endpoints to update.
         */
        body: Array<ServiceEndpoint>,
    }): CancelablePromise<Array<ServiceEndpoint>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/serviceendpoint/endpoints',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Delete a service endpoint
     * @returns any successful operation
     * @throws ApiError
     */
    public endpointsDelete({
        organization,
        endpointId,
        projectIds,
        deep,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Endpoint Id of endpoint to delete
         */
        endpointId: string,
        /**
         * project Ids from which endpoint needs to be deleted
         */
        projectIds: string,
        /**
         * delete the spn created by endpoint
         */
        deep?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/serviceendpoint/endpoints/{endpointId}',
            path: {
                'organization': organization,
                'endpointId': endpointId,
            },
            query: {
                'projectIds': projectIds,
                'deep': deep,
            },
        });
    }
    /**
     * Share service endpoint across projects
     * @returns any successful operation
     * @throws ApiError
     */
    public endpointsShareServiceEndpoint({
        organization,
        body,
        endpointId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project reference details of the target project
         */
        body: Array<ServiceEndpointProjectReference>,
        /**
         * Endpoint Id of the endpoint to share
         */
        endpointId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/serviceendpoint/endpoints/{endpointId}',
            path: {
                'organization': organization,
                'endpointId': endpointId,
            },
            body: body,
        });
    }
    /**
     * Update the service endpoint
     * @returns ServiceEndpoint successful operation
     * @throws ApiError
     */
    public endpointsUpdateServiceEndpoint({
        organization,
        body,
        endpointId,
        operation,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Updated data for the endpoint
         */
        body: ServiceEndpoint,
        /**
         * Endpoint Id of the endpoint to update
         */
        endpointId: string,
        /**
         * operation type
         */
        operation?: string,
    }): CancelablePromise<ServiceEndpoint> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/serviceendpoint/endpoints/{endpointId}',
            path: {
                'organization': organization,
                'endpointId': endpointId,
            },
            query: {
                'operation': operation,
            },
            body: body,
        });
    }
    /**
     * Get the service endpoints by name.
     * @returns ServiceEndpoint successful operation
     * @throws ApiError
     */
    public endpointsGetServiceEndpointsByNames({
        organization,
        project,
        endpointNames,
        type,
        authSchemes,
        owner,
        includeFailed,
        includeDetails,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Names of the service endpoints.
         */
        endpointNames: string,
        /**
         * Type of the service endpoints.
         */
        type?: string,
        /**
         * Authorization schemes used for service endpoints.
         */
        authSchemes?: string,
        /**
         * Owner for service endpoints.
         */
        owner?: string,
        /**
         * Failed flag for service endpoints.
         */
        includeFailed?: boolean,
        /**
         * Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
         */
        includeDetails?: boolean,
    }): CancelablePromise<Array<ServiceEndpoint>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/serviceendpoint/endpoints',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'endpointNames': endpointNames,
                'type': type,
                'authSchemes': authSchemes,
                'owner': owner,
                'includeFailed': includeFailed,
                'includeDetails': includeDetails,
            },
        });
    }
    /**
     * Gets the service endpoints and patch new authorization parameters
     * @returns ServiceEndpoint successful operation
     * @throws ApiError
     */
    public endpointsGetServiceEndpointsWithRefreshedAuthentication({
        organization,
        body,
        project,
        endpointIds,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Scope, Validity of Token requested.
         */
        body: Array<RefreshAuthenticationParameters>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Ids of the service endpoints.
         */
        endpointIds: string,
    }): CancelablePromise<Array<ServiceEndpoint>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/serviceendpoint/endpoints',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'endpointIds': endpointIds,
            },
            body: body,
        });
    }
    /**
     * Get the service endpoint details.
     * @returns ServiceEndpoint successful operation
     * @throws ApiError
     */
    public endpointsGet({
        organization,
        project,
        endpointId,
        actionFilter,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the service endpoint.
         */
        endpointId: string,
        /**
         * Action filter for the service connection. It specifies the action which can be performed on the service connection.
         */
        actionFilter?: 'none' | 'manage' | 'use' | 'view',
    }): CancelablePromise<ServiceEndpoint> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/serviceendpoint/endpoints/{endpointId}',
            path: {
                'organization': organization,
                'project': project,
                'endpointId': endpointId,
            },
            query: {
                'actionFilter': actionFilter,
            },
        });
    }
}
