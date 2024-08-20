/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Section } from './Section';
import type { WitContribution } from './WitContribution';
/**
 * Describes a page in the work item form layout
 */
export type Page = {
    /**
     * Contribution for the page.
     */
    contribution?: WitContribution;
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
     * The label for the page.
     */
    label?: string;
    /**
     * A value indicating whether any user operations are permitted on this page and the contents of this page
     */
    locked?: boolean;
    /**
     * Order in which the page should appear in the layout.
     */
    order?: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden?: boolean;
    /**
     * The icon for the page.
     */
    pageType?: 'custom' | 'history' | 'links' | 'attachments';
    /**
     * The sections of the page.
     */
    sections?: Array<Section>;
    /**
     * A value indicating if the page should be hidden or not.
     */
    visible?: boolean;
};

