/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DtlEnvironmentDetails } from './DtlEnvironmentDetails';
import type { RunSummaryModel } from './RunSummaryModel';
import type { ShallowReference } from './ShallowReference';
import type { TestMessageLogDetails } from './TestMessageLogDetails';
import type { TestTag } from './TestTag';
export type RunUpdateModel = {
    /**
     * An abstracted reference to the build that it belongs.
     */
    build?: ShallowReference;
    /**
     * Drop location of the build used for test run.
     */
    buildDropLocation?: string;
    /**
     * Flavor of the build used for test run. (E.g: Release, Debug)
     */
    buildFlavor?: string;
    /**
     * Platform of the build used for test run. (E.g.: x86, amd64)
     */
    buildPlatform?: string;
    /**
     * Comments entered by those analyzing the run.
     */
    comment?: string;
    /**
     * Completed date time of the run.
     */
    completedDate?: string;
    /**
     * Name of the test controller used for automated run.
     */
    controller?: string;
    /**
     * true to delete inProgess Results , false otherwise.
     */
    deleteInProgressResults?: boolean;
    /**
     * An abstracted reference to DtlAutEnvironment.
     */
    dtlAutEnvironment?: ShallowReference;
    /**
     * An abstracted reference to DtlEnvironment.
     */
    dtlEnvironment?: ShallowReference;
    dtlEnvironmentDetails?: DtlEnvironmentDetails;
    /**
     * Due date and time for test run.
     */
    dueDate?: string;
    /**
     * Error message associated with the run.
     */
    errorMessage?: string;
    /**
     * The iteration in which to create the run.
     */
    iteration?: string;
    /**
     * Log entries associated with the run. Use a comma-separated list of multiple log entry objects. { logEntry }, { logEntry }, ...
     */
    logEntries?: Array<TestMessageLogDetails>;
    /**
     * Name of the test run.
     */
    name?: string;
    /**
     * URI of release environment associated with the run.
     */
    releaseEnvironmentUri?: string;
    /**
     * URI of release associated with the run.
     */
    releaseUri?: string;
    /**
     * Run summary for run Type = NoConfigRun.
     */
    runSummary?: Array<RunSummaryModel>;
    /**
     * SourceWorkFlow(CI/CD) of the test run.
     */
    sourceWorkflow?: string;
    /**
     * Start date time of the run.
     */
    startedDate?: string;
    /**
     * The state of the test run Below are the valid values - NotStarted, InProgress, Completed, Aborted, Waiting
     */
    state?: string;
    /**
     * The types of sub states for test run.
     */
    substate?: 'none' | 'creatingEnvironment' | 'runningTests' | 'canceledByUser' | 'abortedBySystem' | 'timedOut' | 'pendingAnalysis' | 'analyzed' | 'cancellationInProgress';
    /**
     * Tags to attach with the test run.
     */
    tags?: Array<TestTag>;
    /**
     * ID of the test environment associated with the run.
     */
    testEnvironmentId?: string;
    /**
     * An abstracted reference to test setting resource.
     */
    testSettings?: ShallowReference;
};

