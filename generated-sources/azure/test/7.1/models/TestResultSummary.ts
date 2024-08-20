/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsAnalysis } from './AggregatedResultsAnalysis';
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestFailuresAnalysis } from './TestFailuresAnalysis';
import type { TestResultsContext } from './TestResultsContext';
export type TestResultSummary = {
    aggregatedResultsAnalysis?: AggregatedResultsAnalysis;
    noConfigRunsCount?: number;
    teamProject?: TeamProjectReference;
    testFailures?: TestFailuresAnalysis;
    testResultsContext?: TestResultsContext;
    totalRunsCount?: number;
};

