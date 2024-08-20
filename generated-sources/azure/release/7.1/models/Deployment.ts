/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Condition } from './Condition';
import type { IdentityRef } from './IdentityRef';
import type { ProjectReference } from './ProjectReference';
import type { ReleaseApproval } from './ReleaseApproval';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
import type { ReleaseEnvironmentShallowReference } from './ReleaseEnvironmentShallowReference';
import type { ReleaseReference } from './ReleaseReference';
export type Deployment = {
    /**
     * Gets attempt number.
     */
    attempt?: number;
    /**
     * Gets the date on which deployment is complete.
     */
    completedOn?: string;
    /**
     * Gets the list of condition associated with deployment.
     */
    conditions?: Array<Condition>;
    /**
     * Gets release definition environment id.
     */
    definitionEnvironmentId?: number;
    /**
     * Gets status of the deployment.
     */
    deploymentStatus?: 'undefined' | 'notDeployed' | 'inProgress' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'all';
    /**
     * Gets the unique identifier for deployment.
     */
    id?: number;
    /**
     * Gets the identity who last modified the deployment.
     */
    lastModifiedBy?: IdentityRef;
    /**
     * Gets the date on which deployment is last modified.
     */
    lastModifiedOn?: string;
    /**
     * Gets operation status of deployment.
     */
    operationStatus?: 'undefined' | 'queued' | 'scheduled' | 'pending' | 'approved' | 'rejected' | 'deferred' | 'queuedForAgent' | 'phaseInProgress' | 'phaseSucceeded' | 'phasePartiallySucceeded' | 'phaseFailed' | 'canceled' | 'phaseCanceled' | 'manualInterventionPending' | 'queuedForPipeline' | 'cancelling' | 'evaluatingGates' | 'gateFailed' | 'all';
    /**
     * Gets list of PostDeployApprovals.
     */
    postDeployApprovals?: Array<ReleaseApproval>;
    /**
     * Gets list of PreDeployApprovals.
     */
    preDeployApprovals?: Array<ReleaseApproval>;
    /**
     * Gets or sets project reference.
     */
    projectReference?: ProjectReference;
    /**
     * Gets the date on which deployment is queued.
     */
    queuedOn?: string;
    /**
     * Gets reason of deployment.
     */
    reason?: 'none' | 'manual' | 'automated' | 'scheduled' | 'redeployTrigger';
    /**
     * Gets the reference of release.
     */
    release?: ReleaseReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which the deployment is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which the deployment is associated.
     */
    releaseEnvironment?: ReleaseEnvironmentShallowReference;
    /**
     * Gets the identity who requested.
     */
    requestedBy?: IdentityRef;
    /**
     * Gets the identity for whom deployment is requested.
     */
    requestedFor?: IdentityRef;
    /**
     * Gets the date on which deployment is scheduled.
     */
    scheduledDeploymentTime?: string;
    /**
     * Gets the date on which deployment is started.
     */
    startedOn?: string;
};

