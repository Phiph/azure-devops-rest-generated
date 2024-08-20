/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PointAssignment } from './PointAssignment';
import type { WorkItemReference } from './WorkItemReference';
/**
 * Test case for the suite.
 */
export type SuiteTestCase = {
    /**
     * Point Assignment for test suite's test case.
     */
    pointAssignments?: Array<PointAssignment>;
    /**
     * Test case workItem reference.
     */
    testCase?: WorkItemReference;
};

