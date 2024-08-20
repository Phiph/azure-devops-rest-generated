/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data and settings for an elastic pool
 */
export type ElasticPool = {
    /**
     * Set whether agents should be configured to run with interactive UI
     */
    agentInteractiveUI?: boolean;
    /**
     * Azure string representing to location of the resource
     */
    azureId?: string;
    /**
     * Number of agents to have ready waiting for jobs
     */
    desiredIdle?: number;
    /**
     * The desired size of the pool
     */
    desiredSize?: number;
    /**
     * Maximum number of nodes that will exist in the elastic pool
     */
    maxCapacity?: number;
    /**
     * Keep nodes in the pool on failure for investigation
     */
    maxSavedNodeCount?: number;
    /**
     * Timestamp the pool was first detected to be offline
     */
    offlineSince?: string;
    /**
     * Operating system type of the nodes in the pool
     */
    orchestrationType?: 'uniform' | 'flexible';
    /**
     * Operating system type of the nodes in the pool
     */
    osType?: 'windows' | 'linux';
    /**
     * Id of the associated TaskAgentPool
     */
    poolId?: number;
    /**
     * Discard node after each job completes
     */
    recycleAfterEachUse?: boolean;
    /**
     * Id of the Service Endpoint used to connect to Azure
     */
    serviceEndpointId?: string;
    /**
     * Scope the Service Endpoint belongs to
     */
    serviceEndpointScope?: string;
    /**
     * The number of sizing attempts executed while trying to achieve a desired size
     */
    sizingAttempts?: number;
    /**
     * State of the pool
     */
    state?: 'online' | 'offline' | 'unhealthy' | 'new';
    /**
     * The minimum time in minutes to keep idle agents alive
     */
    timeToLiveMinutes?: number;
};

