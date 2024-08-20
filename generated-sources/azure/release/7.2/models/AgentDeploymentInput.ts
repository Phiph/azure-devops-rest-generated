/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentSpecification } from './AgentSpecification';
import type { DeploymentInput } from './DeploymentInput';
import type { ExecutionInput } from './ExecutionInput';
export type AgentDeploymentInput = (DeploymentInput & {
    /**
     * Specification for an agent on which a job gets executed.
     */
    agentSpecification?: AgentSpecification;
    /**
     * Gets or sets the image ID.
     */
    imageId?: number;
    /**
     * Gets or sets the parallel execution input.
     */
    parallelExecution?: ExecutionInput;
});

