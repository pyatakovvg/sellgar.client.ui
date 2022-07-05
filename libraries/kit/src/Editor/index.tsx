
import React from "react";
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';

import styles from './default.module.scss';


interface IProps {
  value: string;
}


function EditorHTML({ value }: IProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class: styles['content'],
      },
    },
    content: value,
    editable: false,
  });

  return (
    <EditorContent className={styles['wrapper']} editor={editor} />
  );
}


EditorHTML.defaultProps = {
  className: null,
  value: '',
}

export default EditorHTML;
