/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ITaskboardColumnMapping } from './ITaskboardColumnMapping';
/**
 * Represents the taskbord column
 */
export type TaskboardColumn = {
    /**
     * Column ID
     */
    id?: string;
    /**
     * Work item type states mapped to this column to support auto state update when column is updated.
     */
    mappings?: Array<ITaskboardColumnMapping>;
    /**
     * Column name
     */
    name?: string;
    /**
     * Column position relative to other columns in the same board
     */
    order?: number;
};

