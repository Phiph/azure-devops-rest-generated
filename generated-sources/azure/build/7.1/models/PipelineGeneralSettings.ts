/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains pipeline general settings.
 */
export type PipelineGeneralSettings = {
    /**
     * If enabled, audit logs will be generated whenever someone queues a pipeline run and defines variables that are not marked as "Settable at queue time".
     */
    auditEnforceSettableVar?: boolean;
    /**
     * Enable forked repositories to build pull requests.
     */
    buildsEnabledForForks?: boolean;
    /**
     * Disable classic build pipelines creation.
     */
    disableClassicBuildPipelineCreation?: boolean;
    /**
     * Disable classic pipelines creation.
     */
    disableClassicPipelineCreation?: boolean;
    /**
     * Disable classic release pipelines creation.
     */
    disableClassicReleasePipelineCreation?: boolean;
    /**
     * Enable shell tasks args sanitizing.
     */
    enableShellTasksArgsSanitizing?: boolean;
    /**
     * Enable shell tasks args sanitizing preview.
     */
    enableShellTasksArgsSanitizingAudit?: boolean;
    /**
     * If enabled, scope of access for all non-release pipelines reduces to the current project.
     */
    enforceJobAuthScope?: boolean;
    /**
     * Enforce job auth scope for builds of forked repositories.
     */
    enforceJobAuthScopeForForks?: boolean;
    /**
     * If enabled, scope of access for all release pipelines reduces to the current project.
     */
    enforceJobAuthScopeForReleases?: boolean;
    /**
     * Enforce no access to secrets for builds of forked repositories.
     */
    enforceNoAccessToSecretsFromForks?: boolean;
    /**
     * Restricts the scope of access for all pipelines to only repositories explicitly referenced by the pipeline.
     */
    enforceReferencedRepoScopedToken?: boolean;
    /**
     * If enabled, only those variables that are explicitly marked as "Settable at queue time" can be set at queue time.
     */
    enforceSettableVar?: boolean;
    /**
     * Enable settings that enforce certain levels of protection for building pull requests from forks globally.
     */
    forkProtectionEnabled?: boolean;
    /**
     * Make comments required to have builds in all pull requests.
     */
    isCommentRequiredForPullRequest?: boolean;
    /**
     * Allows pipelines to record metadata.
     */
    publishPipelineMetadata?: boolean;
    /**
     * Make comments required to have builds in pull requests from non-team members and non-contributors.
     */
    requireCommentsForNonTeamMemberAndNonContributors?: boolean;
    /**
     * Make comments required to have builds in pull requests from non-team members.
     */
    requireCommentsForNonTeamMembersOnly?: boolean;
    /**
     * Anonymous users can access the status badge API for all pipelines unless this option is enabled.
     */
    statusBadgesArePrivate?: boolean;
};

