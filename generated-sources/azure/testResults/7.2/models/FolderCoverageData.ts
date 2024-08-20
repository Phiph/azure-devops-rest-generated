/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageStatistics } from './CoverageStatistics';
import type { FileCoverageData } from './FileCoverageData';
export type FolderCoverageData = {
    coverageStatistics?: CoverageStatistics;
    files?: Array<FileCoverageData>;
    folders?: Array<FolderCoverageData>;
    name?: string;
};

