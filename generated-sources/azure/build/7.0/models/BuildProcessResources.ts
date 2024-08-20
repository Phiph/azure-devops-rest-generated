/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentPoolQueueReference } from './AgentPoolQueueReference';
import type { SecureFileReference } from './SecureFileReference';
import type { ServiceEndpointReference } from './ServiceEndpointReference';
import type { VariableGroupReference } from './VariableGroupReference';
/**
 * Represents resources used by a build process.
 */
export type BuildProcessResources = {
    endpoints?: Array<ServiceEndpointReference>;
    files?: Array<SecureFileReference>;
    queues?: Array<AgentPoolQueueReference>;
    variableGroups?: Array<VariableGroupReference>;
};

