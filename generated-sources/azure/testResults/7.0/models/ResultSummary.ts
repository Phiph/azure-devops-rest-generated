/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResultsSummaryByOutcome } from './ResultsSummaryByOutcome';
/**
 * Summary of results for a pipeline instance.
 */
export type ResultSummary = {
    /**
     * Result summary of pipeline, group by TestRun state.
     */
    resultSummaryByRunState?: Record<string, ResultsSummaryByOutcome>;
};

