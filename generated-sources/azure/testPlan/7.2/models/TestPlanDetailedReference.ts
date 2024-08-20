/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestPlanReference } from './TestPlanReference';
/**
 * The test plan detailed reference resource. Contains additional workitem realted information
 */
export type TestPlanDetailedReference = (TestPlanReference & {
    /**
     * Area of the test plan.
     */
    areaPath?: string;
    /**
     * End date for the test plan.
     */
    endDate?: string;
    /**
     * Iteration path of the test plan.
     */
    iteration?: string;
    /**
     * Root Suite Id
     */
    rootSuiteId?: number;
    /**
     * Start date for the test plan.
     */
    startDate?: string;
});

