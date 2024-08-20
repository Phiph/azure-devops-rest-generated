/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Log } from './Log';
import type { SignedUrl } from './SignedUrl';
/**
 * A collection of logs.
 */
export type LogCollection = {
    /**
     * The list of logs.
     */
    logs?: Array<Log>;
    signedContent?: SignedUrl;
    /**
     * URL of the log.
     */
    url?: string;
};

