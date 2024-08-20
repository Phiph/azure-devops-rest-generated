/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
export type GitBlobRef = {
    _links?: ReferenceLinks;
    /**
     * SHA1 hash of git object
     */
    objectId?: string;
    /**
     * Size of blob content (in bytes)
     */
    size?: number;
    url?: string;
};

