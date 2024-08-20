/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePipelineConfigurationParameters } from './CreatePipelineConfigurationParameters';
/**
 * Parameters to create a pipeline.
 */
export type CreatePipelineParameters = {
    /**
     * Configuration parameters of the pipeline.
     */
    configuration?: CreatePipelineConfigurationParameters;
    /**
     * Folder of the pipeline.
     */
    folder?: string;
    /**
     * Name of the pipeline.
     */
    name?: string;
};

