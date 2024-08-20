/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties of a work item form contribution
 */
export type WitContribution = {
    /**
     * The id for the contribution.
     */
    contributionId?: string;
    /**
     * The height for the contribution.
     */
    height?: number;
    /**
     * A dictionary holding key value pairs for contribution inputs.
     */
    inputs?: Record<string, any>;
    /**
     * A value indicating if the contribution should be show on deleted workItem.
     */
    showOnDeletedWorkItem?: boolean;
};

