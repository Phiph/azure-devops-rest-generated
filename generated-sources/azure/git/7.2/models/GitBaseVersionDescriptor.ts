/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitVersionDescriptor } from './GitVersionDescriptor';
export type GitBaseVersionDescriptor = (GitVersionDescriptor & {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    baseVersion?: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    baseVersionOptions?: 'none' | 'previousChange' | 'firstParent';
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    baseVersionType?: 'branch' | 'tag' | 'commit';
});

