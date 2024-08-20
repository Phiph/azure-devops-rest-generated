/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a request to create a work item comment.
 */
export type CommentCreateParameters = {
    /**
     * Optional CommentId of the parent in order to add a reply for an existing comment
     */
    parentId?: number;
    /**
     * Text of the comment
     */
    text?: string;
};

