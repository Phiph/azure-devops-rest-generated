/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Schedule = {
    branchFilters?: Array<string>;
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild?: 'none' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | 'all';
    /**
     * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
     */
    scheduleJobId?: string;
    /**
     * Flag to determine if this schedule should only build if the associated source has been changed.
     */
    scheduleOnlyWithChanges?: boolean;
    /**
     * Local timezone hour to start
     */
    startHours?: number;
    /**
     * Local timezone minute to start
     */
    startMinutes?: number;
    /**
     * Time zone of the build schedule (String representation of the time zone ID)
     */
    timeZoneId?: string;
};

