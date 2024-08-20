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
import type { RunSummaryModel } from './RunSummaryModel';
import type { ShallowReference } from './ShallowReference';
import type { TestTag } from './TestTag';
/**
 * Test run create details.
 */
export type RunCreateModel = {
    /**
     * true if test run is automated, false otherwise. By default it will be false.
     */
    automated?: boolean;
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
     * BuildReference of the test run.
     */
    buildReference?: BuildConfiguration;
    /**
     * Comments entered by those analyzing the run.
     */
    comment?: string;
    /**
     * Completed date time of the run.
     */
    completeDate?: string;
    /**
     * IDs of the test configurations associated with the run.
     */
    configurationIds?: Array<number>;
    /**
     * Name of the test controller used for automated run.
     */
    controller?: string;
    /**
     * Additional properties of test Run. Value of the CustomField cannot be more than 1KB.
     */
    customTestFields?: Array<CustomTestField>;
    /**
     * An abstracted reference to DtlAutEnvironment.
     */
    dtlAutEnvironment?: ShallowReference;
    /**
     * An abstracted reference to DtlTestEnvironment.
     */
    dtlTestEnvironment?: ShallowReference;
    /**
     * Due date and time for test run.
     */
    dueDate?: string;
    environmentDetails?: DtlEnvironmentDetails;
    /**
     * Error message associated with the run.
     */
    errorMessage?: string;
    /**
     * Filter used for discovering the Run.
     */
    filter?: RunFilter;
    /**
     * The iteration in which to create the run. Root iteration of the team project will be default
     */
    iteration?: string;
    /**
     * Name of the test run.
     */
    name?: string;
    /**
     * Display name of the owner of the run.
     */
    owner?: IdentityRef;
    /**
     * Reference of the pipeline to which this test run belongs. PipelineReference.PipelineId should be equal to RunCreateModel.Build.Id
     */
    pipelineReference?: PipelineReference;
    /**
     * An abstracted reference to the plan that it belongs.
     */
    plan?: ShallowReference;
    /**
     * IDs of the test points to use in the run.
     */
    pointIds?: Array<number>;
    /**
     * URI of release environment associated with the run.
     */
    releaseEnvironmentUri?: string;
    /**
     * Reference to release associated with test run.
     */
    releaseReference?: ReleaseReference;
    /**
     * URI of release associated with the run.
     */
    releaseUri?: string;
    /**
     * Run summary for run Type = NoConfigRun.
     */
    runSummary?: Array<RunSummaryModel>;
    /**
     * Timespan till the run times out.
     */
    runTimeout?: string;
    /**
     * SourceWorkFlow(CI/CD) of the test run.
     */
    sourceWorkflow?: string;
    /**
     * Start date time of the run.
     */
    startDate?: string;
    /**
     * The state of the run. Type TestRunState Valid states - NotStarted, InProgress, Waiting
     */
    state?: string;
    /**
     * Tags to attach with the test run, maximum of 5 tags can be added to run.
     */
    tags?: Array<TestTag>;
    /**
     * TestConfigurationMapping of the test run.
     */
    testConfigurationsMapping?: string;
    /**
     * ID of the test environment associated with the run.
     */
    testEnvironmentId?: string;
    /**
     * An abstracted reference to the test settings resource.
     */
    testSettings?: ShallowReference;
    /**
     * Type of the run(RunType) Valid Values : (Unspecified, Normal, Blocking, Web, MtrRunInitiatedFromWeb, RunWithDtlEnv, NoConfigRun)
     */
    type?: string;
};

