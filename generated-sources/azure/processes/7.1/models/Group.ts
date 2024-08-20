/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Control } from './Control';
import type { WitContribution } from './WitContribution';
/**
 * Represent a group in the form that holds controls in it.
 */
export type Group = {
    /**
     * Contribution for the group.
     */
    contribution?: WitContribution;
    /**
     * Controls to be put in the group.
     */
    controls?: Array<Control>;
    /**
     * The height for the contribution.
     */
    height?: number;
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited?: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution?: boolean;
    /**
     * Label for the group.
     */
    label?: string;
    /**
     * Order in which the group should appear in the section.
     */
    order?: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden?: boolean;
    /**
     * A value indicating if the group should be hidden or not.
     */
    visible?: boolean;
};

