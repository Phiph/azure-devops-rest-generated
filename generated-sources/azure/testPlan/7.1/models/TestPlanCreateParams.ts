/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinitionReference } from './BuildDefinitionReference';
import type { IdentityRef } from './IdentityRef';
import type { ReleaseEnvironmentDefinitionReference } from './ReleaseEnvironmentDefinitionReference';
import type { TestOutcomeSettings } from './TestOutcomeSettings';
/**
 * The test plan create parameters.
 */
export type TestPlanCreateParams = {
    /**
     * Area of the test plan.
     */
    areaPath?: string;
    /**
     * The Build Definition that generates a build associated with this test plan.
     */
    buildDefinition?: BuildDefinitionReference;
    /**
     * Build to be tested.
     */
    buildId?: number;
    /**
     * Description of the test plan.
     */
    description?: string;
    /**
     * End date for the test plan.
     */
    endDate?: string;
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
    /**
     * Release Environment to be used to deploy the build and run automated tests from this test plan.
     */
    releaseEnvironmentDefinition?: ReleaseEnvironmentDefinitionReference;
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
};

