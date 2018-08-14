"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const LoginPage_1 = require("../../user_interface/LoginPage");
exports.IsTheMessageErrorVisible = ({
    reads: (expectedMessage) => __awaiter(this, void 0, void 0, function* () {
        return screenplay_protractor_1.Task.where(`#actor checks if the message error reads ${expectedMessage}`, yield screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(LoginPage_1.LoginPage.messageError), assertions_1.equals(expectedMessage)));
    }),
});
//# sourceMappingURL=IsTheMessegeErrorVisible.js.map