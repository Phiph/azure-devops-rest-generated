/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourcePullRequestVersion } from './SourcePullRequestVersion';
export type BuildVersion = {
    /**
     * Gets or sets the commit message for the artifact.
     */
    commitMessage?: string;
    /**
     * Gets or sets the definition id.
     */
    definitionId?: string;
    /**
     * Gets or sets the definition name.
     */
    definitionName?: string;
    /**
     * Gets or sets the build id.
     */
    id?: string;
    /**
     * Gets or sets if the artifact supports multiple definitions.
     */
    isMultiDefinitionType?: boolean;
    /**
     * Gets or sets the build number.
     */
    name?: string;
    /**
     * Gets or sets the source branch for the artifact.
     */
    sourceBranch?: string;
    /**
     * Gets or sets the source pull request version for the artifact.
     */
    sourcePullRequestVersion?: SourcePullRequestVersion;
    /**
     * Gets or sets the repository id for the artifact.
     */
    sourceRepositoryId?: string;
    /**
     * Gets or sets the repository type for the artifact.
     */
    sourceRepositoryType?: string;
    /**
     * Gets or sets the source version for the artifact.
     */
    sourceVersion?: string;
};

