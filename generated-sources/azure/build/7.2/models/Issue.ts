/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an issue (error, warning) associated with a build.
 */
export type Issue = {
    /**
     * The category.
     */
    category?: string;
    data?: Record<string, string>;
    /**
     * A description of the issue.
     */
    message?: string;
    /**
     * The type (error, warning) of the issue.
     */
    type?: 'error' | 'warning';
};

