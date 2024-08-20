/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BoardColumn = {
    columnType?: 'incoming' | 'inProgress' | 'outgoing';
    description?: string;
    id?: string;
    isSplit?: boolean;
    itemLimit?: number;
    name?: string;
    stateMappings?: Record<string, string>;
};

