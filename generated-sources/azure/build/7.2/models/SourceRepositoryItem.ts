/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an item in a repository from a source provider.
 */
export type SourceRepositoryItem = {
    /**
     * Whether the item is able to have sub-items (e.g., is a folder).
     */
    isContainer?: boolean;
    /**
     * The full path of the item, relative to the root of the repository.
     */
    path?: string;
    /**
     * The type of the item (folder, file, etc).
     */
    type?: string;
    /**
     * The URL of the item.
     */
    url?: string;
};

