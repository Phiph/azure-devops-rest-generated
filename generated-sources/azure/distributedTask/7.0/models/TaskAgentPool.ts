/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { PropertiesCollection } from './PropertiesCollection';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';
/**
 * An organization-level grouping of agents.
 */
export type TaskAgentPool = (TaskAgentPoolReference & {
    /**
     * The ID of the associated agent cloud.
     */
    agentCloudId?: number;
    /**
     * Whether or not a queue should be automatically provisioned for each project collection.
     */
    autoProvision?: boolean;
    /**
     * Whether or not the pool should autosize itself based on the Agent Cloud Provider settings.
     */
    autoSize?: boolean;
    /**
     * Whether or not agents in this pool are allowed to automatically update
     */
    autoUpdate?: boolean;
    /**
     * Creator of the pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
     */
    createdBy?: IdentityRef;
    /**
     * The date/time of the pool creation.
     */
    createdOn?: string;
    /**
     * Owner or administrator of the pool.
     */
    owner?: IdentityRef;
    properties?: PropertiesCollection;
    /**
     * Target parallelism.
     */
    targetSize?: number;
});

