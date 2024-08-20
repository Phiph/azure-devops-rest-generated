/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CapacityContractBase } from './CapacityContractBase';
import type { Member } from './Member';
/**
 * Represents capacity for a specific team member
 */
export type TeamMemberCapacity = (CapacityContractBase & {
    /**
     * Shallow Ref to the associated team member
     */
    teamMember?: Member;
});

