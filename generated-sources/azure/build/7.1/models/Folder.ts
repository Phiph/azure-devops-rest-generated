/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { TeamProjectReference } from './TeamProjectReference';
/**
 * Represents a folder that contains build definitions.
 */
export type Folder = {
    /**
     * The process or person who created the folder.
     */
    createdBy?: IdentityRef;
    /**
     * The date the folder was created.
     */
    createdOn?: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The process or person that last changed the folder.
     */
    lastChangedBy?: IdentityRef;
    /**
     * The date the folder was last changed.
     */
    lastChangedDate?: string;
    /**
     * The full path.
     */
    path?: string;
    /**
     * The project.
     */
    project?: TeamProjectReference;
};

