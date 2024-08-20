/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Suite create model
 */
export type SuiteCreateModel = {
    /**
     * Name of test suite.
     */
    name?: string;
    /**
     * For query based suites, query string that defines the suite.
     */
    queryString?: string;
    /**
     * For requirements test suites, the IDs of the requirements.
     */
    requirementIds?: Array<number>;
    /**
     * Type of test suite to create. It can have value from DynamicTestSuite, StaticTestSuite and RequirementTestSuite.
     */
    suiteType?: string;
};

