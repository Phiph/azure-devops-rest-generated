/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Status of a Graph membership (active/inactive)
 */
export type GraphMembershipState = {
    /**
     * This field contains zero or more interesting links about the graph membership state. These links may be invoked to obtain additional relationships or more detailed information about this graph membership state.
     */
    _links?: ReferenceLinks;
    /**
     * When true, the membership is active
     */
    active?: boolean;
};

