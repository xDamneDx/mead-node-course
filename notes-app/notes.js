const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);

    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length !== notes.length) {
    saveNotes(filteredNotes);

    console.log(`Note with title "${title}" was removed!`);
  } else {
    console.log("Nothing to remove here!");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (_) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log("Your notes:");
  notes.forEach((note, index) => console.log(`${index + 1} - ${note.title}`));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log(`No note wiith title "${title}" was found.`);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
