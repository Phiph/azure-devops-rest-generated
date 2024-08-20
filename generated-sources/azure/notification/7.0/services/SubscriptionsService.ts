/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationSubscription } from '../models/NotificationSubscription';
import type { NotificationSubscriptionCreateParameters } from '../models/NotificationSubscriptionCreateParameters';
import type { NotificationSubscriptionTemplate } from '../models/NotificationSubscriptionTemplate';
import type { NotificationSubscriptionUpdateParameters } from '../models/NotificationSubscriptionUpdateParameters';
import type { SubscriptionQuery } from '../models/SubscriptionQuery';
import type { SubscriptionUserSettings } from '../models/SubscriptionUserSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubscriptionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Query for subscriptions. A subscription is returned if it matches one or more of the specified conditions.
     * @returns NotificationSubscription successful operation
     * @throws ApiError
     */
    public subscriptionsQuery({
        body,
        organization,
    }: {
        body: SubscriptionQuery,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<NotificationSubscription>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/notification/subscriptionquery',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Create a new subscription.
     * @returns NotificationSubscription successful operation
     * @throws ApiError
     */
    public subscriptionsCreate({
        body,
        organization,
    }: {
        body: NotificationSubscriptionCreateParameters,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationSubscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/notification/subscriptions',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get a list of notification subscriptions, either by subscription IDs or by all subscriptions for a given user or group.
     * @returns NotificationSubscription successful operation
     * @throws ApiError
     */
    public subscriptionsList({
        organization,
        targetId,
        ids,
        queryFlags,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * User or Group ID
         */
        targetId?: string,
        /**
         * List of subscription IDs
         */
        ids?: string,
        queryFlags?: 'none' | 'includeInvalidSubscriptions' | 'includeDeletedSubscriptions' | 'includeFilterDetails' | 'alwaysReturnBasicInformation' | 'includeSystemSubscriptions',
    }): CancelablePromise<Array<NotificationSubscription>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/subscriptions',
            path: {
                'organization': organization,
            },
            query: {
                'targetId': targetId,
                'ids': ids,
                'queryFlags': queryFlags,
            },
        });
    }
    /**
     * Delete a subscription.
     * @returns any successful operation
     * @throws ApiError
     */
    public subscriptionsDelete({
        subscriptionId,
        organization,
    }: {
        subscriptionId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/notification/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
                'organization': organization,
            },
        });
    }
    /**
     * Get a notification subscription by its ID.
     * @returns NotificationSubscription successful operation
     * @throws ApiError
     */
    public subscriptionsGet({
        subscriptionId,
        organization,
        queryFlags,
    }: {
        subscriptionId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        queryFlags?: 'none' | 'includeInvalidSubscriptions' | 'includeDeletedSubscriptions' | 'includeFilterDetails' | 'alwaysReturnBasicInformation' | 'includeSystemSubscriptions',
    }): CancelablePromise<NotificationSubscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
                'organization': organization,
            },
            query: {
                'queryFlags': queryFlags,
            },
        });
    }
    /**
     * Update an existing subscription. Depending on the type of subscription and permissions, the caller can update the description, filter settings, channel (delivery) settings and more.
     * @returns NotificationSubscription successful operation
     * @throws ApiError
     */
    public subscriptionsUpdate({
        body,
        subscriptionId,
        organization,
    }: {
        body: NotificationSubscriptionUpdateParameters,
        subscriptionId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationSubscription> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/notification/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Update the specified user's settings for the specified subscription. This API is typically used to opt in or out of a shared subscription. User settings can only be applied to shared subscriptions, like team subscriptions or default subscriptions.
     * @returns SubscriptionUserSettings successful operation
     * @throws ApiError
     */
    public subscriptionsUpdateSubscriptionUserSettings({
        body,
        subscriptionId,
        userId,
        organization,
    }: {
        body: SubscriptionUserSettings,
        subscriptionId: string,
        /**
         * ID of the user
         */
        userId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<SubscriptionUserSettings> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/notification/Subscriptions/{subscriptionId}/usersettings/{userId}',
            path: {
                'subscriptionId': subscriptionId,
                'userId': userId,
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get available subscription templates.
     * @returns NotificationSubscriptionTemplate successful operation
     * @throws ApiError
     */
    public subscriptionsGetSubscriptionTemplates({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<NotificationSubscriptionTemplate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/subscriptiontemplates',
            path: {
                'organization': organization,
            },
        });
    }
}
