/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectReference } from './ProjectReference';
/**
 * Process.
 */
export type ProcessInfo = {
    /**
     * Indicates the type of customization on this process. System Process is default process. Inherited Process is modified process that was System process before.
     */
    customizationType?: 'system' | 'inherited' | 'custom';
    /**
     * Description of the process.
     */
    description?: string;
    /**
     * Is the process default.
     */
    isDefault?: boolean;
    /**
     * Is the process enabled.
     */
    isEnabled?: boolean;
    /**
     * Name of the process.
     */
    name?: string;
    /**
     * ID of the parent process.
     */
    parentProcessTypeId?: string;
    /**
     * Projects in this process to which the user is subscribed to.
     */
    projects?: Array<ProjectReference>;
    /**
     * Reference name of the process.
     */
    referenceName?: string;
    /**
     * The ID of the process.
     */
    typeId?: string;
};

