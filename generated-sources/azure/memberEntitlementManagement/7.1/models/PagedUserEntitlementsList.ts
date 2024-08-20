/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEntitlement } from './UserEntitlement';
/**
 * A page of user entitlements
 */
export type PagedUserEntitlementsList = {
    /**
     * The continuation token for next page of data. Can be null, if no more data exists.
     */
    continuationToken?: string;
    /**
     * The requested user entitlement items.
     */
    items?: Array<UserEntitlement>;
    /**
     * The total count of the existing user entitlement items.
     */
    totalCount?: number;
};

