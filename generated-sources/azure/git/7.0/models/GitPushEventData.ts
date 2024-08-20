/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommit } from './GitCommit';
import type { GitRepository } from './GitRepository';
export type GitPushEventData = {
    afterId?: string;
    beforeId?: string;
    branch?: string;
    commits?: Array<GitCommit>;
    repository?: GitRepository;
};

