/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactMetadata } from './ArtifactMetadata';
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReleaseStartEnvironmentMetadata } from './ReleaseStartEnvironmentMetadata';
export type ReleaseStartMetadata = {
    /**
     * Sets list of artifact to create a release.
     */
    artifacts?: Array<ArtifactMetadata>;
    /**
     * Sets definition Id to create a release.
     */
    definitionId?: number;
    /**
     * Sets description to create a release.
     */
    description?: string;
    /**
     * Sets list of environments meta data.
     */
    environmentsMetadata?: Array<ReleaseStartEnvironmentMetadata>;
    /**
     * Sets 'true' to create release in draft mode, 'false' otherwise.
     */
    isDraft?: boolean;
    /**
     * Sets list of environments to manual as condition.
     */
    manualEnvironments?: Array<string>;
    properties?: PropertiesCollection;
    /**
     * Sets reason to create a release.
     */
    reason?: 'none' | 'manual' | 'continuousIntegration' | 'schedule' | 'pullRequest';
    /**
     * Sets list of release variables to be overridden at deployment time.
     */
    variables?: Record<string, ConfigurationVariableValue>;
};

