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
     * Enabled status 0 disabled, 1 enabled, Null never explicitly set, always whatever project is, ya this should probably be an enum somewhere
     */
    enabled?: boolean;
    /**
     * Enabled changed on datetime To Be Removed M223 +
     */
    enabledChangedOnDate?: string;
    /**
     * ProjectId
     */
    projectId?: string;
    /**
     * RepositoryId
     */
    repositoryId?: string;
};

