/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Operation } from '../models/Operation';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OperationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets an operation from the the operationId using the given pluginId.
     *
     * Some scenarios don’t require a pluginId. If a pluginId is not included in the call then just the operationId will be used to find an operation.
     * @returns Operation successful operation
     * @throws ApiError
     */
    public operationsGet({
        operationId,
        organization,
        pluginId,
    }: {
        /**
         * The ID for the operation.
         */
        operationId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID for the plugin.
         */
        pluginId?: string,
    }): CancelablePromise<Operation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/operations/{operationId}',
            path: {
                'operationId': operationId,
                'organization': organization,
            },
            query: {
                'pluginId': pluginId,
            },
        });
    }
}
