/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PipelineReference } from './PipelineReference';
import type { ReferenceLinks } from './ReferenceLinks';
import type { RunReference } from './RunReference';
import type { RunResources } from './RunResources';
import type { Variable } from './Variable';
export type Run = (RunReference & {
    _links?: ReferenceLinks;
    createdDate?: string;
    finalYaml?: string;
    finishedDate?: string;
    pipeline?: PipelineReference;
    resources?: RunResources;
    result?: 'unknown' | 'succeeded' | 'failed' | 'canceled';
    state?: 'unknown' | 'inProgress' | 'canceling' | 'completed';
    templateParameters?: Record<string, any>;
    url?: string;
    variables?: Record<string, Variable>;
});

