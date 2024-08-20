/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildTrigger } from './BuildTrigger';
import type { Schedule } from './Schedule';
/**
 * Represents a schedule trigger.
 */
export type ScheduleTrigger = (BuildTrigger & {
    schedules?: Array<Schedule>;
});

