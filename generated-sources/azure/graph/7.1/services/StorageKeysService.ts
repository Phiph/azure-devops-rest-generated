/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphStorageKeyResult } from '../models/GraphStorageKeyResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StorageKeysService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Resolve a descriptor to a storage key.
     * @returns GraphStorageKeyResult successful operation
     * @throws ApiError
     */
    public storageKeysGet({
        subjectDescriptor,
        organization,
    }: {
        subjectDescriptor: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<GraphStorageKeyResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/storagekeys/{subjectDescriptor}',
            path: {
                'subjectDescriptor': subjectDescriptor,
                'organization': organization,
            },
        });
    }
}
