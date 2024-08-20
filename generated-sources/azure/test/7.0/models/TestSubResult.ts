/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomTestField } from './CustomTestField';
import type { ShallowReference } from './ShallowReference';
import type { TestCaseResultIdentifier } from './TestCaseResultIdentifier';
/**
 * Represents a sub result of a test result.
 */
export type TestSubResult = {
    /**
     * Comment in sub result.
     */
    comment?: string;
    /**
     * Time when test execution completed(UTC).
     */
    completedDate?: string;
    /**
     * Machine where test executed.
     */
    computerName?: string;
    /**
     * Reference to test configuration.
     */
    configuration?: ShallowReference;
    /**
     * Additional properties of sub result.
     */
    customFields?: Array<CustomTestField>;
    /**
     * Name of sub result.
     */
    displayName?: string;
    /**
     * Duration of test execution.
     */
    durationInMs?: number;
    /**
     * Error message in sub result.
     */
    errorMessage?: string;
    /**
     * ID of sub result.
     */
    id?: number;
    /**
     * Time when result last updated(UTC).
     */
    lastUpdatedDate?: string;
    /**
     * Outcome of sub result.
     */
    outcome?: string;
    /**
     * Immediate parent ID of sub result.
     */
    parentId?: number;
    /**
     * Hierarchy type of the result, default value of None means its leaf node.
     */
    resultGroupType?: 'none' | 'rerun' | 'dataDriven' | 'orderedTest' | 'generic';
    /**
     * Index number of sub result.
     */
    sequenceId?: number;
    /**
     * Stacktrace.
     */
    stackTrace?: string;
    /**
     * Time when test execution started(UTC).
     */
    startedDate?: string;
    /**
     * List of sub results inside a sub result, if ResultGroupType is not None, it holds corresponding type sub results.
     */
    subResults?: Array<TestSubResult>;
    /**
     * Reference to test result.
     */
    testResult?: TestCaseResultIdentifier;
    /**
     * Url of sub result.
     */
    url?: string;
};

