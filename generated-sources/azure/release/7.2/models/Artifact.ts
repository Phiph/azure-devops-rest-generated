/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSourceReference } from './ArtifactSourceReference';
export type Artifact = {
    /**
     * Gets or sets alias.
     */
    alias?: string;
    /**
     * Gets or sets definition reference. e.g. {"project":{"id":"fed755ea-49c5-4399-acea-fd5b5aa90a6c","name":"myProject"},"definition":{"id":"1","name":"mybuildDefinition"},"connection":{"id":"1","name":"myConnection"}}.
     */
    definitionReference?: Record<string, ArtifactSourceReference>;
    /**
     * Indicates whether artifact is primary or not.
     */
    isPrimary?: boolean;
    /**
     * Indicates whether artifact is retained by release or not.
     */
    isRetained?: boolean;
    /**
     * Gets or sets type. It can have value as 'Build', 'Jenkins', 'GitHub', 'Nuget', 'Team Build (external)', 'ExternalTFSBuild', 'Git', 'TFVC', 'ExternalTfsXamlBuild'.
     */
    type?: string;
};

