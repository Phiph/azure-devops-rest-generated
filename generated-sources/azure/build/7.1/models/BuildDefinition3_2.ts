/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Build } from './Build';
import type { BuildDefinitionReference3_2 } from './BuildDefinitionReference3_2';
import type { BuildDefinitionStep } from './BuildDefinitionStep';
import type { BuildDefinitionVariable } from './BuildDefinitionVariable';
import type { BuildOption } from './BuildOption';
import type { BuildRepository } from './BuildRepository';
import type { BuildTrigger } from './BuildTrigger';
import type { Demand } from './Demand';
import type { ProcessParameters } from './ProcessParameters';
import type { PropertiesCollection } from './PropertiesCollection';
import type { RetentionPolicy } from './RetentionPolicy';
/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export type BuildDefinition3_2 = (BuildDefinitionReference3_2 & {
    /**
     * Indicates whether badges are enabled for this definition
     */
    badgeEnabled?: boolean;
    build?: Array<BuildDefinitionStep>;
    /**
     * The build number format
     */
    buildNumberFormat?: string;
    /**
     * The comment entered when saving the definition
     */
    comment?: string;
    demands?: Array<Demand>;
    /**
     * The description
     */
    description?: string;
    /**
     * The drop location for the definition
     */
    dropLocation?: string;
    /**
     * The job authorization scope for builds which are queued against this definition
     */
    jobAuthorizationScope?: 'projectCollection' | 'project';
    /**
     * The job cancel timeout in minutes for builds which are cancelled by user for this definition
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * The job execution timeout in minutes for builds which are queued against this definition
     */
    jobTimeoutInMinutes?: number;
    latestBuild?: Build;
    latestCompletedBuild?: Build;
    options?: Array<BuildOption>;
    /**
     * Process Parameters
     */
    processParameters?: ProcessParameters;
    properties?: PropertiesCollection;
    /**
     * The repository
     */
    repository?: BuildRepository;
    retentionRules?: Array<RetentionPolicy>;
    tags?: Array<string>;
    triggers?: Array<BuildTrigger>;
    variables?: Record<string, BuildDefinitionVariable>;
});

