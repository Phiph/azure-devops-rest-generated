/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneOptions } from './CloneOptions';
import type { DestinationTestSuiteInfo } from './DestinationTestSuiteInfo';
import type { SourceTestSuiteInfo } from './SourceTestSuiteInfo';
/**
 * Parameters for Test Suite clone operation
 */
export type CloneTestSuiteParams = {
    /**
     * Test Plan Clone create parameters
     */
    cloneOptions?: CloneOptions;
    /**
     * Information about destination Test Suite
     */
    destinationTestSuite?: DestinationTestSuiteInfo;
    /**
     * Information about source Test Suite
     */
    sourceTestSuite?: SourceTestSuiteInfo;
};

