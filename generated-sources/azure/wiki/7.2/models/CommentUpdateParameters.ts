/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a request to update a comment.
 */
export type CommentUpdateParameters = {
    /**
     * Set the current state of the comment
     */
    state?: 'active' | 'resolved' | 'closed';
    /**
     * The updated text of the comment
     */
    text?: string;
};

