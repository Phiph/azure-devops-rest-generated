/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseEnvironmentDefinitionReference } from './ReleaseEnvironmentDefinitionReference';
import type { ShallowReference } from './ShallowReference';
import type { TestOutcomeSettings } from './TestOutcomeSettings';
/**
 * A model class used for creating and updating test plans.
 */
export type PlanUpdateModel = {
    /**
     * Area path to which the test plan belongs. This should be set to area path of the team that works on this test plan.
     */
    area?: ShallowReference;
    /**
     * Build ID of the build whose quality is tested by the tests in this test plan. For automated testing, this build ID is used to find the test binaries that contain automated test methods.
     */
    build?: ShallowReference;
    /**
     * The Build Definition that generates a build associated with this test plan.
     */
    buildDefinition?: ShallowReference;
    /**
     * IDs of configurations to be applied when new test suites and test cases are added to the test plan.
     */
    configurationIds?: Array<number>;
    /**
     * Description of the test plan.
     */
    description?: string;
    /**
     * End date for the test plan.
     */
    endDate?: string;
    /**
     * Iteration path assigned to the test plan. This indicates when the target iteration by which the testing in this plan is supposed to be complete and the product is ready to be released.
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
     * Test Outcome settings
     */
    testOutcomeSettings?: TestOutcomeSettings;
};

