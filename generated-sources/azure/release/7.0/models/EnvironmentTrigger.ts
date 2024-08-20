/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EnvironmentTrigger = {
    /**
     * Definition environment ID on which this trigger applicable.
     */
    definitionEnvironmentId?: number;
    /**
     * ReleaseDefinition ID on which this trigger applicable.
     */
    releaseDefinitionId?: number;
    /**
     * Gets or sets the trigger content.
     */
    triggerContent?: string;
    /**
     * Gets or sets the trigger type.
     */
    triggerType?: 'undefined' | 'deploymentGroupRedeploy' | 'rollbackRedeploy';
};

