/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildTrigger } from './BuildTrigger';
/**
 * Represents a gated check-in trigger.
 */
export type GatedCheckInTrigger = (BuildTrigger & {
    pathFilters?: Array<string>;
    /**
     * Indicates whether CI triggers should run after the gated check-in succeeds.
     */
    runContinuousIntegration?: boolean;
    /**
     * Indicates whether to take workspace mappings into account when determining whether a build should run.
     */
    useWorkspaceMappings?: boolean;
});

