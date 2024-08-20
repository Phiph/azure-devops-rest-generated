/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ArtifactDownloadInputBase = {
    /**
     * Gets or sets the alias of artifact.
     */
    alias?: string;
    /**
     * Gets or sets the name of artifact definition. Valid values are 'Skip', 'Selective', 'All'.
     */
    artifactDownloadMode?: string;
    /**
     * Gets or sets the artifact items of the input.
     */
    artifactItems?: Array<string>;
    /**
     * Gets or sets the type of artifact.
     */
    artifactType?: string;
};

