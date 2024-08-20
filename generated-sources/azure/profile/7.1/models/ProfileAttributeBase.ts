/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttributeDescriptor } from './AttributeDescriptor';
export type ProfileAttributeBase = {
    /**
     * The descriptor of the attribute.
     */
    descriptor?: AttributeDescriptor;
    /**
     * The revision number of the attribute.
     */
    revision?: number;
    /**
     * The time the attribute was last changed.
     */
    timeStamp?: string;
    /**
     * The value of the attribute.
     */
    value?: string;
};

