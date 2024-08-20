/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
import type { DeploymentAttempt } from './DeploymentAttempt';
import type { DeployPhase } from './DeployPhase';
import type { EnvironmentOptions } from './EnvironmentOptions';
import type { IdentityRef } from './IdentityRef';
import type { ProcessParameters } from './ProcessParameters';
import type { ReleaseApproval } from './ReleaseApproval';
import type { ReleaseCondition } from './ReleaseCondition';
import type { ReleaseDefinitionApprovals } from './ReleaseDefinitionApprovals';
import type { ReleaseDefinitionGatesStep } from './ReleaseDefinitionGatesStep';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
import type { ReleaseSchedule } from './ReleaseSchedule';
import type { ReleaseShallowReference } from './ReleaseShallowReference';
import type { VariableGroup } from './VariableGroup';
export type ReleaseEnvironment = {
    /**
     * Gets list of conditions.
     */
    conditions?: Array<ReleaseCondition>;
    /**
     * Gets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets definition environment id.
     */
    definitionEnvironmentId?: number;
    /**
     * Gets list of deploy phases snapshot.
     */
    deployPhasesSnapshot?: Array<DeployPhase>;
    /**
     * Gets deploy steps.
     */
    deploySteps?: Array<DeploymentAttempt>;
    /**
     * Gets environment options.
     */
    environmentOptions?: EnvironmentOptions;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets name.
     */
    name?: string;
    /**
     * Gets next scheduled UTC time.
     */
    nextScheduledUtcTime?: string;
    /**
     * Gets the identity who is owner for release environment.
     */
    owner?: IdentityRef;
    /**
     * Gets list of post deploy approvals snapshot.
     */
    postApprovalsSnapshot?: ReleaseDefinitionApprovals;
    /**
     * Gets list of post deploy approvals.
     */
    postDeployApprovals?: Array<ReleaseApproval>;
    /**
     * Post deployment gates snapshot data.
     */
    postDeploymentGatesSnapshot?: ReleaseDefinitionGatesStep;
    /**
     * Gets list of pre deploy approvals snapshot.
     */
    preApprovalsSnapshot?: ReleaseDefinitionApprovals;
    /**
     * Gets list of pre deploy approvals.
     */
    preDeployApprovals?: Array<ReleaseApproval>;
    /**
     * Pre deployment gates snapshot data.
     */
    preDeploymentGatesSnapshot?: ReleaseDefinitionGatesStep;
    /**
     * Gets process parameters.
     */
    processParameters?: ProcessParameters;
    /**
     * Gets rank.
     */
    rank?: number;
    /**
     * Gets release reference which specifies the reference of the release to which this release environment is associated.
     */
    release?: ReleaseShallowReference;
    /**
     * Gets the identity who created release.
     */
    releaseCreatedBy?: IdentityRef;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release environment is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets release id.
     */
    releaseId?: number;
    /**
     * Gets schedule deployment time of release environment.
     */
    scheduledDeploymentTime?: string;
    /**
     * Gets list of schedules.
     */
    schedules?: Array<ReleaseSchedule>;
    /**
     * Gets environment status.
     */
    status?: 'undefined' | 'notStarted' | 'inProgress' | 'succeeded' | 'canceled' | 'rejected' | 'queued' | 'scheduled' | 'partiallySucceeded';
    /**
     * Gets time to deploy.
     */
    timeToDeploy?: number;
    /**
     * Gets trigger reason.
     */
    triggerReason?: string;
    /**
     * Gets the list of variable groups.
     */
    variableGroups?: Array<VariableGroup>;
    /**
     * Gets the dictionary of variables.
     */
    variables?: Record<string, ConfigurationVariableValue>;
};

