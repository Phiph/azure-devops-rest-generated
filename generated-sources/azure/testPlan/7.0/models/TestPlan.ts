/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestPlanUpdateParams } from './TestPlanUpdateParams';
import type { TestSuiteReference } from './TestSuiteReference';
/**
 * The test plan resource.
 */
export type TestPlan = (TestPlanUpdateParams & {
    /**
     * Relevant links
     */
    _links?: ReferenceLinks;
    /**
     * ID of the test plan.
     */
    id?: number;
    /**
     * Previous build Id associated with the test plan
     */
    previousBuildId?: number;
    /**
     * Project which contains the test plan.
     */
    project?: TeamProjectReference;
    /**
     * Root test suite of the test plan.
     */
    rootSuite?: TestSuiteReference;
    /**
     * Identity Reference for the last update of the test plan
     */
    updatedBy?: IdentityRef;
    /**
     * Updated date of the test plan
     */
    updatedDate?: string;
});

