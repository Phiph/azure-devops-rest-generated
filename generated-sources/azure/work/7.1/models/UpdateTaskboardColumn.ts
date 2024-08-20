/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskboardColumnMapping } from './TaskboardColumnMapping';
export type UpdateTaskboardColumn = {
    /**
     * Column ID, keep it null for new column
     */
    id?: string;
    /**
     * Work item type states mapped to this column to support auto state update when column is updated.
     */
    mappings?: Array<TaskboardColumnMapping>;
    /**
     * Column name is required
     */
    name?: string;
    /**
     * Column position relative to other columns in the same board
     */
    order?: number;
};

