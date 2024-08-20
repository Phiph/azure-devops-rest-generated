/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentPosition } from './CommentPosition';
export type CommentThreadContext = {
    /**
     * File path relative to the root of the repository. It's up to the client to use any path format.
     */
    filePath?: string;
    /**
     * Position of last character of the thread's span in left file.
     */
    leftFileEnd?: CommentPosition;
    /**
     * Position of first character of the thread's span in left file.
     */
    leftFileStart?: CommentPosition;
    /**
     * Position of last character of the thread's span in right file.
     */
    rightFileEnd?: CommentPosition;
    /**
     * Position of first character of the thread's span in right file.
     */
    rightFileStart?: CommentPosition;
};

