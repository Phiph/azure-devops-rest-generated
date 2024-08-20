/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitlementBase } from './EntitlementBase';
import type { GraphUser } from './GraphUser';
/**
 * A user entity with additional properties including their license, extensions, and project membership
 */
export type UserEntitlement = (EntitlementBase & {
    /**
     * User reference.
     */
    user?: GraphUser;
});

