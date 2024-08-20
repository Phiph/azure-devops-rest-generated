/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentRetentionPolicy } from './EnvironmentRetentionPolicy';
export type RetentionSettings = {
    /**
     * Number of days to keep deleted releases.
     */
    daysToKeepDeletedReleases?: number;
    /**
     * Specifies the default environment retention policy.
     */
    defaultEnvironmentRetentionPolicy?: EnvironmentRetentionPolicy;
    /**
     * Specifies the maximum environment retention policy.
     */
    maximumEnvironmentRetentionPolicy?: EnvironmentRetentionPolicy;
};

