/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestActionResultModel } from './TestActionResultModel';
import type { TestCaseResultUpdateModel } from './TestCaseResultUpdateModel';
import type { TestResultParameterModel } from './TestResultParameterModel';
export type ResultUpdateRequestModel = {
    actionResultDeletes?: Array<TestActionResultModel>;
    actionResults?: Array<TestActionResultModel>;
    parameterDeletes?: Array<TestResultParameterModel>;
    parameters?: Array<TestResultParameterModel>;
    testCaseResult?: TestCaseResultUpdateModel;
};

