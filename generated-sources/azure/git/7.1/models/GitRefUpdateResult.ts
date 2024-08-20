/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GitRefUpdateResult = {
    /**
     * Custom message for the result object For instance, Reason for failing.
     */
    customMessage?: string;
    /**
     * Whether the ref is locked or not
     */
    isLocked?: boolean;
    /**
     * Ref name
     */
    name?: string;
    /**
     * New object ID
     */
    newObjectId?: string;
    /**
     * Old object ID
     */
    oldObjectId?: string;
    /**
     * Name of the plugin that rejected the updated.
     */
    rejectedBy?: string;
    /**
     * Repository ID
     */
    repositoryId?: string;
    /**
     * True if the ref update succeeded, false otherwise
     */
    success?: boolean;
    /**
     * Status of the update from the TFS server.
     */
    updateStatus?: 'succeeded' | 'forcePushRequired' | 'staleOldObjectId' | 'invalidRefName' | 'unprocessed' | 'unresolvableToCommit' | 'writePermissionRequired' | 'manageNotePermissionRequired' | 'createBranchPermissionRequired' | 'createTagPermissionRequired' | 'rejectedByPlugin' | 'locked' | 'refNameConflict' | 'rejectedByPolicy' | 'succeededNonExistentRef' | 'succeededCorruptRef';
};

