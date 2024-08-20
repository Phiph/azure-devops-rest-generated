/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestFailureDetails } from './TestFailureDetails';
import type { TestResultsContext } from './TestResultsContext';
export type TestFailuresAnalysis = {
    existingFailures?: TestFailureDetails;
    fixedTests?: TestFailureDetails;
    newFailures?: TestFailureDetails;
    previousContext?: TestResultsContext;
};

