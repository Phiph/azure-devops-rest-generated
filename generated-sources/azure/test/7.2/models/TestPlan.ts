/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseEnvironmentDefinitionReference } from './ReleaseEnvironmentDefinitionReference';
import type { ShallowReference } from './ShallowReference';
import type { TestOutcomeSettings } from './TestOutcomeSettings';
/**
 * The test plan resource.
 */
export type TestPlan = {
    /**
     * Area of the test plan.
     */
    area?: ShallowReference;
    /**
     * Build to be tested.
     */
    build?: ShallowReference;
    /**
     * The Build Definition that generates a build associated with this test plan.
     */
    buildDefinition?: ShallowReference;
    /**
     * Description of the test plan.
     */
    description?: string;
    /**
     * End date for the test plan.
     */
    endDate?: string;
    /**
     * ID of the test plan.
     */
    id?: number;
    /**
     * Iteration path of the test plan.
     */
    iteration?: string;
    /**
     * Name of the test plan.
     */
    name?: string;
    /**
     * Owner of the test plan.
     */
    owner?: IdentityRef;
    previousBuild?: ShallowReference;
    /**
     * Project which contains the test plan.
     */
    project?: ShallowReference;
    /**
     * Release Environment to be used to deploy the build and run automated tests from this test plan.
     */
    releaseEnvironmentDefinition?: ReleaseEnvironmentDefinitionReference;
    /**
     * Revision of the test plan.
     */
    revision?: number;
    /**
     * Root test suite of the test plan.
     */
    rootSuite?: ShallowReference;
    /**
     * Start date for the test plan.
     */
    startDate?: string;
    /**
     * State of the test plan.
     */
    state?: string;
    /**
     * Value to configure how same tests across test suites under a test plan need to behave
     */
    testOutcomeSettings?: TestOutcomeSettings;
    updatedBy?: IdentityRef;
    updatedDate?: string;
    /**
     * URL of the test plan resource.
     */
    url?: string;
};

