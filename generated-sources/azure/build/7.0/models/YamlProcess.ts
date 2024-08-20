/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildProcess } from './BuildProcess';
import type { BuildProcessResources } from './BuildProcessResources';
/**
 * Represents a YAML process.
 */
export type YamlProcess = (BuildProcess & {
    errors?: Array<string>;
    /**
     * The resources used by the build definition.
     */
    resources?: BuildProcessResources;
    /**
     * The YAML filename.
     */
    yamlFilename?: string;
});

