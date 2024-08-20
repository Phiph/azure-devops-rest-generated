/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignedUrl } from './SignedUrl';
/**
 * Log for a pipeline.
 */
export type Log = {
    /**
     * The date and time the log was created.
     */
    createdOn?: string;
    /**
     * The ID of the log.
     */
    id?: number;
    /**
     * The date and time the log was last changed.
     */
    lastChangedOn?: string;
    /**
     * The number of lines in the log.
     */
    lineCount?: number;
    signedContent?: SignedUrl;
    url?: string;
};

