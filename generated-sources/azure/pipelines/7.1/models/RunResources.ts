/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContainerResource } from './ContainerResource';
import type { PipelineResource } from './PipelineResource';
import type { RepositoryResource } from './RepositoryResource';
export type RunResources = {
    containers?: Record<string, ContainerResource>;
    pipelines?: Record<string, PipelineResource>;
    repositories?: Record<string, RepositoryResource>;
};

