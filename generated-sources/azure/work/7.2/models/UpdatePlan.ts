/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdatePlan = {
    /**
     * Description of the plan
     */
    description?: string;
    /**
     * Name of the plan to create.
     */
    name?: string;
    /**
     * Plan properties.
     */
    properties?: any;
    /**
     * Revision of the plan that was updated - the value used here should match the one the server gave the client in the Plan.
     */
    revision?: number;
    /**
     * Type of the plan
     */
    type?: 'deliveryTimelineView';
};

