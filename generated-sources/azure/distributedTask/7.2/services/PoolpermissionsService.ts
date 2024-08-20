/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PoolpermissionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Checks if current identity has passed permissions on a pool.
     * @returns boolean successful operation
     * @throws ApiError
     */
    public poolpermissionsHasPoolPermissions({
        organization,
        poolId,
        permissions,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of the pool to check
         */
        poolId: number,
        /**
         * Permissions to check. Multiple permissions might be merged into single value using bitwise OR operator (e.g. AgentPoolPermissions.Manage | AgentPoolPermissions.View)
         */
        permissions: number,
    }): CancelablePromise<boolean> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/pools/{poolId}/permissions/{permissions}',
            path: {
                'organization': organization,
                'poolId': poolId,
                'permissions': permissions,
            },
        });
    }
}
