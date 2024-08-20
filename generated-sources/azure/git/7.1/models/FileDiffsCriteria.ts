/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDiffParams } from './FileDiffParams';
/**
 * Provides properties that describe inputs for the file diffs
 */
export type FileDiffsCriteria = {
    /**
     * Commit ID of the base version
     */
    baseVersionCommit?: string;
    /**
     * List of parameters for each of the files for which we need to get the file diff
     */
    fileDiffParams?: Array<FileDiffParams>;
    /**
     * Commit ID of the target version
     */
    targetVersionCommit?: string;
};

