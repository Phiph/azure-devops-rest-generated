/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SecurityNamespaceDescription } from '../models/SecurityNamespaceDescription';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SecurityNamespacesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all security namespaces or just the specified namespace.
     * @returns SecurityNamespaceDescription successful operation
     * @throws ApiError
     */
    public securityNamespacesQuery({
        organization,
        securityNamespaceId,
        localOnly,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Security namespace identifier.
         */
        securityNamespaceId: string,
        /**
         * If true, retrieve only local security namespaces.
         */
        localOnly?: boolean,
    }): CancelablePromise<Array<SecurityNamespaceDescription>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/securitynamespaces/{securityNamespaceId}',
            path: {
                'organization': organization,
                'securityNamespaceId': securityNamespaceId,
            },
            query: {
                'localOnly': localOnly,
            },
        });
    }
}
