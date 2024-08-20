/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IDomainId } from './IDomainId';
import type { ResourceBase } from './ResourceBase';
/**
 * Symbol request.
 */
export type Request = (ResourceBase & {
    /**
     * An optional human-facing description.
     */
    description?: string;
    /**
     * The Domain Id where this request lives. This property should not be null.
     */
    domainId?: IDomainId;
    /**
     * An optional expiration date for the request. The request will become inaccessible and get deleted after the date, regardless of its status.  On an HTTP POST, if expiration date is null/missing, the server will assign a default expiration data (30 days unless overwridden in the registry at the account level). On PATCH, if expiration date is null/missing, the behavior is to not change whatever the request's current expiration date is.
     */
    expirationDate?: string;
    /**
     * Indicates if request should be chunk dedup
     */
    isChunked?: boolean;
    /**
     * A human-facing name for the request. Required on POST, ignored on PATCH.
     */
    name?: string;
    /**
     * The total Size for this request.
     */
    size?: number;
    /**
     * The status for this request.
     */
    status?: 'none' | 'created' | 'sealed' | 'unavailable';
});

