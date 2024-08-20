/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRepository } from './GitRepository';
import type { WikiCreateParameters } from './WikiCreateParameters';
/**
 * Defines a wiki repository which encapsulates the git repository backing the wiki.
 */
export type Wiki = (WikiCreateParameters & {
    /**
     * The head commit associated with the git repository backing up the wiki.
     */
    headCommit?: string;
    /**
     * The ID of the wiki which is same as the ID of the Git repository that it is backed by.
     */
    id?: string;
    /**
     * The git repository that backs up the wiki.
     */
    repository?: GitRepository;
});

