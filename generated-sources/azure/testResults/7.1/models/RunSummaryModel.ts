/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Run summary for each output type of test.
 */
export type RunSummaryModel = {
    /**
     * Total time taken in milliseconds.
     */
    duration?: number;
    /**
     * Number of results for Outcome TestOutcome
     */
    resultCount?: number;
    /**
     * Summary is based on outcome
     */
    testOutcome?: 'unspecified' | 'none' | 'passed' | 'failed' | 'inconclusive' | 'timeout' | 'aborted' | 'blocked' | 'notExecuted' | 'warning' | 'error' | 'notApplicable' | 'paused' | 'inProgress' | 'notImpacted';
};

