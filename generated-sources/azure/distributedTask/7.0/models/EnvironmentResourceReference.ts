/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * EnvironmentResourceReference.
 */
export type EnvironmentResourceReference = {
    /**
     * Id of the resource.
     */
    id?: number;
    /**
     * Name of the resource.
     */
    name?: string;
    /**
     * Tags of the Environment Resource Reference.
     */
    tags?: Array<string>;
    /**
     * Type of the resource.
     */
    type?: 'undefined' | 'generic' | 'virtualMachine' | 'kubernetes';
};

