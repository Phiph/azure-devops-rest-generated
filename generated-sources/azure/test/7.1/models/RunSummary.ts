/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Summary of runs for a pipeline instance.
 */
export type RunSummary = {
    /**
     * Total time taken by runs with state completed and NeedInvestigation.
     */
    duration?: string;
    /**
     * NoConfig runs count.
     */
    noConfigRunsCount?: number;
    /**
     * Runs count by outcome for runs with state completed and NeedInvestigation runs.
     */
    runSummaryByOutcome?: Record<string, number>;
    /**
     * Runs count by state.
     */
    runSummaryByState?: Record<string, number>;
    /**
     * Total runs count.
     */
    totalRunsCount?: number;
};

