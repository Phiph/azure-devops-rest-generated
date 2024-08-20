/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsByOutcome } from './AggregatedResultsByOutcome';
import type { AggregatedRunsByState } from './AggregatedRunsByState';
import type { TestResultsContext } from './TestResultsContext';
export type AggregatedDataForResultTrend = {
    /**
     * This is tests execution duration.
     */
    duration?: string;
    resultsByOutcome?: Record<string, AggregatedResultsByOutcome>;
    runSummaryByState?: Record<string, AggregatedRunsByState>;
    testResultsContext?: TestResultsContext;
    totalTests?: number;
};

