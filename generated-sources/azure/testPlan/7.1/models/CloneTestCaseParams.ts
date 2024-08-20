/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneTestCaseOptions } from './CloneTestCaseOptions';
import type { DestinationTestSuiteInfo } from './DestinationTestSuiteInfo';
import type { SourceTestSuiteInfo } from './SourceTestSuiteInfo';
import type { TestPlanReference } from './TestPlanReference';
/**
 * Parameters for Test Suite clone operation
 */
export type CloneTestCaseParams = {
    /**
     * Test Case Clone create parameters
     */
    cloneOptions?: CloneTestCaseOptions;
    /**
     * Information about destination Test Plan
     */
    destinationTestPlan?: TestPlanReference;
    /**
     * Information about destination Test Suite
     */
    destinationTestSuite?: DestinationTestSuiteInfo;
    /**
     * Information about source Test Plan
     */
    sourceTestPlan?: TestPlanReference;
    /**
     * Information about source Test Suite
     */
    sourceTestSuite?: SourceTestSuiteInfo;
    /**
     * Test Case IDs
     */
    testCaseIds?: Array<number>;
};

