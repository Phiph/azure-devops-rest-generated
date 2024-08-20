/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { ServicePrincipalEntitlement } from '../models/ServicePrincipalEntitlement';
import type { ServicePrincipalEntitlementOperationReference } from '../models/ServicePrincipalEntitlementOperationReference';
import type { ServicePrincipalEntitlementsPatchResponse } from '../models/ServicePrincipalEntitlementsPatchResponse';
import type { ServicePrincipalEntitlementsPostResponse } from '../models/ServicePrincipalEntitlementsPostResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServicePrincipalEntitlementsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a service principal, assign license and extensions and make them a member of a project group in an account.
     *
     * NOTE: If you are working with AAD app registration, you can find service principal of your app
     * in enterprise applications, and make sure to use service principal's object id as originId parameter
     * in the request body
     * @returns ServicePrincipalEntitlementsPostResponse successful operation
     * @throws ApiError
     */
    public servicePrincipalEntitlementsAdd({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ServicePrincipalEntitlement object specifying License, Extensions and Project/Team groups the service principal should be added to.
         */
        body: ServicePrincipalEntitlement,
    }): CancelablePromise<ServicePrincipalEntitlementsPostResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/serviceprincipalentitlements',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Edit the entitlements (License, Extensions, Projects, Teams etc) for one or more service principals.
     * @returns ServicePrincipalEntitlementOperationReference successful operation
     * @throws ApiError
     */
    public servicePrincipalEntitlementsUpdateServicePrincipalEntitlements({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * JsonPatchDocument containing the operations to perform.
         */
        body: JsonPatchDocument,
    }): CancelablePromise<ServicePrincipalEntitlementOperationReference> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/serviceprincipalentitlements',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Delete a service principal from the account.
     *
     * The delete operation includes unassigning Extensions and Licenses and removing the service principal from all project memberships.
     * The service principal would continue to have access to the account if it is member of an AAD group, that is added directly to the account.
     * @returns any successful operation
     * @throws ApiError
     */
    public servicePrincipalEntitlementsDelete({
        organization,
        servicePrincipalId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the service principal.
         */
        servicePrincipalId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/serviceprincipalentitlements/{servicePrincipalId}',
            path: {
                'organization': organization,
                'servicePrincipalId': servicePrincipalId,
            },
        });
    }
    /**
     * Get Service principal Entitlement for a service principal.
     * @returns ServicePrincipalEntitlement successful operation
     * @throws ApiError
     */
    public servicePrincipalEntitlementsGet({
        organization,
        servicePrincipalId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the service principal.
         */
        servicePrincipalId: string,
    }): CancelablePromise<ServicePrincipalEntitlement> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/serviceprincipalentitlements/{servicePrincipalId}',
            path: {
                'organization': organization,
                'servicePrincipalId': servicePrincipalId,
            },
        });
    }
    /**
     * Edit the entitlements (License, Extensions, Projects, Teams etc) for a service principal.
     * @returns ServicePrincipalEntitlementsPatchResponse successful operation
     * @throws ApiError
     */
    public servicePrincipalEntitlementsUpdateServicePrincipalEntitlement({
        organization,
        body,
        servicePrincipalId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * JsonPatchDocument containing the operations to perform on the service principal.
         */
        body: JsonPatchDocument,
        /**
         * ID of the service principal.
         */
        servicePrincipalId: string,
    }): CancelablePromise<ServicePrincipalEntitlementsPatchResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/serviceprincipalentitlements/{servicePrincipalId}',
            path: {
                'organization': organization,
                'servicePrincipalId': servicePrincipalId,
            },
            body: body,
        });
    }
}
