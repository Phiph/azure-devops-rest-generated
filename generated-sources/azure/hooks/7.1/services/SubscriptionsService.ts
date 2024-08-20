/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Subscription } from '../models/Subscription';
import type { SubscriptionsQuery } from '../models/SubscriptionsQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubscriptionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a subscription.
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public subscriptionsCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Subscription to be created.
         */
        body: Subscription,
    }): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/hooks/subscriptions',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get a list of subscriptions.
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public subscriptionsList({
        organization,
        publisherId,
        eventType,
        consumerId,
        consumerActionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a subscription.
         */
        publisherId?: string,
        /**
         * The event type to filter on (if any).
         */
        eventType?: string,
        /**
         * ID for a consumer.
         */
        consumerId?: string,
        /**
         * ID for a consumerActionId.
         */
        consumerActionId?: string,
    }): CancelablePromise<Array<Subscription>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/subscriptions',
            path: {
                'organization': organization,
            },
            query: {
                'publisherId': publisherId,
                'eventType': eventType,
                'consumerId': consumerId,
                'consumerActionId': consumerActionId,
            },
        });
    }
    /**
     * Delete a specific service hooks subscription.
     * @returns any successful operation
     * @throws ApiError
     */
    public subscriptionsDelete({
        organization,
        subscriptionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a subscription.
         */
        subscriptionId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
            },
        });
    }
    /**
     * Get a specific service hooks subscription.
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public subscriptionsGet({
        organization,
        subscriptionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a subscription.
         */
        subscriptionId: string,
    }): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
            },
        });
    }
    /**
     * Update a subscription. <param name="subscriptionId">ID for a subscription that you wish to update.</param>
     * @returns Subscription successful operation
     * @throws ApiError
     */
    public subscriptionsReplaceSubscription({
        organization,
        body,
        subscriptionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Subscription,
        subscriptionId: string,
    }): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
            },
            body: body,
        });
    }
    /**
     * Query for service hook subscriptions.
     * @returns SubscriptionsQuery successful operation
     * @throws ApiError
     */
    public subscriptionsCreateSubscriptionsQuery({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: SubscriptionsQuery,
    }): CancelablePromise<SubscriptionsQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/hooks/subscriptionsquery',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
