const yargs = require('yargs');
const notes = require('./phone_note.js');
yargs.command({
    command: 'add_branddetail',
    describe: "Adding a Phone details",
    builder: {
       brand_name: {
            describe: 'Brands_Name',
            demandOption: true,
            type: 'string'
        },
        model_name: {
            describe: 'Models_name',
            demandOption: true,
            type: 'string'
        },
       phone_configuration: {
            describe: 'Phones_configuration',
            demandOption: true,
            type: 'string'
        },
        phone_price: {
            describe: 'Phones_price',
            demandOption: true,
            type: 'number'
        },
        phone_colour: {
            describe: 'phones_colour',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addPhone_details(argv.brand_name, argv.model_name, argv.phone_configuration, argv.phone_price, argv.phone_colour);
    }
})
yargs.command({
    command: 'remove_phone',
    describe: "Removing a phone_details",
    builder: {
        brand_name: {
            describe: 'Brands_Name',
            demandOption: true,
            type: 'string'
        }
       
    },
    handler:function(argv){
        notes.removePhone_details(argv.brand_name);
    }
})
yargs.command({
    command : 'phone_details',
    describe: "Listing Phone details",
    handler: function(argv){
        notes.listPhone_details();		
    }
})
yargs.command({
    command : 'read_configuration',
    describe: "Reading a phone_configuration",
    builder: {
        Phones_configuration : {
            describe: 'Phones_configuration',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.readPhone_details(argv.phone_configuration);		
    }
})

yargs.parse();
