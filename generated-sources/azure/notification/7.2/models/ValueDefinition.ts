/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputValue } from './InputValue';
/**
 * Encapsulates the properties of a field value definition. It has the information needed to retrieve the list of possible values for a certain field and how to handle that field values in the UI. This information includes what type of object this value represents, which property to use for UI display and which property to use for saving the subscription
 */
export type ValueDefinition = {
    /**
     * Gets or sets the data source.
     */
    dataSource?: Array<InputValue>;
    /**
     * Gets or sets the rest end point.
     */
    endPoint?: string;
    /**
     * Gets or sets the result template.
     */
    resultTemplate?: string;
};

