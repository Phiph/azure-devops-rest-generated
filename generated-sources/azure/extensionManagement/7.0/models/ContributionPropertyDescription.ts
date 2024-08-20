/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Description about a property of a contribution type
 */
export type ContributionPropertyDescription = {
    /**
     * Description of the property
     */
    description?: string;
    /**
     * Name of the property
     */
    name?: string;
    /**
     * True if this property is required
     */
    required?: boolean;
    /**
     * The type of value used for this property
     */
    type?: 'unknown' | 'string' | 'uri' | 'guid' | 'boolean' | 'integer' | 'double' | 'dateTime' | 'dictionary' | 'array' | 'object';
};

