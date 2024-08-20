/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PipelineProcess } from './PipelineProcess';
import type { YamlFileSource } from './YamlFileSource';
import type { YamlPipelineProcessResources } from './YamlPipelineProcessResources';
export type YamlPipelineProcess = (PipelineProcess & {
    errors?: Array<string>;
    filename?: string;
    fileSource?: YamlFileSource;
    resources?: YamlPipelineProcessResources;
});

