/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployPhase } from './DeployPhase';
import type { MachineGroupDeploymentInput } from './MachineGroupDeploymentInput';
export type MachineGroupBasedDeployPhase = (DeployPhase & {
    /**
     * Gets and sets the deployment group job input
     */
    deploymentInput?: MachineGroupDeploymentInput;
});

