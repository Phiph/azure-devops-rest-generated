/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactResource } from './ArtifactResource';
/**
 * Represents an artifact produced by a build.
 */
export type BuildArtifact = {
    /**
     * The artifact ID.
     */
    id?: number;
    /**
     * The name of the artifact.
     */
    name?: string;
    /**
     * The actual resource.
     */
    resource?: ArtifactResource;
    /**
     * The artifact source, which will be the ID of the job that produced this artifact. If an artifact is associated with multiple sources, this points to the first source.
     */
    source?: string;
};

