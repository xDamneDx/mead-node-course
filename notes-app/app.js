const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    console.log(`Title: ${title}, Body: ${body}`);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note.");
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    console.log("Listing out all notes.");
  },
});

yargs.command({
  command: "read",
  describe: "Read a  note",
  handler: () => {
    console.log("Reading a note.");
  },
});

yargs.parse();
