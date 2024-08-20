/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
export type ReleaseStartEnvironmentMetadata = {
    /**
     * Sets release definition environment id.
     */
    definitionEnvironmentId?: number;
    /**
     * Sets list of environments variables to be overridden at deployment time.
     */
    variables?: Record<string, ConfigurationVariableValue>;
};

