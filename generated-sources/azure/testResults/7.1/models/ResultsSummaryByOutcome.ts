/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultDetailsByOutcome } from './AggregatedResultDetailsByOutcome';
/**
 * Result summary by the outcome of test results.
 */
export type ResultsSummaryByOutcome = {
    /**
     * Aggregated result details for each test result outcome.
     */
    aggregatedResultDetailsByOutcome?: Record<string, AggregatedResultDetailsByOutcome>;
    /**
     * Time taken by results.
     */
    duration?: string;
    /**
     * Total number of not reported test results.
     */
    notReportedTestCount?: number;
    /**
     * Total number of test results. (It includes NotImpacted test results as well which need to exclude while calculating pass/fail test result percentage).
     */
    totalTestCount?: number;
};

