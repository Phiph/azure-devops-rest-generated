/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMemberCapacityIdentityRef } from './TeamMemberCapacityIdentityRef';
/**
 * Represents team member capacity with totals aggregated
 */
export type TeamCapacity = {
    teamMembers?: Array<TeamMemberCapacityIdentityRef>;
    totalCapacityPerDay?: number;
    totalDaysOff?: number;
};

