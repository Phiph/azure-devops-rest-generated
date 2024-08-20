/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetentionSetting } from './RetentionSetting';
/**
 * Contains the settings for the retention rules.
 */
export type ProjectRetentionSetting = {
    /**
     * The rules for artifact retention. Artifacts can not live longer than a run, so will be overridden by a shorter run purge setting.
     */
    purgeArtifacts?: RetentionSetting;
    /**
     * The rules for pull request pipeline run retention.
     */
    purgePullRequestRuns?: RetentionSetting;
    /**
     * The rules for pipeline run retention.
     */
    purgeRuns?: RetentionSetting;
    /**
     * The rules for retaining runs per protected branch.
     */
    retainRunsPerProtectedBranch?: RetentionSetting;
};

