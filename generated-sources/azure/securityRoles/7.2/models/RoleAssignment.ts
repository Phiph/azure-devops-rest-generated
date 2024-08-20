/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { SecurityRole } from './SecurityRole';
export type RoleAssignment = {
    /**
     * Designates the role as explicitly assigned or inherited.
     */
    access?: 'assigned' | 'inherited';
    /**
     * User friendly description of access assignment.
     */
    accessDisplayName?: string;
    /**
     * The user to whom the role is assigned.
     */
    identity?: IdentityRef;
    /**
     * The role assigned to the user.
     */
    role?: SecurityRole;
};

