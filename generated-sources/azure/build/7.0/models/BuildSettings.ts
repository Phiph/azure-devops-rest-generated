/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetentionPolicy } from './RetentionPolicy';
/**
 * Represents system-wide build settings.
 */
export type BuildSettings = {
    /**
     * The number of days to keep records of deleted builds.
     */
    daysToKeepDeletedBuildsBeforeDestroy?: number;
    /**
     * The default retention policy.
     */
    defaultRetentionPolicy?: RetentionPolicy;
    /**
     * The maximum retention policy.
     */
    maximumRetentionPolicy?: RetentionPolicy;
};

