/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a retention policy for a build definition.
 */
export type RetentionPolicy = {
    artifacts?: Array<string>;
    artifactTypesToDelete?: Array<string>;
    branches?: Array<string>;
    /**
     * The number of days to keep builds.
     */
    daysToKeep?: number;
    /**
     * Indicates whether the build record itself should be deleted.
     */
    deleteBuildRecord?: boolean;
    /**
     * Indicates whether to delete test results associated with the build.
     */
    deleteTestResults?: boolean;
    /**
     * The minimum number of builds to keep.
     */
    minimumToKeep?: number;
};

