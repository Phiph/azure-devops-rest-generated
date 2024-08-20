/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Condition } from './Condition';
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
import type { Demand } from './Demand';
import type { DeployPhase } from './DeployPhase';
import type { EnvironmentExecutionPolicy } from './EnvironmentExecutionPolicy';
import type { EnvironmentOptions } from './EnvironmentOptions';
import type { EnvironmentRetentionPolicy } from './EnvironmentRetentionPolicy';
import type { EnvironmentTrigger } from './EnvironmentTrigger';
import type { IdentityRef } from './IdentityRef';
import type { ProcessParameters } from './ProcessParameters';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReleaseDefinitionApprovals } from './ReleaseDefinitionApprovals';
import type { ReleaseDefinitionDeployStep } from './ReleaseDefinitionDeployStep';
import type { ReleaseDefinitionGatesStep } from './ReleaseDefinitionGatesStep';
import type { ReleaseSchedule } from './ReleaseSchedule';
import type { ReleaseShallowReference } from './ReleaseShallowReference';
export type ReleaseDefinitionEnvironment = {
    /**
     * Gets or sets the BadgeUrl. BadgeUrl will be used when Badge will be enabled in Release Definition Environment.
     */
    badgeUrl?: string;
    /**
     * Gets or sets the environment conditions.
     */
    conditions?: Array<Condition>;
    /**
     * Gets or sets the current release reference.
     */
    currentRelease?: ReleaseShallowReference;
    /**
     * Gets or sets the demands.
     */
    demands?: Array<Demand>;
    /**
     * Gets or sets the deploy phases of environment.
     */
    deployPhases?: Array<DeployPhase>;
    /**
     * Gets or sets the deploystep.
     */
    deployStep?: ReleaseDefinitionDeployStep;
    /**
     * Gets or sets the environment options.
     */
    environmentOptions?: EnvironmentOptions;
    /**
     * Gets or sets the triggers on environment.
     */
    environmentTriggers?: Array<EnvironmentTrigger>;
    /**
     * Gets or sets the environment execution policy.
     */
    executionPolicy?: EnvironmentExecutionPolicy;
    /**
     * Gets and sets the ID of the ReleaseDefinitionEnvironment.
     */
    id?: number;
    /**
     * Gets and sets the name of the ReleaseDefinitionEnvironment.
     */
    name?: string;
    /**
     * Gets and sets the Owner of the ReleaseDefinitionEnvironment.
     */
    owner?: IdentityRef;
    /**
     * Gets or sets the post deployment approvals.
     */
    postDeployApprovals?: ReleaseDefinitionApprovals;
    /**
     * Gets or sets the post deployment gates.
     */
    postDeploymentGates?: ReleaseDefinitionGatesStep;
    /**
     * Gets or sets the pre deployment approvals.
     */
    preDeployApprovals?: ReleaseDefinitionApprovals;
    /**
     * Gets or sets the pre deployment gates.
     */
    preDeploymentGates?: ReleaseDefinitionGatesStep;
    /**
     * Gets or sets the environment process parameters.
     */
    processParameters?: ProcessParameters;
    /**
     * Gets or sets the properties on environment.
     */
    properties?: PropertiesCollection;
    /**
     * Gets or sets the queue ID.
     */
    queueId?: number;
    /**
     * Gets and sets the rank of the ReleaseDefinitionEnvironment.
     */
    rank?: number;
    /**
     * Gets or sets the environment retention policy.
     */
    retentionPolicy?: EnvironmentRetentionPolicy;
    /**
     * Gets or sets the schedules
     */
    schedules?: Array<ReleaseSchedule>;
    /**
     * Gets or sets the variable groups.
     */
    variableGroups?: Array<number>;
    /**
     * Gets and sets the variables.
     */
    variables?: Record<string, ConfigurationVariableValue>;
};

