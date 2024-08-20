/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowTask } from './WorkflowTask';
export type ReleaseDefinitionGate = {
    /**
     * Gets or sets the flag that indicates if gate was generated.
     */
    isGenerated?: boolean;
    /**
     * Gets or sets the gates workflow.
     */
    tasks?: Array<WorkflowTask>;
};

