/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectProperty } from './ProjectProperty';
/**
 * Contains information describing a project.
 */
export type ProjectInfo = {
    /**
     * The abbreviated name of the project.
     */
    abbreviation?: string;
    /**
     * The description of the project.
     */
    description?: string;
    /**
     * The id of the project.
     */
    id?: string;
    /**
     * The time that this project was last updated.
     */
    lastUpdateTime?: string;
    /**
     * The name of the project.
     */
    name?: string;
    /**
     * A set of name-value pairs storing additional property data related to the project.
     */
    properties?: Array<ProjectProperty>;
    /**
     * The current revision of the project.
     */
    revision?: number;
    /**
     * The current state of the project.
     */
    state?: 'deleting' | 'new' | 'wellFormed' | 'createPending' | 'all' | 'unchanged' | 'deleted';
    /**
     * A Uri that can be used to refer to this project.
     */
    uri?: string;
    /**
     * The version number of the project.
     */
    version?: number;
    /**
     * Indicates whom the project is visible to.
     */
    visibility?: 'private' | 'public';
};

