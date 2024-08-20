/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a update work item type template request body.
 */
export type WorkItemTypeTemplateUpdateModel = {
    /**
     * Describes the type of the action for the update request.
     */
    actionType?: 'import' | 'validate';
    /**
     * Methodology to which the template belongs, eg. Agile, Scrum, CMMI.
     */
    methodology?: string;
    /**
     * String representation of the work item type template.
     */
    template?: string;
    /**
     * The type of the template described in the request body.
     */
    templateType?: 'workItemType' | 'globalWorkflow';
};

