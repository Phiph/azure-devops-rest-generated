/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactTriggerConfiguration } from './ArtifactTriggerConfiguration';
import type { InputDescriptor } from './InputDescriptor';
export type ArtifactTypeDefinition = {
    /**
     * Gets or sets the artifact trigger configuration of artifact type definition.
     */
    artifactTriggerConfiguration?: ArtifactTriggerConfiguration;
    /**
     * Gets or sets the artifact type of artifact type definition. Valid values are 'Build', 'Package', 'Source' or 'ContainerImage'.
     */
    artifactType?: string;
    /**
     * Gets or sets the display name of artifact type definition.
     */
    displayName?: string;
    /**
     * Gets or sets the endpoint type id of artifact type definition.
     */
    endpointTypeId?: string;
    /**
     * Gets or sets the input descriptors of artifact type definition.
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets or sets the is commits tracebility supported value of artifact type defintion.
     */
    isCommitsTraceabilitySupported?: boolean;
    /**
     * Gets or sets the is workitems tracebility supported value of artifact type defintion.
     */
    isWorkitemsTraceabilitySupported?: boolean;
    /**
     * Gets or sets the name of artifact type definition.
     */
    name?: string;
    /**
     * Gets or sets the unique source identifier of artifact type definition.
     */
    uniqueSourceIdentifier?: string;
};

