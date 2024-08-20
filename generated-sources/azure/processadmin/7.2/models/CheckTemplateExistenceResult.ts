/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes result of a check template existence request.
 */
export type CheckTemplateExistenceResult = {
    /**
     * Indicates whether a template exists.
     */
    doesTemplateExist?: boolean;
    /**
     * The name of the existing template.
     */
    existingTemplateName?: string;
    /**
     * The existing template type identifier.
     */
    existingTemplateTypeId?: string;
    /**
     * The name of the requested template.
     */
    requestedTemplateName?: string;
};

