/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildReference } from './BuildReference';
import type { CustomTestField } from './CustomTestField';
import type { FailingSince } from './FailingSince';
import type { IdentityRef } from './IdentityRef';
import type { ReleaseReference } from './ReleaseReference';
import type { ShallowReference } from './ShallowReference';
import type { TestIterationDetailsModel } from './TestIterationDetailsModel';
import type { TestSubResult } from './TestSubResult';
/**
 * Represents a test result.
 */
export type TestCaseResult = {
    /**
     * Test attachment ID of action recording.
     */
    afnStripId?: number;
    /**
     * Reference to area path of test.
     */
    area?: ShallowReference;
    /**
     * Reference to bugs linked to test result.
     */
    associatedBugs?: Array<ShallowReference>;
    /**
     * ID representing test method in a dll.
     */
    automatedTestId?: string;
    /**
     * Fully qualified name of test executed.
     */
    automatedTestName?: string;
    /**
     * Container to which test belongs.
     */
    automatedTestStorage?: string;
    /**
     * Type of automated test.
     */
    automatedTestType?: string;
    /**
     * TypeId of automated test.
     */
    automatedTestTypeId?: string;
    /**
     * Shallow reference to build associated with test result.
     */
    build?: ShallowReference;
    /**
     * Reference to build associated with test result.
     */
    buildReference?: BuildReference;
    /**
     * Comment in a test result with maxSize= 1000 chars.
     */
    comment?: string;
    /**
     * Time when test execution completed(UTC). Completed date should be greater than StartedDate.
     */
    completedDate?: string;
    /**
     * Machine name where test executed.
     */
    computerName?: string;
    /**
     * Reference to test configuration. Type ShallowReference.
     */
    configuration?: ShallowReference;
    /**
     * Timestamp when test result created(UTC).
     */
    createdDate?: string;
    /**
     * Additional properties of test result.
     */
    customFields?: Array<CustomTestField>;
    /**
     * Duration of test execution in milliseconds. If not provided value will be set as CompletedDate - StartedDate
     */
    durationInMs?: number;
    /**
     * Error message in test execution.
     */
    errorMessage?: string;
    /**
     * Information when test results started failing.
     */
    failingSince?: FailingSince;
    /**
     * Failure type of test result. Valid Value= (Known Issue, New Issue, Regression, Unknown, None)
     */
    failureType?: string;
    /**
     * ID of a test result.
     */
    id?: number;
    /**
     * Test result details of test iterations used only for Manual Testing.
     */
    iterationDetails?: Array<TestIterationDetailsModel>;
    /**
     * Reference to identity last updated test result.
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last updated datetime of test result(UTC).
     */
    lastUpdatedDate?: string;
    /**
     * Test outcome of test result. Valid values = (Unspecified, None, Passed, Failed, Inconclusive, Timeout, Aborted, Blocked, NotExecuted, Warning, Error, NotApplicable, Paused, InProgress, NotImpacted)
     */
    outcome?: string;
    /**
     * Reference to test owner.
     */
    owner?: IdentityRef;
    /**
     * Priority of test executed.
     */
    priority?: number;
    /**
     * Reference to team project.
     */
    project?: ShallowReference;
    /**
     * Shallow reference to release associated with test result.
     */
    release?: ShallowReference;
    /**
     * Reference to release associated with test result.
     */
    releaseReference?: ReleaseReference;
    /**
     * ResetCount.
     */
    resetCount?: number;
    /**
     * Resolution state of test result.
     */
    resolutionState?: string;
    /**
     * ID of resolution state.
     */
    resolutionStateId?: number;
    /**
     * Hierarchy type of the result, default value of None means its leaf node.
     */
    resultGroupType?: 'none' | 'rerun' | 'dataDriven' | 'orderedTest' | 'generic';
    /**
     * Revision number of test result.
     */
    revision?: number;
    /**
     * Reference to identity executed the test.
     */
    runBy?: IdentityRef;
    /**
     * Stacktrace with maxSize= 1000 chars.
     */
    stackTrace?: string;
    /**
     * Time when test execution started(UTC).
     */
    startedDate?: string;
    /**
     * State of test result. Type TestRunState.
     */
    state?: string;
    /**
     * List of sub results inside a test result, if ResultGroupType is not None, it holds corresponding type sub results.
     */
    subResults?: Array<TestSubResult>;
    /**
     * Reference to the test executed.
     */
    testCase?: ShallowReference;
    /**
     * Reference ID of test used by test result. Type TestResultMetaData
     */
    testCaseReferenceId?: number;
    /**
     * TestCaseRevision Number.
     */
    testCaseRevision?: number;
    /**
     * Name of test.
     */
    testCaseTitle?: string;
    /**
     * Reference to test plan test case workitem is part of.
     */
    testPlan?: ShallowReference;
    /**
     * Reference to the test point executed.
     */
    testPoint?: ShallowReference;
    /**
     * Reference to test run.
     */
    testRun?: ShallowReference;
    /**
     * Reference to test suite test case workitem is part of.
     */
    testSuite?: ShallowReference;
    /**
     * Url of test result.
     */
    url?: string;
};

