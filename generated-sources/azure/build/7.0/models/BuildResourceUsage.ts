/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents information about resources used by builds in the system.
 */
export type BuildResourceUsage = {
    /**
     * The number of build agents.
     */
    distributedTaskAgents?: number;
    /**
     * The number of paid private agent slots.
     */
    paidPrivateAgentSlots?: number;
    /**
     * The total usage.
     */
    totalUsage?: number;
    /**
     * The number of XAML controllers.
     */
    xamlControllers?: number;
};

