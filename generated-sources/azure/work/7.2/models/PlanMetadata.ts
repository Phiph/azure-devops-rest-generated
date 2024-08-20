/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Metadata about a plan definition that is stored in favorites service
 */
export type PlanMetadata = {
    /**
     * Identity of the creator of the plan
     */
    createdByIdentity?: IdentityRef;
    /**
     * Description of plan
     */
    description?: string;
    /**
     * Last modified date of the plan
     */
    modifiedDate?: string;
    /**
     * Bit flag indicating set of permissions a user has to the plan.
     */
    userPermissions?: 'none' | 'view' | 'edit' | 'delete' | 'manage' | 'allPermissions';
};

