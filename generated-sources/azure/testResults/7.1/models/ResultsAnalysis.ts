/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsDifference } from './AggregatedResultsDifference';
import type { PipelineReference } from './PipelineReference';
import type { TestResultFailuresAnalysis } from './TestResultFailuresAnalysis';
/**
 * Results insights for runs with state completed and NeedInvestigation.
 */
export type ResultsAnalysis = {
    /**
     * Reference of pipeline instance from which to compare the results.
     */
    previousContext?: PipelineReference;
    /**
     * Increase/Decrease in counts of results for a different outcome with respect to PreviousContext.
     */
    resultsDifference?: AggregatedResultsDifference;
    /**
     * Failure analysis of results with respect to PreviousContext
     */
    testFailuresAnalysis?: TestResultFailuresAnalysis;
};

