/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Test Entity Count Used to store test cases count (define tab) and test point count (execute tab) Used to store test cases count (define tab) and test point count (execute tab)
 */
export type TestEntityCount = {
    /**
     * Test Entity Count
     */
    count?: number;
    /**
     * Test Plan under which the Test Entities are
     */
    testPlanId?: number;
    /**
     * Test Suite under which the Test Entities are
     */
    testSuiteId?: number;
    /**
     * Total test entities in the suite without the applied filters
     */
    totalCount?: number;
};

