/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectReference } from './ProjectReference';
import type { ReferenceLinks } from './ReferenceLinks';
export type ReleaseDefinitionShallowReference = {
    /**
     * Gets the links to related resources, APIs, and views for the release definition.
     */
    _links?: ReferenceLinks;
    /**
     * Gets the unique identifier of release definition.
     */
    id?: number;
    /**
     * Gets or sets the name of the release definition.
     */
    name?: string;
    /**
     * Gets or sets the path of the release definition.
     */
    path?: string;
    /**
     * Gets or sets project reference.
     */
    projectReference?: ProjectReference;
    /**
     * Gets the REST API url to access the release definition.
     */
    url?: string;
};

