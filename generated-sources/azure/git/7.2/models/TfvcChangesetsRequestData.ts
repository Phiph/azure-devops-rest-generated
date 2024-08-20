/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request body for Get batched changesets.
 */
export type TfvcChangesetsRequestData = {
    /**
     * List of changeset Ids.
     */
    changesetIds?: Array<number>;
    /**
     * Max length of the comment.
     */
    commentLength?: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks?: boolean;
};

