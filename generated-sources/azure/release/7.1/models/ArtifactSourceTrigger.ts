/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactFilter } from './ArtifactFilter';
import type { ReleaseTriggerBase } from './ReleaseTriggerBase';
export type ArtifactSourceTrigger = (ReleaseTriggerBase & {
    /**
     * Artifact source alias for Artifact Source trigger type
     */
    artifactAlias?: string;
    triggerConditions?: Array<ArtifactFilter>;
});

