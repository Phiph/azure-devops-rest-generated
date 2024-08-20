/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildOptionDefinitionReference } from './BuildOptionDefinitionReference';
import type { BuildOptionGroupDefinition } from './BuildOptionGroupDefinition';
import type { BuildOptionInputDefinition } from './BuildOptionInputDefinition';
/**
 * Represents an optional behavior that can be applied to a build definition.
 */
export type BuildOptionDefinition = (BuildOptionDefinitionReference & {
    /**
     * The description.
     */
    description?: string;
    /**
     * The list of input groups defined for the build option.
     */
    groups?: Array<BuildOptionGroupDefinition>;
    /**
     * The list of inputs defined for the build option.
     */
    inputs?: Array<BuildOptionInputDefinition>;
    /**
     * The name of the build option.
     */
    name?: string;
    /**
     * A value that indicates the relative order in which the behavior should be applied.
     */
    ordinal?: number;
});

