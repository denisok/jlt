/*jslint white: false, onevar: false
*/
/*global Mojo $
*/

function AboutAssistant() {
    Mojo.Log.info("About()");

    this.buildDate = new Date(Mojo.loadJSONFile(Mojo.appPath + "build_date.json"));
}

AboutAssistant.prototype.setup = function() {
    this.SC = Mojo.Controller.stageController.assistant;
    this.menuSetup = this.SC.menuSetup.bind(this);
    this.menuSetup();

    this.controller.get("build-date").update(
        "This instance was built on " + this.buildDate.toLocaleString() + "."
    );
};

Mojo.Log.info('loaded(About.js)');
