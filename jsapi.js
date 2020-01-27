import * as wasm from './jsapi_bg.wasm';

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
/**
* @returns {any}
*/
export function new_js_map() {
    var ret = wasm.new_js_map();
    return takeObject(ret);
}

/**
* @returns {any}
*/
export function set_get_js_map() {
    var ret = wasm.set_get_js_map();
    return takeObject(ret);
}

/**
* @returns {number}
*/
export function run_through_map() {
    var ret = wasm.run_through_map();
    return ret;
}

function __wbg_adapter_13(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h64437ff1fdb2984a(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

export const __wbindgen_number_new = function(arg0) {
    var ret = arg0;
    return addHeapObject(ret);
};

export const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbg_forEach_30f5206bedab8271 = function(arg0, arg1, arg2) {
    try {
        var state0 = {a: arg1, b: arg2};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_13(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        getObject(arg0).forEach(cb0);
    } finally {
        state0.a = state0.b = 0;
    }
};

export const __wbg_get_8cfa183ec5c83163 = function(arg0, arg1) {
    var ret = getObject(arg0).get(getObject(arg1));
    return addHeapObject(ret);
};

export const __wbg_new_0473130a23fff03d = function() {
    var ret = new Map();
    return addHeapObject(ret);
};

export const __wbg_set_72b4899cab9b0020 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

export const __wbindgen_number_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

