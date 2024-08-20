/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a variable used by a build definition.
 */
export type BuildDefinitionVariable = {
    /**
     * Indicates whether the value can be set at queue time.
     */
    allowOverride?: boolean;
    /**
     * Indicates whether the variable's value is a secret.
     */
    isSecret?: boolean;
    /**
     * The value of the variable.
     */
    value?: string;
};

