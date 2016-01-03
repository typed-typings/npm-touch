declare function touch (filename: string, cb: (err: Error) => any): void;
declare function touch (filename: string, options: touch.Options, cb: (err: Error) => any): void;

declare namespace touch {

  export function sync (filename: string, options?: touch.Options): void;

  export function ftouch (filename: string, cb: (err: Error) => any): void;
  export function ftouch (filename: string, options: touch.Options, cb: (err: Error) => any): void;

  export function ftouchSync (filename: string, options?: touch.Options): void;

  export interface Options {
    force?: boolean;
    time?: Date | string | number;
    atime?: boolean | Date;
    mtime?: boolean | Date;
    ref?: string;
    nocreate?: boolean;
  }

}

export = touch;
