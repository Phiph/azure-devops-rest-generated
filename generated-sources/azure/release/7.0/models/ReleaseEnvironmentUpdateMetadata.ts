/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
export type ReleaseEnvironmentUpdateMetadata = {
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets scheduled deployment time.
     */
    scheduledDeploymentTime?: string;
    /**
     * Gets or sets status of environment.
     */
    status?: 'undefined' | 'notStarted' | 'inProgress' | 'succeeded' | 'canceled' | 'rejected' | 'queued' | 'scheduled' | 'partiallySucceeded';
    /**
     * Sets list of environment variables to be overridden at deployment time.
     */
    variables?: Record<string, ConfigurationVariableValue>;
};

