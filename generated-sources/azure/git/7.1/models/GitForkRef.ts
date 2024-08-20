/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRef } from './GitRef';
import type { GitRepository } from './GitRepository';
/**
 * Information about a fork ref.
 */
export type GitForkRef = (GitRef & {
    /**
     * The repository ID of the fork.
     */
    repository?: GitRepository;
});

