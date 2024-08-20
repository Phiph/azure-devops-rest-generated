/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
export type ArtifactResource = {
    _links?: ReferenceLinks;
    /**
     * Type-specific data about the artifact.
     */
    data?: string;
    /**
     * A link to download the resource.
     */
    downloadUrl?: string;
    /**
     * Type-specific properties of the artifact.
     */
    properties?: Record<string, string>;
    /**
     * The type of the resource: File container, version control folder, UNC path, etc.
     */
    type?: string;
    /**
     * The full http link to the resource.
     */
    url?: string;
};

