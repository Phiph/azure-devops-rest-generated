/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data and settings for an elastic node
 */
export type ElasticNode = {
    /**
     * Distributed Task's Agent Id
     */
    agentId?: number;
    /**
     * Summary of the state of the agent
     */
    agentState?: 'none' | 'enabled' | 'online' | 'assigned';
    /**
     * Compute Id.  VMSS's InstanceId
     */
    computeId?: string;
    /**
     * State of the compute host
     */
    computeState?: 'none' | 'healthy' | 'creating' | 'deleting' | 'failed' | 'stopped' | 'reimaging' | 'unhealthyVm' | 'unhealthyVmssVm';
    /**
     * Users can force state changes to specific states (ToReimage, ToDelete, Save)
     */
    desiredState?: 'none' | 'new' | 'creatingCompute' | 'startingAgent' | 'idle' | 'assigned' | 'offline' | 'pendingReimage' | 'pendingDelete' | 'saved' | 'deletingCompute' | 'deleted' | 'lost' | 'reimagingCompute' | 'restartingAgent' | 'failedToStartPendingDelete' | 'failedToRestartPendingDelete' | 'failedVMPendingDelete' | 'assignedPendingDelete' | 'retryDelete' | 'unhealthyVm' | 'unhealthyVmPendingDelete';
    /**
     * Unique identifier since the agent and/or VM may be null
     */
    id?: number;
    /**
     * Computer name. Used to match a scaleset VM with an agent
     */
    name?: string;
    /**
     * Pool Id that this node belongs to
     */
    poolId?: number;
    /**
     * Last job RequestId assigned to this agent
     */
    requestId?: number;
    /**
     * State of the ElasticNode
     */
    state?: 'none' | 'new' | 'creatingCompute' | 'startingAgent' | 'idle' | 'assigned' | 'offline' | 'pendingReimage' | 'pendingDelete' | 'saved' | 'deletingCompute' | 'deleted' | 'lost' | 'reimagingCompute' | 'restartingAgent' | 'failedToStartPendingDelete' | 'failedToRestartPendingDelete' | 'failedVMPendingDelete' | 'assignedPendingDelete' | 'retryDelete' | 'unhealthyVm' | 'unhealthyVmPendingDelete';
    /**
     * Last state change. Only updated by SQL.
     */
    stateChangedOn?: string;
};

