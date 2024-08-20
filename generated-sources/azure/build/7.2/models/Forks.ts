/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the ability to build forks of the selected repository.
 */
export type Forks = {
    /**
     * Indicates whether a build should allow a full access token or scope it down when building forks of the selected repository.
     */
    allowFullAccessToken?: boolean;
    /**
     * Indicates whether a build should use secrets when building forks of the selected repository.
     */
    allowSecrets?: boolean;
    /**
     * Indicates whether the trigger should queue builds for forks of the selected repository.
     */
    enabled?: boolean;
};

