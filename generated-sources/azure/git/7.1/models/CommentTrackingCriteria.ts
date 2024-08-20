/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentPosition } from './CommentPosition';
/**
 * Comment tracking criteria is used to identify which iteration context the thread has been tracked to (if any) along with some detail about the original position and filename.
 */
export type CommentTrackingCriteria = {
    /**
     * The iteration of the file on the left side of the diff that the thread will be tracked to. Threads were tracked if this is greater than 0.
     */
    firstComparingIteration?: number;
    /**
     * Original filepath the thread was created on before tracking. This will be different than the current thread filepath if the file in question was renamed in a later iteration.
     */
    origFilePath?: string;
    /**
     * Original position of last character of the thread's span in left file.
     */
    origLeftFileEnd?: CommentPosition;
    /**
     * Original position of first character of the thread's span in left file.
     */
    origLeftFileStart?: CommentPosition;
    /**
     * Original position of last character of the thread's span in right file.
     */
    origRightFileEnd?: CommentPosition;
    /**
     * Original position of first character of the thread's span in right file.
     */
    origRightFileStart?: CommentPosition;
    /**
     * The iteration of the file on the right side of the diff that the thread will be tracked to. Threads were tracked if this is greater than 0.
     */
    secondComparingIteration?: number;
};

