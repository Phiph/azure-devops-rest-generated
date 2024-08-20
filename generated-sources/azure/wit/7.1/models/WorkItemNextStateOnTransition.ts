/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes the next state for a work item.
 */
export type WorkItemNextStateOnTransition = {
    /**
     * Error code if there is no next state transition possible.
     */
    errorCode?: string;
    /**
     * Work item ID.
     */
    id?: number;
    /**
     * Error message if there is no next state transition possible.
     */
    message?: string;
    /**
     * Name of the next state on transition.
     */
    stateOnTransition?: string;
};

