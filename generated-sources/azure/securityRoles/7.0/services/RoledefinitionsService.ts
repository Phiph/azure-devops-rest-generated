/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SecurityRole } from '../models/SecurityRole';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RoledefinitionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns SecurityRole successful operation
     * @throws ApiError
     */
    public roledefinitionsList({
        scopeId,
        organization,
    }: {
        scopeId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<SecurityRole>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/securityroles/scopes/{scopeId}/roledefinitions',
            path: {
                'scopeId': scopeId,
                'organization': organization,
            },
        });
    }
}
