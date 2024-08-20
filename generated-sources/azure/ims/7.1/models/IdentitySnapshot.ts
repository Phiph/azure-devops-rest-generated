/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMembership } from './GroupMembership';
import type { Identity } from './Identity';
import type { IdentityScope } from './IdentityScope';
export type IdentitySnapshot = {
    groups?: Array<Identity>;
    identityIds?: Array<string>;
    memberships?: Array<GroupMembership>;
    scopeId?: string;
    scopes?: Array<IdentityScope>;
};

