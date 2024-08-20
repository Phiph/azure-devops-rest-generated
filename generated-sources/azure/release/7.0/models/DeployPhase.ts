/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowTask } from './WorkflowTask';
export type DeployPhase = {
    /**
     * Gets and sets the name of deploy phase.
     */
    name?: string;
    /**
     * Indicates the deploy phase type.
     */
    phaseType?: 'undefined' | 'agentBasedDeployment' | 'runOnServer' | 'machineGroupBasedDeployment' | 'deploymentGates';
    /**
     * Gets and sets the rank of deploy phase.
     */
    rank?: number;
    /**
     * Gets and sets the reference name of deploy phase.
     */
    refName?: string;
    /**
     * Gets and sets the workflow tasks for the deploy phase.
     */
    workflowTasks?: Array<WorkflowTask>;
};

