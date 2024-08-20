/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagFilter } from './TagFilter';
export type ArtifactFilter = {
    /**
     * Gets or sets whether a release should be created on build tagging.
     */
    createReleaseOnBuildTagging?: boolean;
    /**
     * Gets or sets the branch for the filter.
     */
    sourceBranch?: string;
    /**
     * Gets or sets the regex based tag filter.
     */
    tagFilter?: TagFilter;
    /**
     * Gets or sets the list of tags for the filter.
     */
    tags?: Array<string>;
    /**
     * Gets or sets whether filter should default to build definition branch.
     */
    useBuildDefinitionBranch?: boolean;
};

