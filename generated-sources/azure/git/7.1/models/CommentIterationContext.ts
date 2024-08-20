/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Comment iteration context is used to identify which diff was being viewed when the thread was created.
 */
export type CommentIterationContext = {
    /**
     * The iteration of the file on the left side of the diff when the thread was created. If this value is equal to SecondComparingIteration, then this version is the common commit between the source and target branches of the pull request.
     */
    firstComparingIteration?: number;
    /**
     * The iteration of the file on the right side of the diff when the thread was created.
     */
    secondComparingIteration?: number;
};

