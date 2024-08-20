/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestVariableCreateUpdateParameters } from './TestVariableCreateUpdateParameters';
/**
 * Test Variable
 */
export type TestVariable = (TestVariableCreateUpdateParameters & {
    /**
     * Id of the test variable
     */
    id?: number;
    /**
     * Id of the test variable
     */
    project?: TeamProjectReference;
});

