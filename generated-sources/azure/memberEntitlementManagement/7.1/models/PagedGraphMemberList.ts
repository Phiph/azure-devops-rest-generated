/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEntitlement } from './UserEntitlement';
/**
 * A page of users
 */
export type PagedGraphMemberList = {
    continuationToken?: string;
    items?: Array<UserEntitlement>;
    members?: Array<UserEntitlement>;
    totalCount?: number;
};

