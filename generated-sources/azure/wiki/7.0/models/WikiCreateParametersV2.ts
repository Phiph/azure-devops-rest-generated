/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitVersionDescriptor } from './GitVersionDescriptor';
import type { WikiCreateBaseParameters } from './WikiCreateBaseParameters';
/**
 * Wiki creation parameters.
 */
export type WikiCreateParametersV2 = (WikiCreateBaseParameters & {
    /**
     * Version of the wiki. Not required for ProjectWiki type.
     */
    version?: GitVersionDescriptor;
});

