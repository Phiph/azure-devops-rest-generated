/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReleaseSchedule = {
    /**
     * Days of the week to release.
     */
    daysToRelease?: 'none' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | 'all';
    /**
     * Team Foundation Job Definition Job Id.
     */
    jobId?: string;
    /**
     * Flag to determine if this schedule should only release if the associated artifact has been changed or release definition changed.
     */
    scheduleOnlyWithChanges?: boolean;
    /**
     * Local time zone hour to start.
     */
    startHours?: number;
    /**
     * Local time zone minute to start.
     */
    startMinutes?: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'.
     */
    timeZoneId?: string;
};

