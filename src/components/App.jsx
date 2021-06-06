import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function entryDetails(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      names={emojiTerm.name}
      means={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(entryDetails)}</dl>
    </div>
  );
}

export default App;
