/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessProperties } from './ProcessProperties';
import type { ProjectReference } from './ProjectReference';
export type ProcessModel = {
    /**
     * Description of the process
     */
    description?: string;
    /**
     * Name of the process
     */
    name?: string;
    /**
     * Projects in this process
     */
    projects?: Array<ProjectReference>;
    /**
     * Properties of the process
     */
    properties?: ProcessProperties;
    /**
     * Reference name of the process
     */
    referenceName?: string;
    /**
     * The ID of the process
     */
    typeId?: string;
};

