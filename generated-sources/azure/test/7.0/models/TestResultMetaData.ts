/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestFlakyIdentifier } from './TestFlakyIdentifier';
/**
 * Represents a Meta Data of a test result.
 */
export type TestResultMetaData = {
    /**
     * AutomatedTestName of test result.
     */
    automatedTestName?: string;
    /**
     * AutomatedTestStorage of test result.
     */
    automatedTestStorage?: string;
    /**
     * List of Flaky Identifier for TestCaseReferenceId
     */
    flakyIdentifiers?: Array<TestFlakyIdentifier>;
    /**
     * Owner of test result.
     */
    owner?: string;
    /**
     * Priority of test result.
     */
    priority?: number;
    /**
     * ID of TestCaseReference.
     */
    testCaseReferenceId?: number;
    /**
     * TestCaseTitle of test result.
     */
    testCaseTitle?: string;
};

