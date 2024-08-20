/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProjectPipelineReleaseSettings = {
    /**
     * EnforceJobAuthScope setting at project level. If enabled, scope of access for all release pipelines reduces to the current project.
     */
    enforceJobAuthScope?: boolean;
    /**
     * Defines whether user can manage pipeline settings.
     */
    hasManageSettingsPermission?: boolean;
    /**
     * EnforceJobAuthScope setting at organisaion level. If enabled, scope of access for all release pipelines in the organisation reduces to the current project.
     */
    orgEnforceJobAuthScope?: boolean;
    /**
     * Defines whether project is public.
     */
    publicProject?: boolean;
};

