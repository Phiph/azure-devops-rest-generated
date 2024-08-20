/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
export type GitPullRequestReviewFileContentInfo = {
    _links?: ReferenceLinks;
    /**
     * The file change path.
     */
    path?: string;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the client by using SHA1 hash function. Ensure that uploaded file has same encoding as in source control.
     */
    shA1Hash?: string;
};

