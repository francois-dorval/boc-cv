const editJsonFile = require("edit-json-file");


let headline = process.env.HEADLINE;

console.log("HEADLINE : " + headline)
if (headline) {
    let file = editJsonFile(`${__dirname}/resume.json`);
    file.set("basics.label", headline);

    file.save();
}

