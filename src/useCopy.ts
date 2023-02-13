import { useEffect, useState } from "react";

export function copy(text: string) {
  const dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

export function useCopyHref(text: string) {
  const [isCopied, setCopied] = useState(false);

  //   useEffect(() => setCopied(false), [text]);

  return {
    isCopied,
    onCopy: () => {
      copy(text);
      setCopied(true);
    },
  };
}
