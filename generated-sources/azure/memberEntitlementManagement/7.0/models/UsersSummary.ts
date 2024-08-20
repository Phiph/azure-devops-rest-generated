/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessLevel } from './AccessLevel';
import type { GroupOption } from './GroupOption';
import type { LicenseSummaryData } from './LicenseSummaryData';
import type { ProjectRef } from './ProjectRef';
/**
 * Summary of licenses and extensions assigned to users in the organization
 */
export type UsersSummary = {
    /**
     * Available Access Levels
     */
    availableAccessLevels?: Array<AccessLevel>;
    /**
     * Default Access Level
     */
    defaultAccessLevel?: AccessLevel;
    /**
     * Group Options
     */
    groupOptions?: Array<GroupOption>;
    /**
     * Summary of Licenses in the organization
     */
    licenses?: Array<LicenseSummaryData>;
    /**
     * Summary of Projects in the organization
     */
    projectRefs?: Array<ProjectRef>;
};

