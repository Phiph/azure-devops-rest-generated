/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefinitionEnvironmentReference } from './DefinitionEnvironmentReference';
export type DeploymentQueryParameters = {
    /**
     * Query deployments based specified artifact source id.
     */
    artifactSourceId?: string;
    /**
     * Query deployments based specified artifact type id.
     */
    artifactTypeId?: string;
    /**
     * Query deployments based specified artifact versions.
     */
    artifactVersions?: Array<string>;
    /**
     * Query deployments number of deployments per environment.
     */
    deploymentsPerEnvironment?: number;
    /**
     * Query deployment based on deployment status.
     */
    deploymentStatus?: 'undefined' | 'notDeployed' | 'inProgress' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'all';
    /**
     * Query deployments of specified environments.
     */
    environments?: Array<DefinitionEnvironmentReference>;
    /**
     * Query deployments based specified expands.
     */
    expands?: 'all' | 'deploymentOnly' | 'approvals' | 'artifacts';
    /**
     * Specify deleted deployments should return or not.
     */
    isDeleted?: boolean;
    /**
     * Query deployment based on deployment operation status.
     */
    operationStatus?: 'undefined' | 'queued' | 'scheduled' | 'pending' | 'approved' | 'rejected' | 'deferred' | 'queuedForAgent' | 'phaseInProgress' | 'phaseSucceeded' | 'phasePartiallySucceeded' | 'phaseFailed' | 'canceled' | 'phaseCanceled' | 'manualInterventionPending' | 'queuedForPipeline' | 'cancelling' | 'evaluatingGates' | 'gateFailed' | 'all';
    /**
     * Query deployments based query type.
     */
    queryType?: 'regular' | 'failingSince';
    /**
     * Query deployments based specified source branch.
     */
    sourceBranch?: string;
};

