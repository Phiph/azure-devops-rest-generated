/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildConfiguration } from './BuildConfiguration';
import type { ModuleCoverage } from './ModuleCoverage';
/**
 * Build Coverage Detail
 */
export type BuildCoverage = {
    /**
     * Code Coverage File Url
     */
    codeCoverageFileUrl?: string;
    /**
     * Build Configuration
     */
    configuration?: BuildConfiguration;
    /**
     * Last Error
     */
    lastError?: string;
    /**
     * List of Modules
     */
    modules?: Array<ModuleCoverage>;
    /**
     * State
     */
    state?: string;
};

