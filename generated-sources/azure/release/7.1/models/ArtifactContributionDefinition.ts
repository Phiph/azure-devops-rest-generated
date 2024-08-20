/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactTriggerConfiguration } from './ArtifactTriggerConfiguration';
import type { DataSourceBinding } from './DataSourceBinding';
import type { InputDescriptor } from './InputDescriptor';
export type ArtifactContributionDefinition = {
    artifactTriggerConfiguration?: ArtifactTriggerConfiguration;
    artifactType?: string;
    artifactTypeStreamMapping?: Record<string, string>;
    browsableArtifactTypeMapping?: Record<string, string>;
    dataSourceBindings?: Array<DataSourceBinding>;
    displayName?: string;
    downloadTaskId?: string;
    endpointTypeId?: string;
    inputDescriptors?: Array<InputDescriptor>;
    isCommitsTraceabilitySupported?: boolean;
    isWorkitemsTraceabilitySupported?: boolean;
    name?: string;
    taskInputMapping?: Record<string, string>;
    uniqueSourceIdentifier?: string;
};

