/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
import type { GitPushRef } from './GitPushRef';
import type { GitRefUpdate } from './GitRefUpdate';
import type { GitRepository } from './GitRepository';
export type GitPush = (GitPushRef & {
    commits?: Array<GitCommitRef>;
    refUpdates?: Array<GitRefUpdate>;
    repository?: GitRepository;
});

