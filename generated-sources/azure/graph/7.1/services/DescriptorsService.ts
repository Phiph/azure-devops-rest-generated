/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphDescriptorResult } from '../models/GraphDescriptorResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DescriptorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Resolve a storage key to a descriptor
     * @returns GraphDescriptorResult successful operation
     * @throws ApiError
     */
    public descriptorsGet({
        storageKey,
        organization,
    }: {
        /**
         * Storage key of the subject (user, group, scope, etc.) to resolve
         */
        storageKey: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<GraphDescriptorResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/descriptors/{storageKey}',
            path: {
                'storageKey': storageKey,
                'organization': organization,
            },
        });
    }
}
