/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a state transition in a work item.
 */
export type WorkItemStateTransition = {
    /**
     * Gets a list of actions needed to transition to that state.
     */
    actions?: Array<string>;
    /**
     * Name of the next state.
     */
    to?: string;
};

