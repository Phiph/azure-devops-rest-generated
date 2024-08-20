/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinition } from './BuildDefinition';
/**
 * Represents a template from which new build definitions can be created.
 */
export type BuildDefinitionTemplate = {
    /**
     * Indicates whether the template can be deleted.
     */
    canDelete?: boolean;
    /**
     * The template category.
     */
    category?: string;
    /**
     * An optional hosted agent queue for the template to use by default.
     */
    defaultHostedQueue?: string;
    /**
     * A description of the template.
     */
    description?: string;
    icons?: Record<string, string>;
    /**
     * The ID of the task whose icon is used when showing this template in the UI.
     */
    iconTaskId?: string;
    /**
     * The ID of the template.
     */
    id?: string;
    /**
     * The name of the template.
     */
    name?: string;
    /**
     * The actual template.
     */
    template?: BuildDefinition;
};

