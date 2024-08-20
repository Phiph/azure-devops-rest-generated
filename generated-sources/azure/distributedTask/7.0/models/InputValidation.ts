/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes what values are valid for a subscription input
 */
export type InputValidation = {
    /**
     * Gets or sets the data data type to validate.
     */
    dataType?: 'none' | 'string' | 'number' | 'boolean' | 'guid' | 'uri';
    /**
     * Gets or sets if this is a required field.
     */
    isRequired?: boolean;
    /**
     * Gets or sets the maximum length of this descriptor.
     */
    maxLength?: number;
    /**
     * Gets or sets the minimum value for this descriptor.
     */
    maxValue?: string;
    /**
     * Gets or sets the minimum length of this descriptor.
     */
    minLength?: number;
    /**
     * Gets or sets the minimum value for this descriptor.
     */
    minValue?: string;
    /**
     * Gets or sets the pattern to validate.
     */
    pattern?: string;
    /**
     * Gets or sets the error on pattern mismatch.
     */
    patternMismatchErrorMessage?: string;
};

