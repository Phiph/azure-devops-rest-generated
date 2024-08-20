/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentJob } from './DeploymentJob';
import type { ManualIntervention } from './ManualIntervention';
export type ReleaseDeployPhase = {
    /**
     * Deployment jobs of the phase.
     */
    deploymentJobs?: Array<DeploymentJob>;
    /**
     * Phase execution error logs.
     */
    errorLog?: string;
    /**
     * List of manual intervention tasks execution information in phase.
     */
    manualInterventions?: Array<ManualIntervention>;
    /**
     * Name of the phase.
     */
    name?: string;
    /**
     * ID of the phase.
     */
    phaseId?: string;
    /**
     * Type of the phase.
     */
    phaseType?: 'undefined' | 'agentBasedDeployment' | 'runOnServer' | 'machineGroupBasedDeployment' | 'deploymentGates';
    /**
     * Rank of the phase.
     */
    rank?: number;
    /**
     * Run Plan ID of the phase.
     */
    runPlanId?: string;
    /**
     * Phase start time.
     */
    startedOn?: string;
    /**
     * Status of the phase.
     */
    status?: 'undefined' | 'notStarted' | 'inProgress' | 'partiallySucceeded' | 'succeeded' | 'failed' | 'canceled' | 'skipped' | 'cancelling';
};

