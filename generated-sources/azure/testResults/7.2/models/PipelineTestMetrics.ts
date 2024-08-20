/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PipelineReference } from './PipelineReference';
import type { ResultsAnalysis } from './ResultsAnalysis';
import type { ResultSummary } from './ResultSummary';
import type { RunSummary } from './RunSummary';
/**
 * Test summary of a pipeline instance.
 */
export type PipelineTestMetrics = {
    /**
     * Reference of Pipeline instance for which test summary is calculated.
     */
    currentContext?: PipelineReference;
    /**
     * This is the return value for metric ResultsAnalysis Results insights which include failure analysis, increase/decrease in results count analysis.
     */
    resultsAnalysis?: ResultsAnalysis;
    /**
     * This is the return value for metric ResultSummary Results summary based on results outcome.
     */
    resultSummary?: ResultSummary;
    /**
     * This is the return value for metric RunSummary Run summary.
     */
    runSummary?: RunSummary;
    /**
     * Summary at child node.
     */
    summaryAtChild?: Array<PipelineTestMetrics>;
};

