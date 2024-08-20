/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Class for create work item type request
 */
export type CreateProcessWorkItemTypeRequest = {
    /**
     * Color hexadecimal code to represent the work item type
     */
    color?: string;
    /**
     * Description of the work item type
     */
    description?: string;
    /**
     * Icon to represent the work item type
     */
    icon?: string;
    /**
     * Parent work item type for work item type
     */
    inheritsFrom?: string;
    /**
     * True if the work item type need to be disabled
     */
    isDisabled?: boolean;
    /**
     * Name of work item type
     */
    name?: string;
};

