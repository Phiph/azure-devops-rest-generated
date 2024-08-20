/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildTrigger } from './BuildTrigger';
import type { Forks } from './Forks';
import type { PipelineTriggerSettings } from './PipelineTriggerSettings';
/**
 * Represents a pull request trigger.
 */
export type PullRequestTrigger = (BuildTrigger & {
    /**
     * Indicates if an update to a PR should delete current in-progress builds.
     */
    autoCancel?: boolean;
    branchFilters?: Array<string>;
    forks?: Forks;
    isCommentRequiredForPullRequest?: boolean;
    pathFilters?: Array<string>;
    pipelineTriggerSettings?: PipelineTriggerSettings;
    requireCommentsForNonTeamMemberAndNonContributors?: boolean;
    requireCommentsForNonTeamMembersOnly?: boolean;
    settingsSourceType?: number;
});

