/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlakyDetection } from './FlakyDetection';
export type FlakySettings = {
    /**
     * FlakyDetection defines types of detection.
     */
    flakyDetection?: FlakyDetection;
    /**
     * FlakyInSummaryReport defines flaky data should show in summary report or not.
     */
    flakyInSummaryReport?: boolean;
    /**
     * IsFlakyBugCreated defines if there is any bug that has been created with flaky testresult.
     */
    isFlakyBugCreated?: boolean;
    /**
     * ManualMarkUnmarkFlaky defines manual marking unmarking of flaky testcase.
     */
    manualMarkUnmarkFlaky?: boolean;
};

