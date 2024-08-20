/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultsContext } from './TestResultsContext';
export type ResultsFilter = {
    automatedTestName?: string;
    branch?: string;
    executedIn?: 'any' | 'tcm' | 'tfs';
    groupBy?: string;
    maxCompleteDate?: string;
    resultsCount?: number;
    testCaseId?: number;
    testCaseReferenceIds?: Array<number>;
    testPlanId?: number;
    testPointIds?: Array<number>;
    testResultsContext?: TestResultsContext;
    trendDays?: number;
};

