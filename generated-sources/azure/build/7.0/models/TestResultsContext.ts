/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildReference } from './BuildReference';
import type { PipelineReference } from './PipelineReference';
import type { ReleaseReference } from './ReleaseReference';
export type TestResultsContext = {
    build?: BuildReference;
    contextType?: 'build' | 'release' | 'pipeline';
    pipelineReference?: PipelineReference;
    release?: ReleaseReference;
};

