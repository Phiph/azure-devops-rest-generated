/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessControlEntry } from '../models/AccessControlEntry';
import type { PermissionEvaluationBatch } from '../models/PermissionEvaluationBatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermissionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Evaluates whether the caller has the specified permissions on the specified set of security tokens.
     * @returns boolean successful operation
     * @throws ApiError
     */
    public permissionsHasPermissions({
        securityNamespaceId,
        organization,
        permissions,
        tokens,
        alwaysAllowAdministrators,
        delimiter,
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
         * Permissions to evaluate.
         */
        permissions: number,
        /**
         * One or more security tokens to evaluate.
         */
        tokens?: string,
        /**
         * If true and if the caller is an administrator, always return true.
         */
        alwaysAllowAdministrators?: boolean,
        /**
         * Optional security token separator. Defaults to ",".
         */
        delimiter?: string,
    }): CancelablePromise<Array<boolean>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/permissions/{securityNamespaceId}/{permissions}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
                'permissions': permissions,
            },
            query: {
                'tokens': tokens,
                'alwaysAllowAdministrators': alwaysAllowAdministrators,
                'delimiter': delimiter,
            },
        });
    }
    /**
     * Removes the specified permissions on a security token for a user or group.
     * @returns AccessControlEntry successful operation
     * @throws ApiError
     */
    public permissionsRemovePermission({
        securityNamespaceId,
        descriptor,
        organization,
        permissions,
        token,
    }: {
        /**
         * Security namespace identifier.
         */
        securityNamespaceId: string,
        /**
         * Identity descriptor of the user to remove permissions for.
         */
        descriptor: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Permissions to remove.
         */
        permissions: number,
        /**
         * Security token to remove permissions for.
         */
        token?: string,
    }): CancelablePromise<AccessControlEntry> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/permissions/{securityNamespaceId}/{permissions}',
            path: {
                'securityNamespaceId': securityNamespaceId,
                'organization': organization,
                'permissions': permissions,
            },
            query: {
                'descriptor': descriptor,
                'token': token,
            },
        });
    }
    /**
     * Evaluates multiple permissions for the calling user.  Note: This method does not aggregate the results, nor does it short-circuit if one of the permissions evaluates to false.
     * @returns PermissionEvaluationBatch successful operation
     * @throws ApiError
     */
    public permissionsHasPermissionsBatch({
        body,
        organization,
    }: {
        /**
         * The set of evaluation requests.
         */
        body: PermissionEvaluationBatch,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<PermissionEvaluationBatch> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/security/permissionevaluationbatch',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
