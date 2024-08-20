/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
import type { XamlBuildControllerReference } from './XamlBuildControllerReference';
export type BuildController = (XamlBuildControllerReference & {
    _links?: ReferenceLinks;
    /**
     * The date the controller was created.
     */
    createdDate?: string;
    /**
     * The description of the controller.
     */
    description?: string;
    /**
     * Indicates whether the controller is enabled.
     */
    enabled?: boolean;
    /**
     * The status of the controller.
     */
    status?: 'unavailable' | 'available' | 'offline';
    /**
     * The date the controller was last updated.
     */
    updatedDate?: string;
    /**
     * The controller's URI.
     */
    uri?: string;
});

