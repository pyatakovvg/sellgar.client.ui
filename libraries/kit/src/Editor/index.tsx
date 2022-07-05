
import React from "react";
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';



interface IProps {
  value: string;
}


function EditorHTML({ value }: IProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: value,
  });

  return (
    <EditorContent editor={editor} />
  );
}


EditorHTML.defaultProps = {
  className: null,
  value: '',
}

export default EditorHTML;
