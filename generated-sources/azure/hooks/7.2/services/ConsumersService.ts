/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Consumer } from '../models/Consumer';
import type { ConsumerAction } from '../models/ConsumerAction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConsumersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of available service hook consumer services. Optionally filter by consumers that support at least one event type from the specific publisher.
     * @returns Consumer successful operation
     * @throws ApiError
     */
    public consumersList({
        organization,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        publisherId?: string,
    }): CancelablePromise<Array<Consumer>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/consumers',
            path: {
                'organization': organization,
            },
            query: {
                'publisherId': publisherId,
            },
        });
    }
    /**
     * Get a specific consumer service. Optionally filter out consumer actions that do not support any event types for the specified publisher.
     * @returns Consumer successful operation
     * @throws ApiError
     */
    public consumersGet({
        organization,
        consumerId,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a consumer.
         */
        consumerId: string,
        publisherId?: string,
    }): CancelablePromise<Consumer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/consumers/{consumerId}',
            path: {
                'organization': organization,
                'consumerId': consumerId,
            },
            query: {
                'publisherId': publisherId,
            },
        });
    }
    /**
     * Get a list of consumer actions for a specific consumer.
     * @returns ConsumerAction successful operation
     * @throws ApiError
     */
    public consumersListConsumerActions({
        organization,
        consumerId,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a consumer.
         */
        consumerId: string,
        publisherId?: string,
    }): CancelablePromise<Array<ConsumerAction>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/consumers/{consumerId}/actions',
            path: {
                'organization': organization,
                'consumerId': consumerId,
            },
            query: {
                'publisherId': publisherId,
            },
        });
    }
    /**
     * Get details about a specific consumer action.
     * @returns ConsumerAction successful operation
     * @throws ApiError
     */
    public consumersGetConsumerAction({
        organization,
        consumerId,
        consumerActionId,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a consumer.
         */
        consumerId: string,
        /**
         * ID for a consumerActionId.
         */
        consumerActionId: string,
        publisherId?: string,
    }): CancelablePromise<ConsumerAction> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/consumers/{consumerId}/actions/{consumerActionId}',
            path: {
                'organization': organization,
                'consumerId': consumerId,
                'consumerActionId': consumerActionId,
            },
            query: {
                'publisherId': publisherId,
            },
        });
    }
}
