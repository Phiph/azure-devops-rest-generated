/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphMember } from './GraphMember';
import type { UserEntitlement } from './UserEntitlement';
/**
 * Deprecated: Use UserEntitlement instead
 */
export type MemberEntitlement = (UserEntitlement & {
    /**
     * Member reference
     */
    member?: GraphMember;
});

