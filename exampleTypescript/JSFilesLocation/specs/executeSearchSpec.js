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
const searchPage_1 = require("../pages/searchPage");
const globalActivities_1 = require("../pages/globalActivities");
let searchPage = new searchPage_1.SearchPage();
let globalActivities = new globalActivities_1.GlobalActivities();
describe('Execute a search on Google', function () {
    beforeAll(() => {
        globalActivities.enterThePage("https://www.google.com.co/");
    });
    it('Search on Google', () => __awaiter(this, void 0, void 0, function* () {
        searchPage.setSearchParameter("gmail");
        searchPage.touchSearchGoogleButton();
        expect(yield searchPage.getResultTittle()).toEqual('Gmail - Google');
        expect(yield searchPage.getResultNameDescription()).toEqual("https://www.google.com/gmail/");
    }));
    it('Navigate to page researched', () => __awaiter(this, void 0, void 0, function* () {
        searchPage.enterTheResult("Gmail - Google");
        expect(yield globalActivities.getTitlePage()).toEqual("Gmail");
    }));
    afterAll(() => {
        globalActivities.closeBrowser();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVNlYXJjaFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9leGVjdXRlU2VhcmNoU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0RBQWlEO0FBQ2pELGdFQUE2RDtBQUc3RCxJQUFJLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUNsQyxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUU5QyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7SUFFbkMsU0FBUyxDQUFFLEdBQUcsRUFBRTtRQUNaLGdCQUFnQixDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEdBQVEsRUFBRTtRQUM3QixVQUFVLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFDLE1BQU0sVUFBVSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUMzRixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVEsRUFBRTtRQUN4QyxVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBRSxHQUFHLEVBQUU7UUFDWCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=