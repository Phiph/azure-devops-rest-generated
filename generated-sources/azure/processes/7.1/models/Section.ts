/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from './Group';
/**
 * Defines a section of the work item form layout
 */
export type Section = {
    /**
     * List of child groups in this section
     */
    groups?: Array<Group>;
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden?: boolean;
};

