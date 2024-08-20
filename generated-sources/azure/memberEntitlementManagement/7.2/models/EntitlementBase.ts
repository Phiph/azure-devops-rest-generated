/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessLevel } from './AccessLevel';
import type { GroupEntitlement } from './GroupEntitlement';
import type { ProjectEntitlement } from './ProjectEntitlement';
export type EntitlementBase = {
    /**
     * Member's access level denoted by a license.
     */
    accessLevel?: AccessLevel;
    /**
     * [Readonly] Date the member was added to the collection.
     */
    dateCreated?: string;
    /**
     * [Readonly] GroupEntitlements that this member belongs to.
     */
    groupAssignments?: Array<GroupEntitlement>;
    /**
     * The unique identifier which matches the Id of the Identity associated with the GraphMember.
     */
    id?: string;
    /**
     * [Readonly] Date the member last accessed the collection.
     */
    lastAccessedDate?: string;
    /**
     * Relation between a project and the member's effective permissions in that project.
     */
    projectEntitlements?: Array<ProjectEntitlement>;
};

