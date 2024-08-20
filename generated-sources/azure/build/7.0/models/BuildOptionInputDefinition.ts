/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an input for a build option.
 */
export type BuildOptionInputDefinition = {
    /**
     * The default value.
     */
    defaultValue?: string;
    /**
     * The name of the input group that this input belongs to.
     */
    groupName?: string;
    help?: Record<string, string>;
    /**
     * The label for the input.
     */
    label?: string;
    /**
     * The name of the input.
     */
    name?: string;
    options?: Record<string, string>;
    /**
     * Indicates whether the input is required to have a value.
     */
    required?: boolean;
    /**
     * Indicates the type of the input value.
     */
    type?: 'string' | 'boolean' | 'stringList' | 'radio' | 'pickList' | 'multiLine' | 'branchFilter';
    /**
     * The rule that is applied to determine whether the input is visible in the UI.
     */
    visibleRule?: string;
};

