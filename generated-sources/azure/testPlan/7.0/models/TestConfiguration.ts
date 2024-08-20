/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestConfigurationCreateUpdateParameters } from './TestConfigurationCreateUpdateParameters';
/**
 * Test configuration
 */
export type TestConfiguration = (TestConfigurationCreateUpdateParameters & {
    /**
     * Id of the configuration
     */
    id?: number;
    /**
     * Id of the test configuration variable
     */
    project?: TeamProjectReference;
});

