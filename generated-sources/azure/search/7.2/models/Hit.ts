/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes the position of a piece of text in a document.
 */
export type Hit = {
    /**
     * Gets or sets the start character offset of a piece of text.
     */
    charOffset?: number;
    /**
     * Gets or sets an extract of code where the match appears. Usually it is the line where there is the match.
     */
    codeSnippet?: string;
    /**
     * Gets or sets the column number where the match appears in the line.
     */
    column?: number;
    /**
     * Gets or sets the length of a piece of text.
     */
    length?: number;
    /**
     * Gets or sets the line number where the match appears in the file.
     */
    line?: number;
    /**
     * Gets or sets the name of type of a piece of text.
     */
    type?: string;
};

