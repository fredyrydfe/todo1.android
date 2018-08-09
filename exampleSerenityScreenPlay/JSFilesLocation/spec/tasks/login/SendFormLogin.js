"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const LoginPage_1 = require("../../user_interface/LoginPage");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
exports.SendFormLogin = ({
    withNoneInformation: (parameter) => screenplay_protractor_1.Task.where(`#actor send the form login with ${parameter} information`, screenplay_protractor_1.Clear.theValueOf(LoginPage_1.LoginPage.usernameField), screenplay_protractor_1.Clear.theValueOf(LoginPage_1.LoginPage.passwordField), screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.loginButton)),
    withWrongInformation: (parameter) => screenplay_protractor_1.Task.where(`#actor send the form login with ${parameter} information`, screenplay_protractor_1.Enter.theValue(users.wrong.username).into(LoginPage_1.LoginPage.usernameField), screenplay_protractor_1.Enter.theValue(users.wrong.password).into(LoginPage_1.LoginPage.passwordField), screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.loginButton)),
    withRightInformation: (parameter) => screenplay_protractor_1.Task.where(`#actor send the form login with ${parameter} information`, screenplay_protractor_1.Enter.theValue(users.right.username).into(LoginPage_1.LoginPage.usernameField), screenplay_protractor_1.Enter.theValue(users.right.password).into(LoginPage_1.LoginPage.passwordField), screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.loginButton)),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZEZvcm1Mb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwZWMvdGFza3MvbG9naW4vU2VuZEZvcm1Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlGQUFrRjtBQUNsRiw4REFBMkQ7QUFDM0QseUJBQXlCO0FBRXpCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRTFELFFBQUEsYUFBYSxHQUFHLENBQUM7SUFFMUIsbUJBQW1CLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsU0FBUyxjQUFjLEVBQzdHLDZCQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLEVBQ3pDLDZCQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLEVBQ3pDLDZCQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQ2xDO0lBRUQsb0JBQW9CLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsU0FBUyxjQUFjLEVBQzlHLDZCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2xFLDZCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2xFLDZCQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQ2xDO0lBRUQsb0JBQW9CLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsU0FBUyxjQUFjLEVBQzlHLDZCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2xFLDZCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2xFLDZCQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQ2xDO0NBRUosQ0FBQyxDQUFDIn0=