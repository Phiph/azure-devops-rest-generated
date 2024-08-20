/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the progress of a cherry pick or revert operation.
 */
export type GitAsyncRefOperationDetail = {
    /**
     * Indicates if there was a conflict generated when trying to cherry pick or revert the changes.
     */
    conflict?: boolean;
    /**
     * The current commit from the list of commits that are being cherry picked or reverted.
     */
    currentCommitId?: string;
    /**
     * Detailed information about why the cherry pick or revert failed to complete.
     */
    failureMessage?: string;
    /**
     * A number between 0 and 1 indicating the percent complete of the operation.
     */
    progress?: number;
    /**
     * Provides a status code that indicates the reason the cherry pick or revert failed.
     */
    status?: 'none' | 'invalidRefName' | 'refNameConflict' | 'createBranchPermissionRequired' | 'writePermissionRequired' | 'targetBranchDeleted' | 'gitObjectTooLarge' | 'operationIndentityNotFound' | 'asyncOperationNotFound' | 'other' | 'emptyCommitterSignature';
    /**
     * Indicates if the operation went beyond the maximum time allowed for a cherry pick or revert operation.
     */
    timedout?: boolean;
};

