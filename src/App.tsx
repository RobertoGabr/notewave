import { useState } from "react";
import { NewNoteCard } from "./assets/components/new-notecard";
import { NoteCard } from "./assets/components/note-card";
import logo from "./assets/logo-expert.svg";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }
    return [];
  });

  function onNoteCreate(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];
    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700"></div>

      <div className="grid gap-6 grid-cols-3 auto-rows-[250px]">
        <NewNoteCard onNoteCreate={onNoteCreate} />

        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
