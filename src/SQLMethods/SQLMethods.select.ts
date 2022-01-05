import { queryModifierGenerator, SQLQueryModifier, SQLQueryWriter } from "../models/models.SQLQueryWriter";
import { SQLQuery } from "../SQLQueryWriter";

export module SQLMethods {

    export const select: queryModifierGenerator = (query: SQLQuery, ...args: Array<string> ): SQLQueryModifier => {

        const cols: string = args.length ? args.join(', ') : '*';

        query.base = "SELECT $cols$ FROM $tables$ $where$ $order$";

        query.parts.set("cols", cols);

        // TODO: generalizar
        //const queryModifier = new QueryModifier(query);

        const queryModifier: SQLQueryModifier = {
            where: SQLMethods.where(query),
            order: SQLMethods.order(query),
        }

        return queryModifier;
    }

    export const where: queryModifierGenerator = (query) => {
        const queryModifier: SQLQueryModifier = {
            //TODO
        }
        return queryModifier
    }

    export const order: queryModifierGenerator = (query) => {
        const queryModifier: SQLQueryModifier = {
            //TODO
        }
        return queryModifier
    }
}