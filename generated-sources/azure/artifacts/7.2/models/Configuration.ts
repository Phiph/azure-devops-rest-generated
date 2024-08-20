/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationSetting } from './ConfigurationSetting';
/**
 * This holds the configuration for the ManifestTool. The values in this file are populated from the command line, config file and default.
 */
export type Configuration = {
    /**
     * Additional set of command-line arguments for Component Detector.
     */
    additionalComponentDetectorArgs?: ConfigurationSetting;
    /**
     * The folder containing the build components and packages.
     */
    buildComponentPath?: ConfigurationSetting;
    /**
     * The root folder of the drop directory to validate or generate.
     */
    buildDropPath?: ConfigurationSetting;
    /**
     * Full file name of a list file that contains all files to be validated.
     */
    buildListFile?: ConfigurationSetting;
    /**
     * The path of the signed catalog file used to validate the manifest.json.
     */
    catalogFilePath?: ConfigurationSetting;
    /**
     * The json file that contains the configuration for the DropValidator.
     */
    configFilePath?: ConfigurationSetting;
    /**
     * Comma separated list of docker image names or hashes to be scanned for packages, ex: ubuntu:16.04, 56bab49eef2ef07505f6a1b0d5bd3a601dfc3c76ad4460f24c91d6fa298369ab.
     */
    dockerImagesToScan?: ConfigurationSetting;
    /**
     * Full file path to a file that contains list of external SBOMs to be included as External document reference.
     */
    externalDocumentReferenceListFile?: ConfigurationSetting;
    /**
     * The Hash algorithm to use while verifying the hash value of a file.
     */
    hashAlgorithm?: ConfigurationSetting;
    /**
     * If set, will not fail validation on the files presented in Manifest but missing on the disk.
     */
    ignoreMissing?: ConfigurationSetting;
    /**
     * The root folder where the generated manifest (and other files like bsi.json) files will be placed. By default we will generate this folder in the same level as the build drop with the name '_manifest'
     */
    manifestDirPath?: ConfigurationSetting;
    /**
     * A list of name and version of the manifest that we are generating.
     */
    manifestInfo?: ConfigurationSetting;
    /**
     * The action currently being performed by the manifest tool.
     */
    manifestToolAction?: 'none' | 'validate' | 'generate' | 'all';
    /**
     * The name of the package this SBOM represents.
     */
    packageName?: ConfigurationSetting;
    /**
     * The version of the package this SBOM represents.
     */
    packageVersion?: ConfigurationSetting;
    /**
     * The number of parallel threads to use for the workflows.
     */
    parallelism?: ConfigurationSetting;
    /**
     * If you're downloading only a part of the drop using the '-r' or 'root' parameter in the drop client, specify the same string value here in order to skip validating paths that are not downloaded.
     */
    rootPathFilter?: ConfigurationSetting;
    /**
     * If specified, we will store the generated telemetry for the execution of the SBOM tool at this path.
     */
    telemetryFilePath?: ConfigurationSetting;
    /**
     * If set, will validate the manifest using the signed catalog file.
     */
    validateSignature?: ConfigurationSetting;
};

