/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PipelineBase } from './PipelineBase';
import type { PipelineConfiguration } from './PipelineConfiguration';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Definition of a pipeline.
 */
export type Pipeline = (PipelineBase & {
    _links?: ReferenceLinks;
    configuration?: PipelineConfiguration;
    /**
     * URL of the pipeline
     */
    url?: string;
});

