/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Mapping for a workspace
 */
export type WorkspaceMapping = {
    /**
     * Uri of the associated definition
     */
    definitionUri?: string;
    /**
     * Depth of this mapping
     */
    depth?: number;
    /**
     * local location of the definition
     */
    localItem?: string;
    /**
     * type of workspace mapping
     */
    mappingType?: 'map' | 'cloak';
    /**
     * Server location of the definition
     */
    serverItem?: string;
    /**
     * Id of the workspace
     */
    workspaceId?: number;
};

