/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a process being created.
 */
export type CreateProcessModel = {
    /**
     * Description of the process
     */
    description?: string;
    /**
     * Name of the process
     */
    name?: string;
    /**
     * The ID of the parent process
     */
    parentProcessTypeId?: string;
    /**
     * Reference name of process being created. If not specified, server will assign a unique reference name
     */
    referenceName?: string;
};

