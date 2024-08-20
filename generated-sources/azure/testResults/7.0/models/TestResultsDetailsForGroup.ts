/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsByOutcome } from './AggregatedResultsByOutcome';
import type { TestCaseResult } from './TestCaseResult';
export type TestResultsDetailsForGroup = {
    groupByValue?: any;
    results?: Array<TestCaseResult>;
    resultsCountByOutcome?: Record<string, AggregatedResultsByOutcome>;
    tags?: Array<string>;
};

