/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { Issue } from './Issue';
import type { ReleaseDeployPhase } from './ReleaseDeployPhase';
import type { ReleaseGates } from './ReleaseGates';
export type DeploymentAttempt = {
    /**
     * Deployment attempt.
     */
    attempt?: number;
    /**
     * ID of the deployment.
     */
    deploymentId?: number;
    /**
     * Specifies whether deployment has started or not.
     */
    hasStarted?: boolean;
    /**
     * ID of deployment.
     */
    id?: number;
    /**
     * All the issues related to the deployment.
     */
    issues?: Array<Issue>;
    /**
     * Identity who last modified this deployment.
     */
    lastModifiedBy?: IdentityRef;
    /**
     * Time when this deployment last modified.
     */
    lastModifiedOn?: string;
    /**
     * Deployment operation status.
     */
    operationStatus?: 'undefined' | 'queued' | 'scheduled' | 'pending' | 'approved' | 'rejected' | 'deferred' | 'queuedForAgent' | 'phaseInProgress' | 'phaseSucceeded' | 'phasePartiallySucceeded' | 'phaseFailed' | 'canceled' | 'phaseCanceled' | 'manualInterventionPending' | 'queuedForPipeline' | 'cancelling' | 'evaluatingGates' | 'gateFailed' | 'all';
    /**
     * Post deployment gates that executed in this deployment.
     */
    postDeploymentGates?: ReleaseGates;
    /**
     * Pre deployment gates that executed in this deployment.
     */
    preDeploymentGates?: ReleaseGates;
    /**
     * When this deployment queued on.
     */
    queuedOn?: string;
    /**
     * Reason for the deployment.
     */
    reason?: 'none' | 'manual' | 'automated' | 'scheduled' | 'redeployTrigger';
    /**
     * List of release deployphases executed in this deployment.
     */
    releaseDeployPhases?: Array<ReleaseDeployPhase>;
    /**
     * Identity who requested this deployment.
     */
    requestedBy?: IdentityRef;
    /**
     * Identity for this deployment requested.
     */
    requestedFor?: IdentityRef;
    /**
     * status of the deployment.
     */
    status?: 'undefined' | 'notDeployed' | 'inProgress' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'all';
};

