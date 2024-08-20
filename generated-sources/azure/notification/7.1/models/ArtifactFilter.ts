/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseSubscriptionFilter } from './BaseSubscriptionFilter';
/**
 * Artifact filter options. Used in "follow" subscriptions.
 */
export type ArtifactFilter = (BaseSubscriptionFilter & {
    artifactId?: string;
    artifactType?: string;
    artifactUri?: string;
    type?: string;
});

