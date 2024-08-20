/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewRetentionLease } from '../models/NewRetentionLease';
import type { RetentionLease } from '../models/RetentionLease';
import type { RetentionLeaseUpdate } from '../models/RetentionLeaseUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LeasesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds new leases for pipeline runs.
     * @returns RetentionLease successful operation
     * @throws ApiError
     */
    public leasesAdd({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<NewRetentionLease>,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<RetentionLease>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/retention/leases',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Removes specific retention leases.
     * @returns any successful operation
     * @throws ApiError
     */
    public leasesDelete({
        organization,
        project,
        ids,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        ids: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/retention/leases',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'ids': ids,
            },
        });
    }
    /**
     * Returns any leases matching the specified MinimalRetentionLeases
     * @returns RetentionLease successful operation
     * @throws ApiError
     */
    public leasesGetRetentionLeasesByMinimalRetentionLeases({
        organization,
        project,
        leasesToFetch,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * List of JSON-serialized MinimalRetentionLeases separated by '|'
         */
        leasesToFetch: string,
    }): CancelablePromise<Array<RetentionLease>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/retention/leases',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'leasesToFetch': leasesToFetch,
            },
        });
    }
    /**
     * Returns the details of the retention lease given a lease id.
     * @returns RetentionLease successful operation
     * @throws ApiError
     */
    public leasesGet({
        organization,
        project,
        leaseId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        leaseId: number,
    }): CancelablePromise<RetentionLease> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/retention/leases/{leaseId}',
            path: {
                'organization': organization,
                'project': project,
                'leaseId': leaseId,
            },
        });
    }
    /**
     * Updates the duration or pipeline protection status of a retention lease.
     * @returns RetentionLease successful operation
     * @throws ApiError
     */
    public leasesUpdate({
        organization,
        body,
        project,
        leaseId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The new data for the retention lease.
         */
        body: RetentionLeaseUpdate,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the lease to update.
         */
        leaseId: number,
    }): CancelablePromise<RetentionLease> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/retention/leases/{leaseId}',
            path: {
                'organization': organization,
                'project': project,
                'leaseId': leaseId,
            },
            body: body,
        });
    }
}
