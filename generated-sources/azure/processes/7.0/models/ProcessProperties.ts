/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Properties of the process.
 */
export type ProcessProperties = {
    /**
     * Class of the process.
     */
    class?: 'system' | 'derived' | 'custom';
    /**
     * Is the process default process.
     */
    isDefault?: boolean;
    /**
     * Is the process enabled.
     */
    isEnabled?: boolean;
    /**
     * ID of the parent process.
     */
    parentProcessTypeId?: string;
    /**
     * Version of the process.
     */
    version?: string;
};

