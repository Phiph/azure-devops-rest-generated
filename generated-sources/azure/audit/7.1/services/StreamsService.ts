/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditStream } from '../models/AuditStream';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StreamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create new Audit Stream
     * @returns AuditStream successful operation
     * @throws ApiError
     */
    public streamsCreate({
        organization,
        body,
        daysToBackfill,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Stream entry
         */
        body: AuditStream,
        /**
         * The number of days of previously recorded audit data that will be replayed into the stream. A value of zero will result in only new events being streamed.
         */
        daysToBackfill: number,
    }): CancelablePromise<AuditStream> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/audit/streams',
            path: {
                'organization': organization,
            },
            query: {
                'daysToBackfill': daysToBackfill,
            },
            body: body,
        });
    }
    /**
     * Return all Audit Streams scoped to an organization
     * @returns AuditStream successful operation
     * @throws ApiError
     */
    public streamsQueryAllStreams({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<AuditStream>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/audit/streams',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Update existing Audit Stream
     * @returns AuditStream successful operation
     * @throws ApiError
     */
    public streamsUpdateStream({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Stream entry
         */
        body: AuditStream,
    }): CancelablePromise<AuditStream> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/audit/streams',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Delete Audit Stream
     * @returns any successful operation
     * @throws ApiError
     */
    public streamsDelete({
        organization,
        streamId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of stream entry to delete
         */
        streamId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/audit/streams/{streamId}',
            path: {
                'organization': organization,
                'streamId': streamId,
            },
        });
    }
    /**
     * Return Audit Stream with id of streamId if one exists otherwise throw
     * @returns AuditStream successful operation
     * @throws ApiError
     */
    public streamsQueryStreamById({
        organization,
        streamId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of stream entry to retrieve
         */
        streamId: number,
    }): CancelablePromise<AuditStream> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/audit/streams/{streamId}',
            path: {
                'organization': organization,
                'streamId': streamId,
            },
        });
    }
    /**
     * Update existing Audit Stream status
     * @returns AuditStream successful operation
     * @throws ApiError
     */
    public streamsUpdateStatus({
        organization,
        streamId,
        status,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of stream entry to be updated
         */
        streamId: number,
        /**
         * Status of the stream
         */
        status: 'unknown' | 'enabled' | 'disabledByUser' | 'disabledBySystem' | 'deleted' | 'backfilling',
    }): CancelablePromise<AuditStream> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/audit/streams/{streamId}',
            path: {
                'organization': organization,
                'streamId': streamId,
            },
            query: {
                'status': status,
            },
        });
    }
}
