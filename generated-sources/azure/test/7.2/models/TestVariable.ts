/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShallowReference } from './ShallowReference';
export type TestVariable = {
    /**
     * Description of the test variable
     */
    description?: string;
    /**
     * Id of the test variable
     */
    id?: number;
    /**
     * Name of the test variable
     */
    name?: string;
    /**
     * Project to which the test variable belongs
     */
    project?: ShallowReference;
    /**
     * Revision
     */
    revision?: number;
    /**
     * Url of the test variable
     */
    url?: string;
    /**
     * List of allowed values
     */
    values?: Array<string>;
};

