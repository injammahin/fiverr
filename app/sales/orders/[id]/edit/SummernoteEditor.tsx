"use client";

import { useEffect, useRef, useState } from "react";
import "summernote/dist/summernote-lite.css";
// @ts-ignore
import $ from "jquery";
import "summernote/dist/summernote-lite.js";

export default function SummernoteEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const editorRef = useRef<any>(null);
  const ignoreUpdate = useRef(false); // 👈 prevent mirroring

  useEffect(() => {
    if (!editorRef.current) return;

    $(editorRef.current).summernote({
      placeholder: "Write description...",
      tabsize: 2,
      height: 180,
      callbacks: {
        onChange: function (contents: string) {
          ignoreUpdate.current = true;    // 👈 this update comes from Summernote
          onChange && onChange(contents);
        },
      },
    });

    $(editorRef.current).summernote("code", value || "");

    return () => {
      $(editorRef.current).summernote("destroy");
    };
  }, []);

  // Update editor when value changes externally
  useEffect(() => {
    // Prevent resetting editor while user types
    if (ignoreUpdate.current) {
      ignoreUpdate.current = false;
      return;
    }

    if (editorRef.current) {
      $(editorRef.current).summernote("code", value || "");
    }
  }, [value]);

  return <div ref={editorRef}></div>;
}
