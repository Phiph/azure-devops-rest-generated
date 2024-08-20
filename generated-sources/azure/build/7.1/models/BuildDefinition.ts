/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinitionReference } from './BuildDefinitionReference';
import type { BuildDefinitionVariable } from './BuildDefinitionVariable';
import type { BuildOption } from './BuildOption';
import type { BuildProcess } from './BuildProcess';
import type { BuildRepository } from './BuildRepository';
import type { BuildTrigger } from './BuildTrigger';
import type { Demand } from './Demand';
import type { ProcessParameters } from './ProcessParameters';
import type { PropertiesCollection } from './PropertiesCollection';
import type { RetentionPolicy } from './RetentionPolicy';
import type { VariableGroup } from './VariableGroup';
/**
 * Represents a build definition.
 */
export type BuildDefinition = (BuildDefinitionReference & {
    /**
     * Indicates whether badges are enabled for this definition.
     */
    badgeEnabled?: boolean;
    /**
     * The build number format.
     */
    buildNumberFormat?: string;
    /**
     * A save-time comment for the definition.
     */
    comment?: string;
    demands?: Array<Demand>;
    /**
     * The description.
     */
    description?: string;
    /**
     * The drop location for the definition.
     */
    dropLocation?: string;
    /**
     * The job authorization scope for builds queued against this definition.
     */
    jobAuthorizationScope?: 'projectCollection' | 'project';
    /**
     * The job cancel timeout (in minutes) for builds cancelled by user for this definition.
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * The job execution timeout (in minutes) for builds queued against this definition.
     */
    jobTimeoutInMinutes?: number;
    options?: Array<BuildOption>;
    /**
     * The build process.
     */
    process?: BuildProcess;
    /**
     * The process parameters for this definition.
     */
    processParameters?: ProcessParameters;
    properties?: PropertiesCollection;
    /**
     * The repository.
     */
    repository?: BuildRepository;
    retentionRules?: Array<RetentionPolicy>;
    tags?: Array<string>;
    triggers?: Array<BuildTrigger>;
    variableGroups?: Array<VariableGroup>;
    variables?: Record<string, BuildDefinitionVariable>;
});

