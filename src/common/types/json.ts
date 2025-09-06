type JsonValuePrimitive = string | number | boolean | null;
type JsonValuePrimitiveInput = JsonValuePrimitive | undefined;

type Json<T> = T | Json<T>[] | { [key: string]: Json<T> };

export type JsonValue = Json<JsonValuePrimitive>;
export type JsonValueInput = Json<JsonValuePrimitiveInput>;
