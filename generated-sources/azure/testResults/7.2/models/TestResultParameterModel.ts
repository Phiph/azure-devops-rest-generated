/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Test parameter information in a test iteration.
 */
export type TestResultParameterModel = {
    /**
     * Test step path where parameter is referenced.
     */
    actionPath?: string;
    /**
     * Iteration ID.
     */
    iterationId?: number;
    /**
     * Name of parameter.
     */
    parameterName?: string;
    /**
     * This is step Id of test case. For shared step, it is step Id of shared step in test case workitem; step Id in shared step. Example: TestCase workitem has two steps: 1) Normal step with Id = 1 2) Shared Step with Id = 2. Inside shared step: a) Normal Step with Id = 1 Value for StepIdentifier for First step: "1" Second step: "2;1"
     */
    stepIdentifier?: string;
    /**
     * Url of test parameter. Deprecated in hosted environment.
     */
    url?: string;
    /**
     * Value of parameter.
     */
    value?: string;
};

