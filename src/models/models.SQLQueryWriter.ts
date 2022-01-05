import { SQLQuery } from "../SQLQueryWriter";

export interface SQLQueryModifier {
    [index: string]: SQLMethods;
}

export type queryModifierGenerator = (singleton: SQLQuery) => SQLQueryModifier

export interface SQLMethods {
    select?: SQLQueryModifier;
    delete?: SQLQueryModifier;
    where?: SQLQueryModifier;
    asc?: SQLQueryModifier;
    desc?: SQLQueryModifier;
    //TODO: add any other SQL action we need
}

export interface SQLQueryWriter extends SQLMethods {
    build: Object; // The singleton
    tables?: string | null;
    base: string;
    parts: Map<string, string>;
    usable: boolean;
}
