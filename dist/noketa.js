"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Noketa = void 0;
const axios_1 = __importDefault(require("axios"));
class Noketa {
    constructor(apiKey) {
        this.contacts = {
            create: (payload) => __awaiter(this, void 0, void 0, function* () {
                return this.post("/contacts/create", payload);
            }),
        };
        if (!apiKey) {
            throw new Error("API key is required");
        }
        this.apiKey = apiKey;
    }
    post(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const url = `https://noketa.net/api/noketa${endpoint}`;
            const headers = { "Noketa-Secret": this.apiKey };
            try {
                const response = yield axios_1.default.post(url, data, { headers });
                return response.data;
            }
            catch (error) {
                throw new Error(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Request failed");
            }
        });
    }
}
exports.Noketa = Noketa;
