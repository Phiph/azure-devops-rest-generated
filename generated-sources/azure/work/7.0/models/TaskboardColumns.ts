/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskboardColumn } from './TaskboardColumn';
export type TaskboardColumns = {
    columns?: Array<TaskboardColumn>;
    /**
     * Are the columns cutomized for this team
     */
    isCustomized?: boolean;
    /**
     * Specifies if the referenced WIT and State is valid
     */
    isValid?: boolean;
    /**
     * Details of validation failure if the state to column mapping is invalid
     */
    validationMesssage?: string;
};

