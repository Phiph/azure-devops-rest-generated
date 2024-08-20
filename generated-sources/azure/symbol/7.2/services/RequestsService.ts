/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DebugEntry } from '../models/DebugEntry';
import type { DebugEntryCreateBatch } from '../models/DebugEntryCreateBatch';
import type { Request } from '../models/Request';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RequestsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a new symbol request.
     * @returns Request Successfully created a new symbol request.
     * @throws ApiError
     */
    public requestsCreateRequests({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request to create.
         */
        body: Request,
    }): CancelablePromise<Request> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/symbol/requests',
            path: {
                'organization': organization,
            },
            body: body,
            errors: {
                409: `The symbol request couldn't be created due to a server-side conflict.`,
            },
        });
    }
    /**
     * Delete a symbol request by request name.
     * @returns any The request no longer exists.
     * @throws ApiError
     */
    public requestsDeleteRequestsRequestName({
        organization,
        requestName,
        synchronous,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request name.
         */
        requestName: string,
        /**
         * If true, delete all the debug entries under this request synchronously in the current session. If false, the deletion will be postponed to a later point and be executed automatically by the system.
         */
        synchronous?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/symbol/requests',
            path: {
                'organization': organization,
            },
            query: {
                'requestName': requestName,
                'synchronous': synchronous,
            },
        });
    }
    /**
     * Get a symbol request by request name.
     * @returns Request Successfully retrieved the symbol request as specified by the request name.
     * @throws ApiError
     */
    public requestsGetRequestsRequestName({
        organization,
        requestName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request name.
         */
        requestName: string,
    }): CancelablePromise<Request> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/symbol/requests',
            path: {
                'organization': organization,
            },
            query: {
                'requestName': requestName,
            },
            errors: {
                404: `The symbol request as specified by the request name was not found.`,
            },
        });
    }
    /**
     * Update a symbol request by request name.
     * @returns Request Successfully updated the symbol request as specified by the request name.
     * @throws ApiError
     */
    public requestsUpdateRequestsRequestName({
        organization,
        body,
        requestName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request.
         */
        body: Request,
        /**
         * The symbol request name.
         */
        requestName: string,
    }): CancelablePromise<Request> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/symbol/requests',
            path: {
                'organization': organization,
            },
            query: {
                'requestName': requestName,
            },
            body: body,
            errors: {
                404: `The symbol request as specified by the request name was not found.`,
                409: `The symbol request as specified by the request name could not be updated due to a server-side conflict, for exmaple, an unmatched etag.`,
            },
        });
    }
    /**
     * Create debug entries for a symbol request as specified by its identifier.
     * @returns DebugEntry Successfully created debug entries for the specified request.
     * @throws ApiError
     */
    public requestsCreateRequestsRequestIdDebugEntries({
        organization,
        body,
        requestId,
        collection,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A batch that contains debug entries to create.
         */
        body: DebugEntryCreateBatch,
        /**
         * The symbol request identifier.
         */
        requestId: string,
        /**
         * A valid debug entry collection name. Must be "debugentries".
         */
        collection: string,
    }): CancelablePromise<Array<DebugEntry>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/symbol/requests/{requestId}',
            path: {
                'organization': organization,
                'requestId': requestId,
            },
            query: {
                'collection': collection,
            },
            body: body,
            errors: {
                400: `Could not create debug entries since the specified create behavior is not recognized.`,
                409: `Could not create debug entries since at least one entry already exists and the specified create behavior is ThrowIfExists.`,
            },
        });
    }
    /**
     * Delete a symbol request by request identifier.
     * @returns any The request no longer exists.
     * @throws ApiError
     */
    public requestsDeleteRequestsRequestId({
        organization,
        requestId,
        synchronous,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request identifier.
         */
        requestId: string,
        /**
         * If true, delete all the debug entries under this request synchronously in the current session. If false, the deletion will be postponed to a later point and be executed automatically by the system.
         */
        synchronous?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/symbol/requests/{requestId}',
            path: {
                'organization': organization,
                'requestId': requestId,
            },
            query: {
                'synchronous': synchronous,
            },
        });
    }
    /**
     * Get a symbol request by request identifier.
     * @returns Request Successfully retrieved the symbol request as specified by the request identifier.
     * @throws ApiError
     */
    public requestsGetRequestsRequestId({
        organization,
        requestId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request identifier.
         */
        requestId: string,
    }): CancelablePromise<Request> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/symbol/requests/{requestId}',
            path: {
                'organization': organization,
                'requestId': requestId,
            },
            errors: {
                404: `The symbol request as specified by the request identifier was not found.`,
            },
        });
    }
    /**
     * Update a symbol request by request identifier.
     * @returns Request Successfully updated the symbol request as specified by the request identifier.
     * @throws ApiError
     */
    public requestsUpdateRequestsRequestId({
        organization,
        body,
        requestId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request.
         */
        body: Request,
        /**
         * The symbol request identifier.
         */
        requestId: string,
    }): CancelablePromise<Request> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/symbol/requests/{requestId}',
            path: {
                'organization': organization,
                'requestId': requestId,
            },
            body: body,
            errors: {
                404: `The symbol request as specified by the request identifier was not found.`,
                409: `The symbol request as specified by the request identifier could not be updated due to a server-side conflict, for exmaple, an unmatched etag.`,
            },
        });
    }
}
