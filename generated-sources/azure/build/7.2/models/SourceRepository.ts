/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a repository returned from a source provider.
 */
export type SourceRepository = {
    /**
     * The name of the default branch.
     */
    defaultBranch?: string;
    /**
     * The full name of the repository.
     */
    fullName?: string;
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
     * The name of the source provider the repository is from.
     */
    sourceProviderName?: string;
    /**
     * The URL of the repository.
     */
    url?: string;
};

