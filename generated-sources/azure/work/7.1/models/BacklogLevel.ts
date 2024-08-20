/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contract representing a backlog level
 */
export type BacklogLevel = {
    /**
     * Reference name of the corresponding WIT category
     */
    categoryReferenceName?: string;
    /**
     * Plural name for the backlog level
     */
    pluralName?: string;
    /**
     * Collection of work item states that are included in the plan. The server will filter to only these work item types.
     */
    workItemStates?: Array<string>;
    /**
     * Collection of valid workitem type names for the given backlog level
     */
    workItemTypes?: Array<string>;
};

