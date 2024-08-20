/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Class that describes a field in a work item type and its properties.
 */
export type ProcessWorkItemTypeField = {
    /**
     * The list of field allowed values.
     */
    allowedValues?: Array<any>;
    /**
     * Allow setting field value to a group identity. Only applies to identity fields.
     */
    allowGroups?: boolean;
    /**
     * Indicates the type of customization on this work item.
     */
    customization?: 'system' | 'inherited' | 'custom';
    /**
     * The default value of the field.
     */
    defaultValue?: any;
    /**
     * Description of the field.
     */
    description?: string;
    /**
     * Name of the field.
     */
    name?: string;
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
    /**
     * Type of the field.
     */
    type?: 'string' | 'integer' | 'dateTime' | 'plainText' | 'html' | 'treePath' | 'history' | 'double' | 'guid' | 'boolean' | 'identity' | 'picklistInteger' | 'picklistString' | 'picklistDouble';
    /**
     * Resource URL of the field.
     */
    url?: string;
};

