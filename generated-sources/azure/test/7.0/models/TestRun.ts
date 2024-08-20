/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildConfiguration } from './BuildConfiguration';
import type { CustomTestField } from './CustomTestField';
import type { DtlEnvironmentDetails } from './DtlEnvironmentDetails';
import type { IdentityRef } from './IdentityRef';
import type { PipelineReference } from './PipelineReference';
import type { ReleaseReference } from './ReleaseReference';
import type { RunFilter } from './RunFilter';
import type { RunStatistic } from './RunStatistic';
import type { ShallowReference } from './ShallowReference';
import type { TestEnvironment } from './TestEnvironment';
import type { TestTag } from './TestTag';
/**
 * Test run details.
 */
export type TestRun = {
    /**
     * Build associated with this test run.
     */
    build?: ShallowReference;
    /**
     * Build configuration details associated with this test run.
     */
    buildConfiguration?: BuildConfiguration;
    /**
     * Comments entered by those analyzing the run.
     */
    comment?: string;
    /**
     * Completed date time of the run.
     */
    completedDate?: string;
    /**
     * Test Run Controller.
     */
    controller?: string;
    /**
     * Test Run CreatedDate.
     */
    createdDate?: string;
    /**
     * List of Custom Fields for TestRun.
     */
    customFields?: Array<CustomTestField>;
    /**
     * Drop Location for the test Run.
     */
    dropLocation?: string;
    dtlAutEnvironment?: ShallowReference;
    dtlEnvironment?: ShallowReference;
    dtlEnvironmentCreationDetails?: DtlEnvironmentDetails;
    /**
     * Due date and time for test run.
     */
    dueDate?: string;
    /**
     * Error message associated with the run.
     */
    errorMessage?: string;
    filter?: RunFilter;
    /**
     * ID of the test run.
     */
    id?: number;
    /**
     * Number of Incomplete Tests.
     */
    incompleteTests?: number;
    /**
     * true if test run is automated, false otherwise.
     */
    isAutomated?: boolean;
    /**
     * The iteration to which the run belongs.
     */
    iteration?: string;
    /**
     * Team foundation ID of the last updated the test run.
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last updated date and time
     */
    lastUpdatedDate?: string;
    /**
     * Name of the test run.
     */
    name?: string;
    /**
     * Number of Not Applicable Tests.
     */
    notApplicableTests?: number;
    /**
     * Team Foundation ID of the owner of the runs.
     */
    owner?: IdentityRef;
    /**
     * Number of passed tests in the run
     */
    passedTests?: number;
    /**
     * Phase/State for the testRun.
     */
    phase?: string;
    /**
     * Reference of the pipeline to which this test run belongs.
     */
    pipelineReference?: PipelineReference;
    /**
     * Test plan associated with this test run.
     */
    plan?: ShallowReference;
    /**
     * Post Process State.
     */
    postProcessState?: string;
    /**
     * Project associated with this run.
     */
    project?: ShallowReference;
    /**
     * Release Reference for the Test Run.
     */
    release?: ReleaseReference;
    /**
     * Release Environment Uri for TestRun.
     */
    releaseEnvironmentUri?: string;
    /**
     * Release Uri for TestRun.
     */
    releaseUri?: string;
    revision?: number;
    /**
     * RunSummary by outcome.
     */
    runStatistics?: Array<RunStatistic>;
    /**
     * Start date time of the run.
     */
    startedDate?: string;
    /**
     * The state of the run. Type TestRunState Valid states - Unspecified ,NotStarted, InProgress, Completed, Waiting, Aborted, NeedsInvestigation
     */
    state?: string;
    /**
     * TestRun Substate.
     */
    substate?: 'none' | 'creatingEnvironment' | 'runningTests' | 'canceledByUser' | 'abortedBySystem' | 'timedOut' | 'pendingAnalysis' | 'analyzed' | 'cancellationInProgress';
    /**
     * Tags attached with this test run.
     */
    tags?: Array<TestTag>;
    /**
     * Test environment associated with the run.
     */
    testEnvironment?: TestEnvironment;
    testMessageLogId?: number;
    testSettings?: ShallowReference;
    /**
     * Total tests in the run
     */
    totalTests?: number;
    /**
     * Number of failed tests in the run.
     */
    unanalyzedTests?: number;
    /**
     * Url of the test run
     */
    url?: string;
    /**
     * Web Access Url for TestRun.
     */
    webAccessUrl?: string;
};

