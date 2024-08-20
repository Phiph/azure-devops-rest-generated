/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildTrigger } from './BuildTrigger';
import type { DefinitionReference } from './DefinitionReference';
/**
 * Represents a build completion trigger.
 */
export type BuildCompletionTrigger = (BuildTrigger & {
    branchFilters?: Array<string>;
    /**
     * A reference to the definition that should trigger builds for this definition.
     */
    definition?: DefinitionReference;
    requiresSuccessfulBuild?: boolean;
});

