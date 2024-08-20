/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes the scope a favorited Artifact resides in. e.g. A team project.
 */
export type ArtifactScope = {
    /**
     * The identifier of the scope the artifact resides in. For a TFS Project, this refers to the Project GUID string. For a Collection, marked this property with an empty string.
     */
    id?: string;
    /**
     * Name of the artifact scope (e.g. Project Name)  Note: This property is a read-only extension over the stored favorite model. This value cannot be overridden on writes.
     */
    name?: string;
    /**
     * Type of scope the favorite artifact resides in. Known scopes include "Project" or "Collection"
     */
    type?: string;
};

