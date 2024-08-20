/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinitionVariable } from './BuildDefinitionVariable';
import type { VariableGroupReference } from './VariableGroupReference';
/**
 * Represents a variable group.
 */
export type VariableGroup = (VariableGroupReference & {
    /**
     * The description.
     */
    description?: string;
    /**
     * The name of the variable group.
     */
    name?: string;
    /**
     * The type of the variable group.
     */
    type?: string;
    variables?: Record<string, BuildDefinitionVariable>;
});

