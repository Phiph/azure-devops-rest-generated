/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseDefinitionEnvironmentStep } from './ReleaseDefinitionEnvironmentStep';
import type { WorkflowTask } from './WorkflowTask';
export type ReleaseDefinitionDeployStep = (ReleaseDefinitionEnvironmentStep & {
    /**
     * The list of steps for this definition.
     */
    tasks?: Array<WorkflowTask>;
});

