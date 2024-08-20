/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Class used for updating an elastic node where only certain members are populated
 */
export type ElasticNodeSettings = {
    /**
     * State of the ElasticNode
     */
    state?: 'none' | 'new' | 'creatingCompute' | 'startingAgent' | 'idle' | 'assigned' | 'offline' | 'pendingReimage' | 'pendingDelete' | 'saved' | 'deletingCompute' | 'deleted' | 'lost' | 'reimagingCompute' | 'restartingAgent' | 'failedToStartPendingDelete' | 'failedToRestartPendingDelete' | 'failedVMPendingDelete' | 'assignedPendingDelete' | 'retryDelete' | 'unhealthyVm' | 'unhealthyVmPendingDelete';
};

