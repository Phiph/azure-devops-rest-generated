/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TfvcMergeSource = {
    /**
     * Indicates if this a rename source. If false, it is a merge source.
     */
    isRename?: boolean;
    /**
     * The server item of the merge source.
     */
    serverItem?: string;
    /**
     * Start of the version range.
     */
    versionFrom?: number;
    /**
     * End of the version range.
     */
    versionTo?: number;
};

