/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters for test case export operation
 */
export type ExportTestCaseParams = {
    /**
     * Test Case IDs to exported
     */
    testCaseIds?: Array<number>;
    /**
     * ID of test plan containing test cases
     */
    testPlanId?: number;
    /**
     * ID of test suite containing test cases
     */
    testSuiteId?: number;
};

