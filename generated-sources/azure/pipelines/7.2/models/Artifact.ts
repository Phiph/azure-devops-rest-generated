/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignedUrl } from './SignedUrl';
/**
 * Artifacts are collections of files produced by a pipeline. Use artifacts to share files between stages in a pipeline or between different pipelines.
 */
export type Artifact = {
    /**
     * The name of the artifact.
     */
    name?: string;
    /**
     * Signed url for downloading this artifact
     */
    signedContent?: SignedUrl;
    /**
     * Self-referential url
     */
    url?: string;
};

