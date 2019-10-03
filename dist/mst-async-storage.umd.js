(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mobx-state-tree')) :
    typeof define === 'function' && define.amd ? define(['exports', 'mobx-state-tree'], factory) :
    (global = global || self, factory(global.mstAsyncStorage = {}, global.mobxStateTree));
}(this, function (exports, mobxStateTree) { 'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var AsyncStorage = require("@react-native-community/async-storage");
    var CryptoJS = require("crypto-js");
    function save(key, snapshot, cryptoPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.stringify(snapshot);
                        return [4, AsyncStorage.setItem(key, CryptoJS.AES.encrypt(data, cryptoPassword).toString())];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    }
    function load(key, cryptoPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var raw, bytes, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, AsyncStorage.getItem(key)];
                    case 1:
                        raw = _b.sent();
                        if (raw) {
                            bytes = CryptoJS.AES.decrypt(raw, cryptoPassword);
                            data = bytes.toString(CryptoJS.enc.Utf8);
                            return [2, JSON.parse(data)];
                        }
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        console.log('erreur');
                        return [3, 3];
                    case 3: return [2, undefined];
                }
            });
        });
    }

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var withAsyncStorage = function (options) {
        if (options === void 0) { options = {}; }
        return function (self) {
            var disposer;
            var key = options.key || mobxStateTree.getType(self).name;
            var autoSave = typeof options.autoSave === "boolean" ? options.autoSave : true;
            var Password = options.CryptoPassword || "DefaultPassword";
            var enableSaving = function () {
                disposer && disposer();
                disposer = mobxStateTree.onSnapshot(self, function (snapshot) { return save(key, filterSnapshotKeys(snapshot), Password); });
            };
            function filterSnapshotKeys(snapshot) {
                if (!snapshot)
                    return snapshot;
                var filterOnly = (typeof options.only === "string"
                    ? [options.only]
                    : options.only || []).filter(Boolean);
                var filterExcept = (typeof options.except === "string"
                    ? [options.except]
                    : options.except || []).filter(Boolean);
                if (filterOnly.length === 0 && filterExcept.length === 0)
                    return snapshot;
                var result = {};
                if (filterOnly.length > 0) {
                    filterOnly.forEach(function (key) {
                        result[key] = snapshot[key];
                    });
                }
                else if (filterExcept.length > 0) {
                    result = __assign({}, snapshot);
                    filterExcept.forEach(function (key) {
                        delete result[key];
                    });
                }
                return result;
            }
            return {
                actions: {
                    load: mobxStateTree.flow(function () {
                        var data;
                        return __generator$1(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, load(key, Password)];
                                case 1:
                                    data = _a.sent();
                                    if (data) {
                                        mobxStateTree.applySnapshot(self, data);
                                    }
                                    if (autoSave) {
                                        enableSaving();
                                    }
                                    return [2, data];
                            }
                        });
                    }),
                    save: mobxStateTree.flow(function () {
                        return __generator$1(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, save(key, filterSnapshotKeys(mobxStateTree.getSnapshot(self)), Password)];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    }),
                    beforeDetach: function () {
                        disposer && disposer();
                    },
                },
            };
        };
    };

    exports.withAsyncStorage = withAsyncStorage;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mst-async-storage.umd.js.map
