/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalEnvironment } from './ExternalEnvironment';
import type { ExternalPipeline } from './ExternalPipeline';
export type ExternalDeployment = {
    artifactId?: string;
    createdBy?: string;
    description?: string;
    displayName?: string;
    environment?: ExternalEnvironment;
    group?: string;
    pipeline?: ExternalPipeline;
    relatedWorkItemIds?: Array<number>;
    runId?: number;
    sequenceNumber?: number;
    status?: string;
    statusDate?: string;
    url?: string;
};

