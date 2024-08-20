/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeRepositoryReference } from './CodeRepositoryReference';
export type PullRequestConfiguration = {
    /**
     * Code repository reference.
     */
    codeRepositoryReference?: CodeRepositoryReference;
    /**
     * In case of Source based artifacts, Code reference will be present in Artifact details.
     */
    useArtifactReference?: boolean;
};

