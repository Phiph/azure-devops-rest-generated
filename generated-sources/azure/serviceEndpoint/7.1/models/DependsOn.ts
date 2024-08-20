/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DependencyBinding } from './DependencyBinding';
/**
 * Represents the inputs on which any given input is dependent.
 */
export type DependsOn = {
    /**
     * Gets or sets the ID of the field on which URL's value is dependent.
     */
    input?: string;
    /**
     * Gets or sets key-value pair containing other's field value and corresponding url value.
     */
    map?: Array<DependencyBinding>;
};

