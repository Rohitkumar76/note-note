const fs = require('fs');
const chalk = require('chalk');
const addPhone_details = function(brand_name, model_name,phone_configuration,phone_price,phone_colour)
{
const notes = loadPhone_details();
const duplicateNotes = notes.filter(function (note) 
{
return note.brand_name === brand_name;
});
if(duplicateNotes.length === 0)
{
notes.push({ brand_name: brand_name,model_name: model_name,phone_configuration:phone_configuration,phone_price:phone_price,phone_colour:phone_colour })
saveNotes(notes);
console.log('\nNew Phone details Added Successfully!!!\n');
}
else
{
console.log("\n Brands_Name already existed!!!\n");
}
}
const removePhone_details = function(brand_name)
{
    const notes = loadPhone_details()
    const notesToKeep = notes.filter(function (note) 
    {
        return note.brand_name !== brand_name
    })
    if (notes.length > notesToKeep.length) 
    {
        console.log(chalk.green.inverse('Removed phone_details'));
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(chalk.red.inverse('No phone_details found'));
    }
}

const listPhone_details = function()
{
    const notes = loadPhone_details()
    
    console.log(chalk.green.inverse(" <= Phone_details => "));

    notes.forEach((note) => 
    {
        console.log("brand_name : " + chalk.red(note.brand_name) + " model_name : " + chalk.blue(note.model_name) + " phone_configuration: " + chalk.blue(note.phone_configuration) + " phone_price : " + chalk.blue(note.phone_price) + " phone_colour : " + chalk.blue(note.phone_colour))
    });
}

const readPhone_details = function(phone_configuration)
{
    const notes = loadPhone_details();
    const note = notes.find((note) => note.phone_configuration === phone_configuration)
    
    if(note)
    {
        console.log( chalk.blue(note.phone_configuration));
    }
    else
    {
        console.log(chalk.red.inverse("phone_detail Not Found!"));
    }
}
const loadPhone_details = function() 
{
const dataBuffer = fs.readFileSync('phone_note.json');
const dataJSON = dataBuffer.toString();
return JSON.parse(dataJSON);
}
const saveNotes = function(notes) 
{
const dataJSON = JSON.stringify(notes);
fs.writeFileSync('phone_note.json', dataJSON);
}
module.exports = 
{
addPhone_details : addPhone_details,
removePhone_details : removePhone_details,
listPhone_details : listPhone_details,
readPhone_details : readPhone_details
}