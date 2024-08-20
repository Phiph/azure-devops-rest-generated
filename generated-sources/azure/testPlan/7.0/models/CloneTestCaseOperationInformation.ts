/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneOperationCommonResponse } from './CloneOperationCommonResponse';
import type { CloneTestCaseOptions } from './CloneTestCaseOptions';
import type { SourceTestSuiteResponse } from './SourceTestSuiteResponse';
import type { TestSuiteReferenceWithProject } from './TestSuiteReferenceWithProject';
export type CloneTestCaseOperationInformation = {
    /**
     * Various information related to the clone
     */
    cloneOperationResponse?: CloneOperationCommonResponse;
    /**
     * Test Plan Clone create parameters
     */
    cloneOptions?: CloneTestCaseOptions;
    /**
     * Information of destination Test Suite
     */
    destinationTestSuite?: TestSuiteReferenceWithProject;
    /**
     * Information of source Test Suite
     */
    sourceTestSuite?: SourceTestSuiteResponse;
};

