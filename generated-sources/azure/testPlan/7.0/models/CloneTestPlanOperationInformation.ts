/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneOperationCommonResponse } from './CloneOperationCommonResponse';
import type { CloneOptions } from './CloneOptions';
import type { SourceTestplanResponse } from './SourceTestplanResponse';
import type { TestPlan } from './TestPlan';
/**
 * Response for Test Plan clone operation
 */
export type CloneTestPlanOperationInformation = {
    /**
     * Various information related to the clone
     */
    cloneOperationResponse?: CloneOperationCommonResponse;
    /**
     * Test Plan Clone create parameters
     */
    cloneOptions?: CloneOptions;
    /**
     * Information of destination Test Plan
     */
    destinationTestPlan?: TestPlan;
    /**
     * Information of source Test Plan
     */
    sourceTestPlan?: SourceTestplanResponse;
};

