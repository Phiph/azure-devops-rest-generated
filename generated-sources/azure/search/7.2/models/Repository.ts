/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Defines the details of the repository.
 */
export type Repository = {
    /**
     * Id of the repository.
     */
    id?: string;
    /**
     * Name of the repository.
     */
    name?: string;
    /**
     * Version control type of the result file.
     */
    type?: 'git' | 'tfvc' | 'custom';
};

