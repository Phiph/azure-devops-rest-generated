/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamSettingsDataContractBase } from './TeamSettingsDataContractBase';
import type { TeamSettingsIteration } from './TeamSettingsIteration';
/**
 * Data contract for TeamSettings
 */
export type TeamSetting = (TeamSettingsDataContractBase & {
    /**
     * Backlog Iteration
     */
    backlogIteration?: TeamSettingsIteration;
    /**
     * Information about categories that are visible on the backlog.
     */
    backlogVisibilities?: Record<string, boolean>;
    /**
     * BugsBehavior (Off, AsTasks, AsRequirements, ...)
     */
    bugsBehavior?: 'off' | 'asRequirements' | 'asTasks';
    /**
     * Default Iteration, the iteration used when creating a new work item on the queries page.
     */
    defaultIteration?: TeamSettingsIteration;
    /**
     * Default Iteration macro (if any)
     */
    defaultIterationMacro?: string;
    /**
     * Days that the team is working
     */
    workingDays?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
});

