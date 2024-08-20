/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildOptionDefinitionReference } from './BuildOptionDefinitionReference';
/**
 * Represents the application of an optional behavior to a build definition.
 */
export type BuildOption = {
    /**
     * A reference to the build option.
     */
    definition?: BuildOptionDefinitionReference;
    /**
     * Indicates whether the behavior is enabled.
     */
    enabled?: boolean;
    inputs?: Record<string, string>;
};

