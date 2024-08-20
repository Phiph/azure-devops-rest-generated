/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data contract for what we expect to receive when PATCH
 */
export type TeamSettingsPatch = {
    backlogIteration?: string;
    backlogVisibilities?: Record<string, boolean>;
    bugsBehavior?: 'off' | 'asRequirements' | 'asTasks';
    defaultIteration?: string;
    defaultIterationMacro?: string;
    workingDays?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
};

