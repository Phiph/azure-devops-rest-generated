/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsByOutcome } from './AggregatedResultsByOutcome';
import type { AggregatedResultsDifference } from './AggregatedResultsDifference';
import type { AggregatedRunsByOutcome } from './AggregatedRunsByOutcome';
import type { AggregatedRunsByState } from './AggregatedRunsByState';
import type { TestResultsContext } from './TestResultsContext';
export type AggregatedResultsAnalysis = {
    duration?: string;
    notReportedResultsByOutcome?: Record<string, AggregatedResultsByOutcome>;
    previousContext?: TestResultsContext;
    resultsByOutcome?: Record<string, AggregatedResultsByOutcome>;
    resultsDifference?: AggregatedResultsDifference;
    runSummaryByOutcome?: Record<string, AggregatedRunsByOutcome>;
    runSummaryByState?: Record<string, AggregatedRunsByState>;
    totalTests?: number;
};

