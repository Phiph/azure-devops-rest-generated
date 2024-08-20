/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { VariableGroupProjectReference } from './VariableGroupProjectReference';
import type { VariableGroupProviderData } from './VariableGroupProviderData';
import type { VariableValue } from './VariableValue';
export type VariableGroup = {
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets or sets description.
     */
    description?: string;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Denotes if a variable group is shared with other project or not.
     */
    isShared?: boolean;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets or sets name.
     */
    name?: string;
    /**
     * Gets or sets provider data.
     */
    providerData?: VariableGroupProviderData;
    /**
     * Gets or sets type.
     */
    type?: string;
    /**
     * all project references where the variable group is shared with other projects.
     */
    variableGroupProjectReferences?: Array<VariableGroupProjectReference>;
    /**
     * Gets and sets the dictionary of variables.
     */
    variables?: Record<string, VariableValue>;
};

