/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationEventType } from '../models/NotificationEventType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EventTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List available event types for this service. Optionally filter by only event types for the specified publisher.
     * @returns NotificationEventType successful operation
     * @throws ApiError
     */
    public eventTypesList({
        organization,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Limit to event types for this publisher
         */
        publisherId?: string,
    }): CancelablePromise<Array<NotificationEventType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/eventtypes',
            path: {
                'organization': organization,
            },
            query: {
                'publisherId': publisherId,
            },
        });
    }
    /**
     * Get a specific event type.
     * @returns NotificationEventType successful operation
     * @throws ApiError
     */
    public eventTypesGet({
        eventType,
        organization,
    }: {
        /**
         * The ID of the event type.
         */
        eventType: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationEventType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/eventtypes/{eventType}',
            path: {
                'eventType': eventType,
                'organization': organization,
            },
        });
    }
}
