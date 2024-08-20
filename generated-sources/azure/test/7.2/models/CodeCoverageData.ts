/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeCoverageStatistics } from './CodeCoverageStatistics';
/**
 * Represents the build configuration (platform, flavor) and coverage data for the build
 */
export type CodeCoverageData = {
    /**
     * Flavor of build for which data is retrieved/published
     */
    buildFlavor?: string;
    /**
     * Platform of build for which data is retrieved/published
     */
    buildPlatform?: string;
    /**
     * List of coverage data for the build
     */
    coverageStats?: Array<CodeCoverageStatistics>;
};

