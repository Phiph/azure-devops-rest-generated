/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResolutionState } from './TestResolutionState';
/**
 * Test run statistics per outcome.
 */
export type RunStatistic = {
    /**
     * Test result count fo the given outcome.
     */
    count?: number;
    /**
     * Test result outcome
     */
    outcome?: string;
    /**
     * Test run Resolution State.
     */
    resolutionState?: TestResolutionState;
    /**
     * ResultMetadata for the given outcome/count.
     */
    resultMetadata?: 'rerun' | 'flaky';
    /**
     * State of the test run
     */
    state?: string;
};

