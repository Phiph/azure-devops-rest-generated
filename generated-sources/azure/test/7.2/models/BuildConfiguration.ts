/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShallowReference } from './ShallowReference';
/**
 * BuildConfiguration Details.
 */
export type BuildConfiguration = {
    /**
     * Branch name for which build is generated.
     */
    branchName?: string;
    /**
     * BuildDefinitionId for build.
     */
    buildDefinitionId?: number;
    /**
     * Build system.
     */
    buildSystem?: string;
    /**
     * Build Creation Date.
     */
    creationDate?: string;
    /**
     * Build flavor (eg Build/Release).
     */
    flavor?: string;
    /**
     * BuildConfiguration Id.
     */
    id?: number;
    /**
     * Build Number.
     */
    number?: string;
    /**
     * BuildConfiguration Platform.
     */
    platform?: string;
    /**
     * Project associated with this BuildConfiguration.
     */
    project?: ShallowReference;
    /**
     * Repository Guid for the Build.
     */
    repositoryGuid?: string;
    /**
     * Repository Type (eg. TFSGit).
     */
    repositoryType?: string;
    /**
     * Source Version(/first commit) for the build was triggered.
     */
    sourceVersion?: string;
    /**
     * Target BranchName.
     */
    targetBranchName?: string;
    /**
     * Build Uri.
     */
    uri?: string;
};

