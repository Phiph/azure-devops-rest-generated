/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardColumn } from './BoardColumn';
import type { BoardFields } from './BoardFields';
import type { BoardReference } from './BoardReference';
import type { BoardRow } from './BoardRow';
import type { ReferenceLinks } from './ReferenceLinks';
export type Board = (BoardReference & {
    _links?: ReferenceLinks;
    allowedMappings?: Record<string, Record<string, Array<string>>>;
    canEdit?: boolean;
    columns?: Array<BoardColumn>;
    fields?: BoardFields;
    isValid?: boolean;
    revision?: number;
    rows?: Array<BoardRow>;
});

