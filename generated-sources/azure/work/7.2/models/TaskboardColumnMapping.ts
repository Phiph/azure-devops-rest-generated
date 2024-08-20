/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the state to column mapping per work item type This allows auto state update when the column changes
 */
export type TaskboardColumnMapping = {
    /**
     * State of the work item type mapped to the column
     */
    state?: string;
    /**
     * Work Item Type name who's state is mapped to the column
     */
    workItemType?: string;
};

