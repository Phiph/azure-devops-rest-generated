/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskAgentPoolReference = {
    id?: number;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted?: boolean;
    /**
     * Determines whether the pool is legacy.
     */
    isLegacy?: boolean;
    name?: string;
    /**
     * Additional pool settings and details
     */
    options?: 'none' | 'elasticPool' | 'singleUseAgents' | 'preserveAgentOnJobFailure';
    /**
     * Gets or sets the type of the pool
     */
    poolType?: 'automation' | 'deployment';
    scope?: string;
    /**
     * Gets the current size of the pool.
     */
    size?: number;
};

