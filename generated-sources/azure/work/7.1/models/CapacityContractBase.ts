/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from './Activity';
import type { DateRange } from './DateRange';
import type { TeamSettingsDataContractBase } from './TeamSettingsDataContractBase';
export type CapacityContractBase = (TeamSettingsDataContractBase & {
    /**
     * Collection of capacities associated with the team member
     */
    activities?: Array<Activity>;
    /**
     * The days off associated with the team member
     */
    daysOff?: Array<DateRange>;
});

