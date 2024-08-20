/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitObject } from './GitObject';
import type { GitUserDate } from './GitUserDate';
/**
 * A Git annotated tag.
 */
export type GitAnnotatedTag = {
    /**
     * The tagging Message
     */
    message?: string;
    /**
     * The name of the annotated tag.
     */
    name?: string;
    /**
     * The objectId (Sha1Id) of the tag.
     */
    objectId?: string;
    /**
     * User info and date of tagging.
     */
    taggedBy?: GitUserDate;
    /**
     * Tagged git object.
     */
    taggedObject?: GitObject;
    url?: string;
};

