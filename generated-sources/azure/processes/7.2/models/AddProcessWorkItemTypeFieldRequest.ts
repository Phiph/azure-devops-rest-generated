/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Class that describes a request to add a field in a work item type.
 */
export type AddProcessWorkItemTypeFieldRequest = {
    /**
     * The list of field allowed values.
     */
    allowedValues?: Array<string>;
    /**
     * Allow setting field value to a group identity. Only applies to identity fields.
     */
    allowGroups?: boolean;
    /**
     * The default value of the field.
     */
    defaultValue?: any;
    /**
     * If true the field cannot be edited.
     */
    readOnly?: boolean;
    /**
     * Reference name of the field.
     */
    referenceName?: string;
    /**
     * If true the field cannot be empty.
     */
    required?: boolean;
};

