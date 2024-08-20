/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneOperationCommonResponse } from './CloneOperationCommonResponse';
import type { CloneOptions } from './CloneOptions';
import type { TestSuiteReferenceWithProject } from './TestSuiteReferenceWithProject';
/**
 * Response for Test Suite clone operation
 */
export type CloneTestSuiteOperationInformation = {
    /**
     * Information of newly cloned Test Suite
     */
    clonedTestSuite?: TestSuiteReferenceWithProject;
    /**
     * Various information related to the clone
     */
    cloneOperationResponse?: CloneOperationCommonResponse;
    /**
     * Test Plan Clone create parameters
     */
    cloneOptions?: CloneOptions;
    /**
     * Information of destination Test Suite
     */
    destinationTestSuite?: TestSuiteReferenceWithProject;
    /**
     * Information of source Test Suite
     */
    sourceTestSuite?: TestSuiteReferenceWithProject;
};

