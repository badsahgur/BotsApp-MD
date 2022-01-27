var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Strings = require("../lib/db");
var ADMINS = Strings.admins;
var inputSanitization = require("../sidekick/input-sanitization");
var TRANSPORT = require('../core/transmission');
module.exports = {
    name: "admins",
    description: ADMINS.DESCRIPTION,
    extendedDescription: ADMINS.EXTENDED_DESCRIPTION,
    demo: { text: ".admins", isEnabled: true },
    handle: function (client, chat, BotsApp, args) {
        return __awaiter(this, void 0, void 0, function () {
            var message, _a, _b, admin, number, err_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, , 8]);
                        if (!!BotsApp.isGroup) return [3 /*break*/, 2];
                        return [4 /*yield*/, TRANSPORT.sendMessageWTyping(client, chat, { text: ADMINS.NOT_GROUP_CHAT }).catch(function (err) { return inputSanitization.handleError(err, client, BotsApp); })];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                    case 2:
                        message = "";
                        try {
                            for (_a = __values(BotsApp.groupAdmins), _b = _a.next(); !_b.done; _b = _a.next()) {
                                admin = _b.value;
                                number = admin.split("@")[0];
                                message += "@".concat(number, " ");
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!!BotsApp.isReply) return [3 /*break*/, 4];
                        return [4 /*yield*/, TRANSPORT.sendMessageWTyping(client, chat, {
                                text: message,
                                contextInfo: {
                                    mentionedJid: BotsApp.groupAdmins
                                }
                            }).catch(function (err) { return inputSanitization.handleError(err, client, BotsApp); })];
                    case 3: return [2 /*return*/, _d.sent()];
                    case 4: return [4 /*yield*/, TRANSPORT.sendMessageWTyping(client, chat, { text: message,
                            contextInfo: {
                                stanzaId: BotsApp.replyMessageId,
                                participant: BotsApp.replyParticipant,
                                quotedMessage: {
                                    conversation: BotsApp.replyMessage
                                },
                                mentionedJid: BotsApp.groupAdmins
                            } }).catch(function (err) { return inputSanitization.handleError(err, client, BotsApp); })];
                    case 5:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        err_1 = _d.sent();
                        return [4 /*yield*/, inputSanitization.handleError(err_1, client, BotsApp)];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    },
};