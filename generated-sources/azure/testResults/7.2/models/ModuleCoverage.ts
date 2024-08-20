/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageStatistics } from './CoverageStatistics';
import type { FunctionCoverage } from './FunctionCoverage';
export type ModuleCoverage = {
    blockCount?: number;
    blockData?: Array<string>;
    /**
     * Code Coverage File Url
     */
    fileUrl?: string;
    functions?: Array<FunctionCoverage>;
    name?: string;
    signature?: string;
    signatureAge?: number;
    statistics?: CoverageStatistics;
};

