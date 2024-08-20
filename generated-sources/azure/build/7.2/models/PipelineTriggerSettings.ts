/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the effective settings applicable to individual pipeline triggers.
 */
export type PipelineTriggerSettings = {
    /**
     * Enable forked repositories to build pull requests.
     */
    buildsEnabledForForks?: boolean;
    /**
     * Enforce job auth scope for builds of forked repositories.
     */
    enforceJobAuthScopeForForks?: boolean;
    /**
     * Enforce no access to secrets for builds of forked repositories.
     */
    enforceNoAccessToSecretsFromForks?: boolean;
    /**
     * Enable settings that enforce certain levels of protection for building pull requests from forks globally.
     */
    forkProtectionEnabled?: boolean;
    /**
     * Make comments required to have builds in all pull requests.
     */
    isCommentRequiredForPullRequest?: boolean;
    /**
     * Make comments required to have builds in pull requests from non-team members and non-contributors.
     */
    requireCommentsForNonTeamMemberAndNonContributors?: boolean;
    /**
     * Make comments required to have builds in pull requests from non-team members.
     */
    requireCommentsForNonTeamMembersOnly?: boolean;
};

