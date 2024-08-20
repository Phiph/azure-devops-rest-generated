/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration } from './Configuration';
import type { SBOMFile } from './SBOMFile';
/**
 * The telemetry that is logged to a file/console for the given SBOM execution.
 */
export type SBOMTelemetry = {
    /**
     * All available bsi data from the task build execution which includes build and system environment variables like repository and build information.
     */
    bsiData?: Record<string, string>;
    /**
     * The source of the bsi data.
     */
    bsiSource?: string;
    /**
     * The end to end results of the extension task.
     */
    e2ETaskResult?: string;
    /**
     * A list of ConfigurationSetting`1 representing each input parameter used in the validation.
     */
    parameters?: Configuration;
    /**
     * The result of the execution
     */
    result?: string;
    /**
     * A list of the SBOM formats and related file properties that was used in the generation/validation of the SBOM.
     */
    sbomFormatsUsed?: Array<SBOMFile>;
    /**
     * Any internal switches and their value that were used during the execution. A switch can be something that was provided through a configuraiton or an environment variable.
     */
    switches?: Record<string, any>;
    /**
     * Error messages that came from the extension task.
     */
    taskErrorMessage?: string;
    /**
     * The name of the task that logged SBOM telemetry
     */
    taskName?: string;
    /**
     * The unique id for this telemetry
     */
    telemetryId?: string;
    /**
     * The result of the tool as a numeric value.
     */
    toolExecutionResult?: number;
};

