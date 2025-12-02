"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import $ from "jquery";
import "summernote/dist/summernote-lite.js";
import "summernote/dist/summernote-lite.css";

interface EditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export default function SummernoteEditor({
  initialValue = "",
  onChange = () => { },
}: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const $el = $(editorRef.current) as any;

    // Initialize Summernote
    $el.summernote({
      height: 200,
      placeholder: "Write description...",
      toolbar: [
        ["style", ["bold", "italic", "underline"]],
        ["para", ["ul", "ol"]],
        ["insert", ["link"]],
        ["misc", ["undo", "redo"]],
      ],
      callbacks: {
        onChange: function (contents: string) {
          onChange(contents);
        },
      },
    });

    // Set initial value
    $el.summernote("code", initialValue);

    return () => {
      try {
        $el.summernote("destroy");
      } catch { }
    };
  }, []);

  return <div ref={editorRef}></div>;
}
