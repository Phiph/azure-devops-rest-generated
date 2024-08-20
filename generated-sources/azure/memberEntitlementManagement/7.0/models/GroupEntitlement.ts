/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessLevel } from './AccessLevel';
import type { GraphGroup } from './GraphGroup';
import type { ProjectEntitlement } from './ProjectEntitlement';
import type { UserEntitlement } from './UserEntitlement';
/**
 * A group entity with additional properties including its license, extensions, and project membership
 */
export type GroupEntitlement = {
    /**
     * Member reference.
     */
    group?: GraphGroup;
    /**
     * The unique identifier which matches the Id of the GraphMember.
     */
    id?: string;
    /**
     * [Readonly] The last time the group licensing rule was executed (regardless of whether any changes were made).
     */
    lastExecuted?: string;
    /**
     * License Rule.
     */
    licenseRule?: AccessLevel;
    /**
     * Group members. Only used when creating a new group.
     */
    members?: Array<UserEntitlement>;
    /**
     * Relation between a project and the member's effective permissions in that project.
     */
    projectEntitlements?: Array<ProjectEntitlement>;
    /**
     * The status of the group rule.
     */
    status?: 'applyPending' | 'applied' | 'incompatible' | 'unableToApply';
};

