/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a request to update a process
 */
export type UpdateProcessModel = {
    /**
     * New description of the process
     */
    description?: string;
    /**
     * If true new projects will use this process by default
     */
    isDefault?: boolean;
    /**
     * If false the process will be disabled and cannot be used to create projects
     */
    isEnabled?: boolean;
    /**
     * New name of the process
     */
    name?: string;
};

