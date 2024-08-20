/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseDefinitionEnvironment } from './ReleaseDefinitionEnvironment';
export type ReleaseDefinitionEnvironmentTemplate = {
    /**
     * Indicates whether template can be deleted or not.
     */
    canDelete?: boolean;
    /**
     * Category of the ReleaseDefinition environment template.
     */
    category?: string;
    /**
     * Description of the ReleaseDefinition environment template.
     */
    description?: string;
    /**
     * ReleaseDefinition environment data which used to create this template.
     */
    environment?: ReleaseDefinitionEnvironment;
    /**
     * ID of the task which used to display icon used for this template.
     */
    iconTaskId?: string;
    /**
     * Icon uri of the template.
     */
    iconUri?: string;
    /**
     * ID of the ReleaseDefinition environment template.
     */
    id?: string;
    /**
     * Indicates whether template deleted or not.
     */
    isDeleted?: boolean;
    /**
     * Name of the ReleaseDefinition environment template.
     */
    name?: string;
};

