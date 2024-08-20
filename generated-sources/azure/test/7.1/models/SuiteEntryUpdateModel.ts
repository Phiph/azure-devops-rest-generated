/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A model to define sequence of test suite entries in a test suite.
 */
export type SuiteEntryUpdateModel = {
    /**
     * Id of the child suite in the test suite.
     */
    childSuiteId?: number;
    /**
     * Updated sequence number for the test case or child test suite in the test suite.
     */
    sequenceNumber?: number;
    /**
     * Id of the test case in the test suite.
     */
    testCaseId?: number;
};

