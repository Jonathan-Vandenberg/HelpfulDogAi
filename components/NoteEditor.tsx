import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import React from "react";

export default function NoteEditor({ code }: { code: string }) {
  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <CodeMirror
          value={code}
          width="90vw"
          height="50vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          className="border border-gray-300"
        />
      </div>
    </div>
  );
}
