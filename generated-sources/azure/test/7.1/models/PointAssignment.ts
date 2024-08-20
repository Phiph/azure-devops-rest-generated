/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ShallowReference } from './ShallowReference';
/**
 * Adding test cases to a suite creates one of more test points based on the default configurations and testers assigned to the test suite. PointAssignment is the list of test points that were created for each of the test cases that were added to the test suite.
 */
export type PointAssignment = {
    /**
     * Configuration that was assigned to the test case.
     */
    configuration?: ShallowReference;
    /**
     * Tester that was assigned to the test case
     */
    tester?: IdentityRef;
};

