"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const IsTheAlertMessageVisible_1 = require("../../spec/screenplay/questions/common/IsTheAlertMessageVisible");
module.exports = function Common() {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.Then(/^he should see a alert message indicating "([^"]*)"$/, (message) => __awaiter(this, void 0, void 0, function* () {
            return this.stage.theActorInTheSpotlight().attemptsTo(yield IsTheAlertMessageVisible_1.IsTheAlertMessageVisible.reads(message));
        }));
    });
};
//# sourceMappingURL=common.steps.js.map