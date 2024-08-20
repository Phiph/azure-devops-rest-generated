/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Preferences about how the pull request should be completed.
 */
export type GitPullRequestCompletionOptions = {
    /**
     * List of any policy configuration Id's which auto-complete should not wait for. Only applies to optional policies (isBlocking == false). Auto-complete always waits for required policies (isBlocking == true).
     */
    autoCompleteIgnoreConfigIds?: Array<number>;
    /**
     * If true, policies will be explicitly bypassed while the pull request is completed.
     */
    bypassPolicy?: boolean;
    /**
     * If policies are bypassed, this reason is stored as to why bypass was used.
     */
    bypassReason?: string;
    /**
     * If true, the source branch of the pull request will be deleted after completion.
     */
    deleteSourceBranch?: boolean;
    /**
     * If set, this will be used as the commit message of the merge commit.
     */
    mergeCommitMessage?: string;
    /**
     * Specify the strategy used to merge the pull request during completion. If MergeStrategy is not set to any value, a no-FF merge will be created if SquashMerge == false. If MergeStrategy is not set to any value, the pull request commits will be squashed if SquashMerge == true. The SquashMerge property is deprecated. It is recommended that you explicitly set MergeStrategy in all cases. If an explicit value is provided for MergeStrategy, the SquashMerge property will be ignored.
     */
    mergeStrategy?: 'noFastForward' | 'squash' | 'rebase' | 'rebaseMerge';
    /**
     * SquashMerge is deprecated. You should explicitly set the value of MergeStrategy. If MergeStrategy is set to any value, the SquashMerge value will be ignored. If MergeStrategy is not set, the merge strategy will be no-fast-forward if this flag is false, or squash if true.
     */
    squashMerge?: boolean;
    /**
     * If true, we will attempt to transition any work items linked to the pull request into the next logical state (i.e. Active -> Resolved)
     */
    transitionWorkItems?: boolean;
    /**
     * If true, the current completion attempt was triggered via auto-complete. Used internally.
     */
    triggeredByAutoComplete?: boolean;
};

