/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
/**
 * Represents a reference to a definition.
 */
export type DefinitionReference = {
    /**
     * The date this version of the definition was created.
     */
    createdDate?: string;
    /**
     * The ID of the referenced definition.
     */
    id?: number;
    /**
     * The name of the referenced definition.
     */
    name?: string;
    /**
     * The folder path of the definition.
     */
    path?: string;
    /**
     * A reference to the project.
     */
    project?: TeamProjectReference;
    /**
     * A value that indicates whether builds can be queued against this definition.
     */
    queueStatus?: 'enabled' | 'paused' | 'disabled';
    /**
     * The definition revision number.
     */
    revision?: number;
    /**
     * The type of the definition.
     */
    type?: 'xaml' | 'build';
    /**
     * The definition's URI.
     */
    uri?: string;
    /**
     * The REST URL of the definition.
     */
    url?: string;
};

