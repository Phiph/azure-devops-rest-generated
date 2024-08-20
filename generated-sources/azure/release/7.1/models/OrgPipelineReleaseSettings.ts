/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrgPipelineReleaseSettings = {
    /**
     * Defines whether user can manage pipeline settings.
     */
    hasManagePipelinePoliciesPermission?: boolean;
    /**
     * EnforceJobAuthScope setting at organisaion level. If enabled, scope of access for all release pipelines in the organisation reduces to the current project.
     */
    orgEnforceJobAuthScope?: boolean;
};

