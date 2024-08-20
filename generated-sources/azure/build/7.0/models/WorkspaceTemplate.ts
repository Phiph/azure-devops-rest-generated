/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkspaceMapping } from './WorkspaceMapping';
export type WorkspaceTemplate = {
    /**
     * Uri of the associated definition
     */
    definitionUri?: string;
    /**
     * The identity that last modified this template
     */
    lastModifiedBy?: string;
    /**
     * The last time this template was modified
     */
    lastModifiedDate?: string;
    /**
     * List of workspace mappings
     */
    mappings?: Array<WorkspaceMapping>;
    /**
     * Id of the workspace for this template
     */
    workspaceId?: number;
};

