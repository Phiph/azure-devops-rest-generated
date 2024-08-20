/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Contains pipeline general settings.
 */
export type PipelineGeneralSettings = {
    /**
     * If enabled, scope of access for all non-release pipelines reduces to the current project.
     */
    enforceJobAuthScope?: boolean;
    /**
     * If enabled, scope of access for all release pipelines reduces to the current project.
     */
    enforceJobAuthScopeForReleases?: boolean;
    /**
     * Restricts the scope of access for all pipelines to only repositories explicitly referenced by the pipeline.
     */
    enforceReferencedRepoScopedToken?: boolean;
    /**
     * If enabled, only those variables that are explicitly marked as "Settable at queue time" can be set at queue time.
     */
    enforceSettableVar?: boolean;
    /**
     * Allows pipelines to record metadata.
     */
    publishPipelineMetadata?: boolean;
    /**
     * Anonymous users can access the status badge API for all pipelines unless this option is enabled.
     */
    statusBadgesArePrivate?: boolean;
};

