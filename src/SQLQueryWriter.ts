import { SQLQueryWriter } from "./models/models.SQLQueryWriter";
import { SQLMethods } from "./SQLMethods/SQLMethods.select";

export class SQLQuery implements SQLQueryWriter {
    build = new SQLQuery();
    base = "";
    parts = new Map;
    usable = false;
    setTables(tables: string) {
        this.parts.set("tables", tables);
    };
    str() {
        if ( this.usable === false ) throw {
            message:"Query parameters undefined", name: "IncompleteSQLQuery"
        }
        let base = this.base;
        this.parts.forEach(
            (value, key) => base = base.replace(`$${key}$`, value)
        );
        return base
    };
    select = SQLMethods.select(this.build);
    //insert = ():SQLQueryModifier => SQLMethods.insert(this);
    //delete = ():SQLQueryModifier => SQLMethods.delete(this);
}