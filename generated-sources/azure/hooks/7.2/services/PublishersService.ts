/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventTypeDescriptor } from '../models/EventTypeDescriptor';
import type { InputValuesQuery } from '../models/InputValuesQuery';
import type { Publisher } from '../models/Publisher';
import type { PublishersQuery } from '../models/PublishersQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PublishersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of publishers.
     * @returns Publisher successful operation
     * @throws ApiError
     */
    public publishersList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<Publisher>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/publishers',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Get a specific service hooks publisher.
     * @returns Publisher successful operation
     * @throws ApiError
     */
    public publishersGet({
        organization,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a publisher.
         */
        publisherId: string,
    }): CancelablePromise<Publisher> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/publishers/{publisherId}',
            path: {
                'organization': organization,
                'publisherId': publisherId,
            },
        });
    }
    /**
     * Get the event types for a specific publisher.
     * @returns EventTypeDescriptor successful operation
     * @throws ApiError
     */
    public publishersListEventTypes({
        organization,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a publisher.
         */
        publisherId: string,
    }): CancelablePromise<Array<EventTypeDescriptor>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/publishers/{publisherId}/eventtypes',
            path: {
                'organization': organization,
                'publisherId': publisherId,
            },
        });
    }
    /**
     * Get a specific event type.
     * @returns EventTypeDescriptor successful operation
     * @throws ApiError
     */
    public publishersGetEventType({
        organization,
        publisherId,
        eventTypeId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID for a publisher.
         */
        publisherId: string,
        eventTypeId: string,
    }): CancelablePromise<EventTypeDescriptor> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/publishers/{publisherId}/eventtypes/{eventTypeId}',
            path: {
                'organization': organization,
                'publisherId': publisherId,
                'eventTypeId': eventTypeId,
            },
        });
    }
    /**
     * @returns InputValuesQuery successful operation
     * @throws ApiError
     */
    public publishersQueryInputValues({
        organization,
        body,
        publisherId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: InputValuesQuery,
        publisherId: string,
    }): CancelablePromise<InputValuesQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/hooks/publishers/{publisherId}/inputValuesQuery',
            path: {
                'organization': organization,
                'publisherId': publisherId,
            },
            body: body,
        });
    }
    /**
     * Query for service hook publishers.
     * @returns PublishersQuery successful operation
     * @throws ApiError
     */
    public publishersQueryPublishers({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: PublishersQuery,
    }): CancelablePromise<PublishersQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/hooks/publishersquery',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
