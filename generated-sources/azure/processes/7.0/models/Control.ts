/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WitContribution } from './WitContribution';
/**
 * Represent a control in the form.
 */
export type Control = {
    /**
     * Contribution for the control.
     */
    contribution?: WitContribution;
    /**
     * Type of the control.
     */
    controlType?: string;
    /**
     * Height of the control, for html controls.
     */
    height?: number;
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been inherited. from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited?: boolean;
    /**
     * A value indicating if the layout node is contribution or not.
     */
    isContribution?: boolean;
    /**
     * Label for the field.
     */
    label?: string;
    /**
     * Inner text of the control.
     */
    metadata?: string;
    /**
     * Order in which the control should appear in its group.
     */
    order?: number;
    /**
     * A value indicating whether this layout node has been overridden . by a child layout.
     */
    overridden?: boolean;
    /**
     * A value indicating if the control is readonly.
     */
    readOnly?: boolean;
    /**
     * A value indicating if the control should be hidden or not.
     */
    visible?: boolean;
    /**
     * Watermark text for the textbox.
     */
    watermark?: string;
};

