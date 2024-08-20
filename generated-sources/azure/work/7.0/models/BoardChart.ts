/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardChartReference } from './BoardChartReference';
import type { ReferenceLinks } from './ReferenceLinks';
export type BoardChart = (BoardChartReference & {
    /**
     * The links for the resource
     */
    _links?: ReferenceLinks;
    /**
     * The settings for the resource
     */
    settings?: Record<string, any>;
});

