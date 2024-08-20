/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckConfigurationReference } from './CheckConfigurationReference';
export type WorkflowTask = {
    /**
     * Gets or sets as the task always run or not.
     */
    alwaysRun?: boolean;
    /**
     * Gets or sets the check configuration if check is injected as gate.
     */
    checkConfig?: CheckConfigurationReference;
    /**
     * Gets or sets the task condition.
     */
    condition?: string;
    /**
     * Gets or sets as the task continue run on error or not.
     */
    continueOnError?: boolean;
    /**
     * Gets or sets the task definition type. Example:- 'Agent', DeploymentGroup', 'Server' or 'ServerGate'.
     */
    definitionType?: string;
    /**
     * Gets or sets as the task enabled or not.
     */
    enabled?: boolean;
    /**
     * Gets or sets the task environment variables.
     */
    environment?: Record<string, string>;
    /**
     * Gets or sets the task inputs.
     */
    inputs?: Record<string, string>;
    /**
     * Gets or sets the name of the task.
     */
    name?: string;
    /**
     * Gets or sets the task override inputs.
     */
    overrideInputs?: Record<string, string>;
    /**
     * Gets or sets the reference name of the task.
     */
    refName?: string;
    /**
     * Gets or sets the task retryCount.
     */
    retryCountOnTaskFailure?: number;
    /**
     * Gets or sets the ID of the task.
     */
    taskId?: string;
    /**
     * Gets or sets the task timeout.
     */
    timeoutInMinutes?: number;
    /**
     * Gets or sets the version of the task.
     */
    version?: string;
};

