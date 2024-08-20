/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestCaseAssociatedResult } from './TestCaseAssociatedResult';
import type { TestPointDetailedReference } from './TestPointDetailedReference';
/**
 * This data model is used in TestCaseResultsDataProvider and populates the data required for initial page load
 */
export type TestCaseResultsData = {
    /**
     * Point information from where the execution history was viewed. Used to set initial filters.
     */
    contextPoint?: TestPointDetailedReference;
    /**
     * Use to store the results displayed in the table
     */
    results?: Array<TestCaseAssociatedResult>;
    /**
     * Test Case Name to be displayed in the table header
     */
    testCaseName?: string;
};

