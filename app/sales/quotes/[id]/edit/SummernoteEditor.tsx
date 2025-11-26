"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import $ from "jquery";
import "summernote/dist/summernote-lite.js";
import "summernote/dist/summernote-lite.css";

export default function SummernoteEditor() {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Initialize Summernote
    ($(editorRef.current) as any).summernote({
      height: 200,
      placeholder: "Write description...",
      toolbar: [
        ["style", ["bold", "italic", "underline"]],
        ["para", ["ul", "ol"]],
        ["insert", ["link"]],
        ["misc", ["undo", "redo"]],
      ],
    });

    return () => {
      try {
        ($(editorRef.current) as any).summernote("destroy");
      } catch (e) {}
    };
  }, []);

  return <div ref={editorRef}></div>;
}
