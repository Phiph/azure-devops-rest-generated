/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Control } from './Control';
import type { Extension } from './Extension';
import type { Page } from './Page';
/**
 * Describes the layout of a work item type
 */
export type FormLayout = {
    /**
     * Gets and sets extensions list.
     */
    extensions?: Array<Extension>;
    /**
     * Top level tabs of the layout.
     */
    pages?: Array<Page>;
    /**
     * Headers controls of the layout.
     */
    systemControls?: Array<Control>;
};

