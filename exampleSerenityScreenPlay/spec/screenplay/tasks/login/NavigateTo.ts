import { Task, Click } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../user_interface/LoginPage';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

export const NavigateTo = ({

    registerLink: async () => Task.where(`#actor navigate to register page`,
        await Click.on(LoginPage.registerLink)
    ),
    
});