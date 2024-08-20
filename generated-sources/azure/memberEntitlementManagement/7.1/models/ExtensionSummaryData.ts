/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SummaryData } from './SummaryData';
/**
 * Summary of Extensions in the organization.
 */
export type ExtensionSummaryData = (SummaryData & {
    /**
     * Count of Extension Licenses assigned to users through msdn.
     */
    assignedThroughSubscription?: number;
    /**
     * Gallery Id of the Extension
     */
    extensionId?: string;
    /**
     * Friendly name of this extension
     */
    extensionName?: string;
    /**
     * Whether its a Trial Version.
     */
    isTrialVersion?: boolean;
    /**
     * Minimum License Required for the Extension.
     */
    minimumLicenseRequired?: 'none' | 'express' | 'advanced' | 'advancedPlus' | 'stakeholder';
    /**
     * Days remaining for the Trial to expire.
     */
    remainingTrialDays?: number;
    /**
     * Date on which the Trial expires.
     */
    trialExpiryDate?: string;
});

