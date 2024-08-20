/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleAssignment } from '../models/RoleAssignment';
import type { UserRoleAssignmentRef } from '../models/UserRoleAssignmentRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RoleassignmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get role assignments for the resource
     * @returns RoleAssignment successful operation
     * @throws ApiError
     */
    public roleassignmentsList({
        scopeId,
        resourceId,
        organization,
    }: {
        /**
         * Id of the assigned scope
         */
        scopeId: string,
        /**
         * Id of the resource that is assigned the scope
         */
        resourceId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<RoleAssignment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/securityroles/scopes/{scopeId}/roleassignments/resources/{resourceId}',
            path: {
                'scopeId': scopeId,
                'resourceId': resourceId,
                'organization': organization,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public roleassignmentsRemoveRoleAssignments({
        body,
        scopeId,
        resourceId,
        organization,
    }: {
        body: Array<string>,
        scopeId: string,
        resourceId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/securityroles/scopes/{scopeId}/roleassignments/resources/{resourceId}',
            path: {
                'scopeId': scopeId,
                'resourceId': resourceId,
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Set role assignments on a resource
     * @returns RoleAssignment successful operation
     * @throws ApiError
     */
    public roleassignmentsSetRoleAssignments({
        body,
        scopeId,
        resourceId,
        organization,
        limitToCallerIdentityDomain,
    }: {
        /**
         * Roles to be assigned
         */
        body: Array<UserRoleAssignmentRef>,
        /**
         * Id of the assigned scope
         */
        scopeId: string,
        /**
         * Id of the resource on which the role is to be assigned
         */
        resourceId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        limitToCallerIdentityDomain?: boolean,
    }): CancelablePromise<Array<RoleAssignment>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/securityroles/scopes/{scopeId}/roleassignments/resources/{resourceId}',
            path: {
                'scopeId': scopeId,
                'resourceId': resourceId,
                'organization': organization,
            },
            query: {
                'limitToCallerIdentityDomain': limitToCallerIdentityDomain,
            },
            body: body,
        });
    }
    /**
     * Remove the role assignment on a resource
     * @returns any successful operation
     * @throws ApiError
     */
    public roleassignmentsRemoveRoleAssignment({
        scopeId,
        resourceId,
        identityId,
        organization,
    }: {
        /**
         * Id of the assigned scope
         */
        scopeId: string,
        /**
         * Id of the resource on which the role is to be removed
         */
        resourceId: string,
        /**
         * Identity on which the assignment is to be removed
         */
        identityId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/securityroles/scopes/{scopeId}/roleassignments/resources/{resourceId}/{identityId}',
            path: {
                'scopeId': scopeId,
                'resourceId': resourceId,
                'identityId': identityId,
                'organization': organization,
            },
        });
    }
    /**
     * Set role assignment on a resource
     * @returns RoleAssignment successful operation
     * @throws ApiError
     */
    public roleassignmentsSetRoleAssignment({
        body,
        scopeId,
        resourceId,
        identityId,
        organization,
    }: {
        /**
         * Roles to be assigned
         */
        body: UserRoleAssignmentRef,
        /**
         * Id of the assigned scope
         */
        scopeId: string,
        /**
         * Id of the resource on which the role is to be assigned
         */
        resourceId: string,
        identityId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<RoleAssignment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/securityroles/scopes/{scopeId}/roleassignments/resources/{resourceId}/{identityId}',
            path: {
                'scopeId': scopeId,
                'resourceId': resourceId,
                'identityId': identityId,
                'organization': organization,
            },
            body: body,
        });
    }
}
