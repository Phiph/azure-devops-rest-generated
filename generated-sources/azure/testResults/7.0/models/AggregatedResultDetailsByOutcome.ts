/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Result deatils for a particular test result outcome.
 */
export type AggregatedResultDetailsByOutcome = {
    /**
     * Number of results for current outcome.
     */
    count?: number;
    /**
     * Time taken by results.
     */
    duration?: string;
    /**
     * Test result outcome
     */
    outcome?: 'unspecified' | 'none' | 'passed' | 'failed' | 'inconclusive' | 'timeout' | 'aborted' | 'blocked' | 'notExecuted' | 'warning' | 'error' | 'notApplicable' | 'paused' | 'inProgress' | 'notImpacted';
    /**
     * Number of results on rerun
     */
    rerunResultCount?: number;
};

