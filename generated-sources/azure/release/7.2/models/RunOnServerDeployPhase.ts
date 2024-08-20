/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployPhase } from './DeployPhase';
import type { ServerDeploymentInput } from './ServerDeploymentInput';
export type RunOnServerDeployPhase = (DeployPhase & {
    /**
     * Gets and sets the agentless job input.
     */
    deploymentInput?: ServerDeploymentInput;
});

