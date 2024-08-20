/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from './Group';
import type { ProjectRef } from './ProjectRef';
import type { TeamRef } from './TeamRef';
/**
 * Relation between a project and the user's effective permissions in that project.
 */
export type ProjectEntitlement = {
    /**
     * Assignment Source (e.g. Group or Unknown).
     */
    assignmentSource?: 'none' | 'unknown' | 'groupRule';
    /**
     * Project Group (e.g. Contributor, Reader etc.)
     */
    group?: Group;
    /**
     * Whether the user is inheriting permissions to a project through a Azure DevOps or AAD group membership.
     */
    projectPermissionInherited?: 'notSet' | 'notInherited' | 'inherited';
    /**
     * Project Ref
     */
    projectRef?: ProjectRef;
    /**
     * Team Ref.
     */
    teamRefs?: Array<TeamRef>;
};

