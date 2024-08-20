/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateRetentionSettingModel } from './UpdateRetentionSettingModel';
/**
 * Contains members for updating the retention settings values. All fields are optional.
 */
export type UpdateProjectRetentionSettingModel = {
    artifactsRetention?: UpdateRetentionSettingModel;
    pullRequestRunRetention?: UpdateRetentionSettingModel;
    retainRunsPerProtectedBranch?: UpdateRetentionSettingModel;
    runRetention?: UpdateRetentionSettingModel;
};

