function organizeFn(dirPath) {
//console.log("organize command implemented for", dirPath);

//If no directory path is provided we output message
let destPath;
if(dirPath == undefined) {
    console.log("Directory path cannot be empty");
    return;
}
else {
    //If directory path provided is correct
    if(fs.existsSync(dirPath) == true) {
        destPath = path.join(dirPath, "organized files");
        //if the new folder named "organized files" doesn't exist create it
        if(fs.existsSync(destPath) == false) {
            fs.mkdirSync(destPath);
        }
    }
    //If directory path provided is incorrect
    else {
        console.log("Please enter a valid path");
    }
}
//helper function to fetch all category of files present in the directory
organizeHelper(dirPath, destPath);
}
function organizeHelper(src, dest) {
    //Store all files and folder names in an array
    let childNames = fs.readdirSync(src);
    //console.log(childNames);
    for(let i = 0; i < childNames.length; i++) {
        let childPath = path.join(src, childNames[i]);
        if(fs.lstatSync(childPath).isFile()) {
            //console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            //console.log(`${childNames[i]} belong to category--> ${category}`);
            sendFiles(childPath, dest, category);
        }
    }
}
