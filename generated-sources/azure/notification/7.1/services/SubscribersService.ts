/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationSubscriber } from '../models/NotificationSubscriber';
import type { NotificationSubscriberUpdateParameters } from '../models/NotificationSubscriberUpdateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubscribersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get delivery preferences of a notifications subscriber.
     * @returns NotificationSubscriber successful operation
     * @throws ApiError
     */
    public subscribersGet({
        subscriberId,
        organization,
    }: {
        /**
         * ID of the user or group.
         */
        subscriberId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationSubscriber> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/subscribers/{subscriberId}',
            path: {
                'subscriberId': subscriberId,
                'organization': organization,
            },
        });
    }
    /**
     * Update delivery preferences of a notifications subscriber.
     * @returns NotificationSubscriber successful operation
     * @throws ApiError
     */
    public subscribersUpdate({
        body,
        subscriberId,
        organization,
    }: {
        body: NotificationSubscriberUpdateParameters,
        /**
         * ID of the user or group.
         */
        subscriberId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationSubscriber> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/notification/subscribers/{subscriberId}',
            path: {
                'subscriberId': subscriberId,
                'organization': organization,
            },
            body: body,
        });
    }
}
