/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The options which are used when a pull request merge is created.
 */
export type GitPullRequestMergeOptions = {
    /**
     * If true, conflict resolutions applied during the merge will be put in separate commits to preserve authorship info for git blame, etc.
     */
    conflictAuthorshipCommits?: boolean;
    /**
     * If true, renames where there is more than one valid way to map the original file locations to renamed file locations will be treated as false positives and ignored.
     */
    detectRenameFalsePositives?: boolean;
    /**
     * If true, rename detection will not be performed during the merge.
     */
    disableRenames?: boolean;
};

