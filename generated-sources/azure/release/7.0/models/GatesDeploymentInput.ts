/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseDeploymentInput } from './BaseDeploymentInput';
export type GatesDeploymentInput = (BaseDeploymentInput & {
    /**
     * Gates minimum success duration.
     */
    minimumSuccessDuration?: number;
    /**
     * Gates sampling interval.
     */
    samplingInterval?: number;
    /**
     * Gates stabilization time.
     */
    stabilizationTime?: number;
});

