// This gives us the freedom of string, but with autocompletion of static type
declare type StringWithAutoComplete<T extends string> = T | (string & {});
