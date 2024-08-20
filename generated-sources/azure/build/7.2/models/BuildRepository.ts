/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a repository used by a build definition.
 */
export type BuildRepository = {
    /**
     * Indicates whether to checkout submodules.
     */
    checkoutSubmodules?: boolean;
    /**
     * Indicates whether to clean the target folder when getting code from the repository.
     */
    clean?: string;
    /**
     * The name of the default branch.
     */
    defaultBranch?: string;
    /**
     * The ID of the repository.
     */
    id?: string;
    /**
     * The friendly name of the repository.
     */
    name?: string;
    properties?: Record<string, string>;
    /**
     * The root folder.
     */
    rootFolder?: string;
    /**
     * The type of the repository.
     */
    type?: string;
    /**
     * The URL of the repository.
     */
    url?: string;
};

