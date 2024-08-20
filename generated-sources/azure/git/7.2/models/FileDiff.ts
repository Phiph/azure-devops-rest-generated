/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LineDiffBlock } from './LineDiffBlock';
/**
 * Provides properties that describe file differences
 */
export type FileDiff = {
    /**
     * The collection of line diff blocks
     */
    lineDiffBlocks?: Array<LineDiffBlock>;
    /**
     * Original path of item if different from current path.
     */
    originalPath?: string;
    /**
     * Current path of item
     */
    path?: string;
};

