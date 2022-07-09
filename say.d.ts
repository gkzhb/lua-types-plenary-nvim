/** @noResolution */
declare module 'say' {
  interface Say {
    _COPYRIGHT: string;
    _DESCRIPTION: string;
    _VERSION: string;

    set_namespace: (namespace: AnyNotNil) => void;
    set_fallback: (namespace: AnyNotNil) => void;
    set: (key: AnyNotNil, value: any) => void;

    _registry: LuaTable<AnyNotNil, LuaTable<AnyNotNil, any>>;

    // __index method
    get: LuaTableGetMethod<AnyNotNil, LuaTable<AnyNotNil, any> | null>;
  }
  // __call method
  const Say: (key: AnyNotNil, vars: LuaTable) => boolean | null;
  const s: Say;

  export = s;
}
