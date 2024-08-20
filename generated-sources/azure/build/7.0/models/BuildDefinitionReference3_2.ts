/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentPoolQueue } from './AgentPoolQueue';
import type { BuildMetric } from './BuildMetric';
import type { DefinitionReference } from './DefinitionReference';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export type BuildDefinitionReference3_2 = (DefinitionReference & {
    _links?: ReferenceLinks;
    /**
     * The author of the definition.
     */
    authoredBy?: IdentityRef;
    /**
     * A reference to the definition that this definition is a draft of, if this is a draft definition.
     */
    draftOf?: DefinitionReference;
    /**
     * The list of drafts associated with this definition, if this is not a draft definition.
     */
    drafts?: Array<DefinitionReference>;
    metrics?: Array<BuildMetric>;
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality?: 'definition' | 'draft';
    /**
     * The default queue for builds run against this definition.
     */
    queue?: AgentPoolQueue;
});

