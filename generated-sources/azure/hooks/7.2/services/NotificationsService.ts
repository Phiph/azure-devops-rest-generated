/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from '../models/Notification';
import type { NotificationsQuery } from '../models/NotificationsQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Query for notifications. A notification includes details about the event, the request to and the response from the consumer service.
     * @returns NotificationsQuery successful operation
     * @throws ApiError
     */
    public notificationsQuery({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: NotificationsQuery,
    }): CancelablePromise<NotificationsQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/hooks/notificationsquery',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get a list of notifications for a specific subscription. A notification includes details about the event, the request to and the response from the consumer service.
     * @returns Notification successful operation
     * @throws ApiError
     */
    public notificationsList({
        organization,
        subscriptionId,
        maxResults,
        status,
        result,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a subscription.
         */
        subscriptionId: string,
        /**
         * Maximum number of notifications to return. Default is **100**.
         */
        maxResults?: number,
        /**
         * Get only notifications with this status.
         */
        status?: 'queued' | 'processing' | 'requestInProgress' | 'completed',
        /**
         * Get only notifications with this result type.
         */
        result?: 'pending' | 'succeeded' | 'failed' | 'filtered',
    }): CancelablePromise<Array<Notification>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}/notifications',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
            },
            query: {
                'maxResults': maxResults,
                'status': status,
                'result': result,
            },
        });
    }
    /**
     * Get a specific notification for a subscription.
     * @returns Notification successful operation
     * @throws ApiError
     */
    public notificationsGet({
        organization,
        subscriptionId,
        notificationId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a subscription.
         */
        subscriptionId: string,
        notificationId: number,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}/notifications/{notificationId}',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
                'notificationId': notificationId,
            },
        });
    }
    /**
     * Sends a test notification. This is useful for verifying the configuration of an updated or new service hooks subscription.
     * @returns Notification successful operation
     * @throws ApiError
     */
    public notificationsCreate({
        organization,
        body,
        useRealData,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Notification,
        /**
         * Only allow testing with real data in existing subscriptions.
         */
        useRealData?: boolean,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/hooks/testnotifications',
            path: {
                'organization': organization,
            },
            query: {
                'useRealData': useRealData,
            },
            body: body,
        });
    }
}
