/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Relationship between a container and a member
 */
export type GraphMembership = {
    /**
     * This field contains zero or more interesting links about the graph membership. These links may be invoked to obtain additional relationships or more detailed information about this graph membership.
     */
    _links?: ReferenceLinks;
    containerDescriptor?: string;
    memberDescriptor?: string;
};

