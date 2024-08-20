/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeCoverageData } from './CodeCoverageData';
import type { ShallowReference } from './ShallowReference';
/**
 * Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
 */
export type CodeCoverageSummary = {
    /**
     * Uri of build for which data is retrieved/published
     */
    build?: ShallowReference;
    /**
     * List of coverage data and details for the build
     */
    coverageData?: Array<CodeCoverageData>;
    coverageDetailedSummaryStatus?: 'none' | 'inProgress' | 'finalized' | 'pending' | 'updateRequestQueued' | 'noModulesFound' | 'numberOfFilesExceeded' | 'noInputFiles' | 'buildCancelled' | 'failedJobs' | 'moduleMergeJobTimeout' | 'codeCoverageSuccess' | 'invalidBuildConfiguration' | 'coverageAnalyzerBuildNotFound' | 'failedToRequeue' | 'buildBailedOut' | 'noCodeCoverageTask' | 'mergeJobFailed' | 'mergeInvokerJobFailed' | 'monitorJobFailed' | 'moduleMergeInvokerJobTimeout' | 'monitorJobTimeout' | 'invalidCoverageInput';
    /**
     * Uri of build against which difference in coverage is computed
     */
    deltaBuild?: ShallowReference;
    /**
     * Uri of build against which difference in coverage is computed
     */
    status?: 'none' | 'inProgress' | 'completed' | 'finalized' | 'pending' | 'updateRequestQueued';
};

