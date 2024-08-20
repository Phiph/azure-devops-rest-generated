/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdvSecEnablementStatus = {
    /**
     * Enabled by VSID
     */
    changedById?: string;
    /**
     * Enabled changed on datetime
     */
    changedOnDate?: string;
    /**
     * True if Dependabot is enabled for the repository, false if it is disabled.
     */
    dependabotEnabled?: boolean;
    /**
     * Enabled status 0 disabled, 1 enabled, Null never explicitly set, always whatever project is, ya this should probably be an enum somewhere
     */
    enabled?: boolean;
    /**
     * ProjectId
     */
    projectId?: string;
    /**
     * RepositoryId
     */
    repositoryId?: string;
};

