/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * High-level information about the publisher, like id's and names
 */
export type PublisherFacts = {
    displayName?: string;
    domain?: string;
    flags?: 'unChanged' | 'none' | 'disabled' | 'verified' | 'certified' | 'serviceFlags';
    isDomainVerified?: boolean;
    publisherId?: string;
    publisherName?: string;
};

