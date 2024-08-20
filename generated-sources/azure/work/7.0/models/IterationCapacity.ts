/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamCapacityTotals } from './TeamCapacityTotals';
/**
 * Capacity and teams for all teams in an iteration
 */
export type IterationCapacity = {
    teams?: Array<TeamCapacityTotals>;
    totalIterationCapacityPerDay?: number;
    totalIterationDaysOff?: number;
};

