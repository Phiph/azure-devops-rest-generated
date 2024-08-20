/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an installation issue
 */
export type InstalledExtensionStateIssue = {
    /**
     * The error message
     */
    message?: string;
    /**
     * Source of the installation issue, for example  "Demands"
     */
    source?: string;
    /**
     * Installation issue type (Warning, Error)
     */
    type?: 'warning' | 'error';
};

