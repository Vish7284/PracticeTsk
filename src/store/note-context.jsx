import React from "react"


const NoteContext = React.createContext({
  notes: [],
  addNotesHandler: () => {},
  removeHandler: () => {},
  showAddButton: () => {},
  showForm: () => {},

});

export default NoteContext;