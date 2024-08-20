/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Class to describe a request that updates a field's properties in a work item type.
 */
export type UpdateProcessWorkItemTypeFieldRequest = {
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
     * The default value of the field.
     */
    required?: boolean;
};

