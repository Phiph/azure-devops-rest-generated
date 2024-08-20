/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactsDownloadInput } from './ArtifactsDownloadInput';
import type { BaseDeploymentInput } from './BaseDeploymentInput';
import type { Demand } from './Demand';
export type DeploymentInput = (BaseDeploymentInput & {
    /**
     * Artifacts that downloaded during job execution.
     */
    artifactsDownloadInput?: ArtifactsDownloadInput;
    /**
     * List demands that needs to meet to execute the job.
     */
    demands?: Array<Demand>;
    /**
     * Indicates whether to include access token in deployment job or not.
     */
    enableAccessToken?: boolean;
    /**
     * Id of the pool on which job get executed.
     */
    queueId?: number;
    /**
     * Indicates whether artifacts downloaded while job execution or not.
     */
    skipArtifactsDownload?: boolean;
});

