/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildResourceParameters } from './BuildResourceParameters';
import type { ContainerResourceParameters } from './ContainerResourceParameters';
import type { PackageResourceParameters } from './PackageResourceParameters';
import type { PipelineResourceParameters } from './PipelineResourceParameters';
import type { RepositoryResourceParameters } from './RepositoryResourceParameters';
export type RunResourcesParameters = {
    builds?: Record<string, BuildResourceParameters>;
    containers?: Record<string, ContainerResourceParameters>;
    packages?: Record<string, PackageResourceParameters>;
    pipelines?: Record<string, PipelineResourceParameters>;
    repositories?: Record<string, RepositoryResourceParameters>;
};

