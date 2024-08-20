/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LineBlockCoverage } from './LineBlockCoverage';
export type FileCoverage = {
    /**
     * List of line blocks along with their coverage status
     */
    lineBlocksCoverage?: Array<LineBlockCoverage>;
    /**
     * File path for which coverage information is sought for
     */
    path?: string;
};

