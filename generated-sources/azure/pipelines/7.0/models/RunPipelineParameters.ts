/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunResourcesParameters } from './RunResourcesParameters';
import type { Variable } from './Variable';
/**
 * Settings which influence pipeline runs.
 */
export type RunPipelineParameters = {
    /**
     * If true, don't actually create a new run. Instead, return the final YAML document after parsing templates.
     */
    previewRun?: boolean;
    /**
     * The resources the run requires.
     */
    resources?: RunResourcesParameters;
    stagesToSkip?: Array<string>;
    templateParameters?: Record<string, string>;
    variables?: Record<string, Variable>;
    /**
     * If you use the preview run option, you may optionally supply different YAML. This allows you to preview the final YAML document without committing a changed file.
     */
    yamlOverride?: string;
};

