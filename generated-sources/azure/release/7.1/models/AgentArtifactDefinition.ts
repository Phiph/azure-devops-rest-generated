/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AgentArtifactDefinition = {
    /**
     * Gets or sets the artifact definition alias.
     */
    alias?: string;
    /**
     * Gets or sets the artifact type.
     */
    artifactType?: 'xamlBuild' | 'build' | 'jenkins' | 'fileShare' | 'nuget' | 'tfsOnPrem' | 'gitHub' | 'tfGit' | 'externalTfsBuild' | 'custom' | 'tfvc';
    /**
     * Gets or sets the artifact definition details.
     */
    details?: string;
    /**
     * Gets or sets the name of artifact definition.
     */
    name?: string;
    /**
     * Gets or sets the version of artifact definition.
     */
    version?: string;
};

