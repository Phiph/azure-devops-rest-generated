/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A suite entry defines properties for a test suite.
 */
export type SuiteEntryUpdateParams = {
    /**
     * Id of the suite entry in the test suite: either a test case id or child suite id.
     */
    id?: number;
    /**
     * Sequence number for the suite entry object in the test suite.
     */
    sequenceNumber?: number;
    /**
     * Defines whether the entry is of type test case or suite.
     */
    suiteEntryType?: 'testCase' | 'suite';
};

