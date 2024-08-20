/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SourcePullRequestVersion = {
    /**
     * Pull Request Iteration Id for which the release will publish status.
     */
    iterationId?: string;
    /**
     * Pull Request Id for which the release will publish status.
     */
    pullRequestId?: string;
    /**
     * Date and time of the pull request merge creation. It is required to keep timeline record of Releases created by pull request.
     */
    pullRequestMergedAt?: string;
    /**
     * Source branch of the Pull Request.
     */
    sourceBranch?: string;
    /**
     * Source branch commit Id of the Pull Request for which the release will publish status.
     */
    sourceBranchCommitId?: string;
    /**
     * Target branch of the Pull Request.
     */
    targetBranch?: string;
};

