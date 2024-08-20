/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentInput } from './DeploymentInput';
export type MachineGroupDeploymentInput = (DeploymentInput & {
    /**
     * Deployment group health option.
     */
    deploymentHealthOption?: string;
    /**
     * Minimum percentage of the targets guaranteed to be healthy.
     */
    healthPercent?: number;
    /**
     * Deployment target tag filter.
     */
    tags?: Array<string>;
});

