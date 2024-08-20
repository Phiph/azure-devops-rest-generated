/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Class that represents a work item state result.
 */
export type WorkItemStateResultModel = {
    /**
     * Work item state color.
     */
    color?: string;
    /**
     * Work item state customization type.
     */
    customizationType?: 'system' | 'inherited' | 'custom';
    /**
     * If the Work item state is hidden.
     */
    hidden?: boolean;
    /**
     * Id of the Workitemstate.
     */
    id?: string;
    /**
     * Work item state name.
     */
    name?: string;
    /**
     * Work item state order.
     */
    order?: number;
    /**
     * Work item state statecategory.
     */
    stateCategory?: string;
    /**
     * Work item state url.
     */
    url?: string;
};

