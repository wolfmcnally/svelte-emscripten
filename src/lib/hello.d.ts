/// <reference types="emscripten" />

export interface HelloModule extends EmscriptenModule {
    // Module.cwrap() will be available by doing this.
    // Requires -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap']"
    cwrap: typeof cwrap;
    // Exported from add.cpp
    // Requires "EXPORTED_FUNCTIONS=['_add']"
    // _int_sqrt(x: number): number;
    // _add(a: number, b: number): number;
    // or using cwrap. See below
    int_sqrt(x: number): number;
    add(a: number, b: number): number;
    print_u8(n: number): void;
    increment_u8(n: number): void;
    print_u16(n: number): void;
    print_u8_array(a: number[]): void;
    return_string(): string;
    reverse(a: number[]): number[];
    sha256(s: string): Uint8Array;
    data_to_hex(data: Uint8Array): string;
    hex_to_data(hex: string): Uint8Array|null;
}

export default function instantiate_hello(mod?: any): Promise<HelloModule>;
