/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestSuiteReference } from './TestSuiteReference';
/**
 * Source Test Suite Response for Test Case clone operation
 */
export type SourceTestSuiteResponse = (TestSuiteReference & {
    /**
     * project reference
     */
    project?: TeamProjectReference;
    /**
     * Id of suites to be cloned inside source Test Plan
     */
    testCaseIds?: Array<number>;
});

