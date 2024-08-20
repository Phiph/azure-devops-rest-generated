/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Encapsulates the properties of an operator constraint. An operator constraint defines if some operator is available only for specific scope like a project scope.
 */
export type OperatorConstraint = {
    operator?: string;
    /**
     * Gets or sets the list of scopes that this type supports.
     */
    supportedScopes?: Array<string>;
};

