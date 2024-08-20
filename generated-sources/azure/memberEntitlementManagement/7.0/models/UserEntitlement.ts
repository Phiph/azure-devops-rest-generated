/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessLevel } from './AccessLevel';
import type { GraphUser } from './GraphUser';
import type { GroupEntitlement } from './GroupEntitlement';
import type { ProjectEntitlement } from './ProjectEntitlement';
/**
 * A user entity with additional properties including their license, extensions, and project membership
 */
export type UserEntitlement = {
    /**
     * User's access level denoted by a license.
     */
    accessLevel?: AccessLevel;
    /**
     * [Readonly] Date the user was added to the collection.
     */
    dateCreated?: string;
    /**
     * [Readonly] GroupEntitlements that this user belongs to.
     */
    groupAssignments?: Array<GroupEntitlement>;
    /**
     * The unique identifier which matches the Id of the Identity associated with the GraphMember.
     */
    id?: string;
    /**
     * [Readonly] Date the user last accessed the collection.
     */
    lastAccessedDate?: string;
    /**
     * Relation between a project and the user's effective permissions in that project.
     */
    projectEntitlements?: Array<ProjectEntitlement>;
    /**
     * User reference.
     */
    user?: GraphUser;
};

