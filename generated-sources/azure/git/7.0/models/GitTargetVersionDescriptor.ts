/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitVersionDescriptor } from './GitVersionDescriptor';
export type GitTargetVersionDescriptor = (GitVersionDescriptor & {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    targetVersion?: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    targetVersionOptions?: 'none' | 'previousChange' | 'firstParent';
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    targetVersionType?: 'branch' | 'tag' | 'commit';
});

