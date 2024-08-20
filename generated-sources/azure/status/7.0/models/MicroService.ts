/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MicroServiceScaleUnit } from './MicroServiceScaleUnit';
import type { Service } from './Service';
export type MicroService = {
    id?: string;
    name?: string;
    scaleUnits?: Array<MicroServiceScaleUnit>;
    services?: Array<Service>;
};

