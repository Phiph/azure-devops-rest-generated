/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneOptions } from './CloneOptions';
import type { DestinationTestPlanCloneParams } from './DestinationTestPlanCloneParams';
import type { SourceTestPlanInfo } from './SourceTestPlanInfo';
/**
 * Parameters for Test Plan clone operation
 */
export type CloneTestPlanParams = {
    /**
     * Test Plan Clone create parameters
     */
    cloneOptions?: CloneOptions;
    /**
     * Information about destination Test Plan
     */
    destinationTestPlan?: DestinationTestPlanCloneParams;
    /**
     * Information about source Test Plan
     */
    sourceTestPlan?: SourceTestPlanInfo;
};

