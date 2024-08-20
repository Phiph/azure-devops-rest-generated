/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedStepModel } from './SharedStepModel';
import type { TestResultModelBase } from './TestResultModelBase';
/**
 * Represents a test step result.
 */
export type TestActionResultModel = (TestResultModelBase & {
    /**
     * Path identifier for test step in test case workitem. Note: 1) It is represented in Hexadecimal format with 8 digits for a step. 2) Internally, the step ID value for first step starts with 2 so actionPath = 00000002 step 9, will have an ID = 10 and actionPath = 0000000a step 15, will have an ID =16 and actionPath = 00000010 3) actionPath of shared step is concatenated with the parent step of test case. Example, it would be something of type -  0000000300000001 where 00000003 denotes action path of test step and 00000001 denotes action path for shared step
     */
    actionPath?: string;
    /**
     * Iteration ID of test action result.
     */
    iterationId?: number;
    /**
     * Reference to shared step workitem.
     */
    sharedStepModel?: SharedStepModel;
    /**
     * This is step Id of test case. For shared step, it is step Id of shared step in test case workitem; step Id in shared step. Example: TestCase workitem has two steps: 1) Normal step with Id = 1 2) Shared Step with Id = 2. Inside shared step: a) Normal Step with Id = 1 Value for StepIdentifier for First step: "1" Second step: "2;1"
     */
    stepIdentifier?: string;
    /**
     * Url of test action result. Deprecated in hosted environment.
     */
    url?: string;
});

