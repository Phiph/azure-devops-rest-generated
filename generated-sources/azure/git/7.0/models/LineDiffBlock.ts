/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The class to represent the line diff block
 */
export type LineDiffBlock = {
    /**
     * Type of change that was made to the block.
     */
    changeType?: 'none' | 'add' | 'delete' | 'edit';
    /**
     * Line number where this block starts in modified file.
     */
    modifiedLineNumberStart?: number;
    /**
     * Count of lines in this block in modified file.
     */
    modifiedLinesCount?: number;
    /**
     * Line number where this block starts in original file.
     */
    originalLineNumberStart?: number;
    /**
     * Count of lines in this block in original file.
     */
    originalLinesCount?: number;
};

