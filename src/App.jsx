import { useContext, useState } from 'react';
import AddNote from './Components/AddNote';
import './index.css';
import NoteContext from './store/note-context';
import UI from './Components/UI';

function App() {
  const [search,setSearch] = useState("");
  const ctx = useContext(NoteContext);

  const searchChangeHandler =(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  };
  const filteredData = ctx.notes.filter((note)=>   note.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Note Book</h1>
        <label htmlFor="search" className="block mb-2">
          Search Notes
        </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={searchChangeHandler}
          className="border border-gray-300 rounded px-3 py-2 mb-2"
        />
        <h3 className="mb-2">Total Notes - {ctx.notes.length}</h3>
        <h3 className="mb-2">Shown Notes - {filteredData.length}</h3>
        {!ctx.show && (
          <button
            onClick={ctx.showForm}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New Note
          </button>
        )}
        {ctx.show && <AddNote />}
        <UI props={filteredData} />
      </div>
    </div>
  );
}

export default App;
