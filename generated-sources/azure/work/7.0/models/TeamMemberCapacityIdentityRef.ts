/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CapacityContractBase } from './CapacityContractBase';
import type { IdentityRef } from './IdentityRef';
/**
 * Represents capacity for a specific team member
 */
export type TeamMemberCapacityIdentityRef = (CapacityContractBase & {
    /**
     * Identity ref of the associated team member
     */
    teamMember?: IdentityRef;
});

