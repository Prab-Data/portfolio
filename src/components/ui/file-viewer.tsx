"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronRight,
  Copy,
  FileCode,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react";

export type ViewerFile = { path: string; content: string };

type Node = { name: string; path: string; isFile: boolean; children: Node[] };

function buildTree(files: ViewerFile[]): Node[] {
  const root: Node = { name: "", path: "", isFile: false, children: [] };
  for (const f of files) {
    const parts = f.path.split("/");
    let cur = root;
    parts.forEach((part, i) => {
      const isLeaf = i === parts.length - 1;
      const path = parts.slice(0, i + 1).join("/");
      let next = cur.children.find((c) => c.name === part);
      if (!next) {
        next = { name: part, path, isFile: isLeaf, children: [] };
        cur.children.push(next);
      }
      cur = next;
    });
  }
  return root.children;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function highlightLine(line: string, lang: string): string {
  if (line === "") return "&nbsp;";
  if (lang === "md") {
    if (/^#{1,6}\s/.test(line)) return `<span class="tok-k">${esc(line)}</span>`;
    if (/^\s*[-*]\s/.test(line))
      return esc(line).replace(/^(\s*[-*]\s)/, '<span class="tok-key">$1</span>');
    return esc(line);
  }
  const re =
    /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(export|const|let|var|return|import|from|default|type|interface|true|false|null|async|await|new|function)\b|\b(\d+(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)(?=\s*:)/g;
  return esc(line).replace(re, (m, c, s, k, n, key) => {
    if (c) return `<span class="tok-c">${c}</span>`;
    if (s) return `<span class="tok-s">${s}</span>`;
    if (k) return `<span class="tok-k">${k}</span>`;
    if (n) return `<span class="tok-n">${n}</span>`;
    if (key) return `<span class="tok-key">${key}</span>`;
    return m;
  });
}

const fileType = (p: string) => (p.split(".").pop() || "txt").toUpperCase();

function TreeNodes({
  nodes,
  depth,
  expanded,
  toggle,
  selected,
  onSelect,
}: {
  nodes: Node[];
  depth: number;
  expanded: Set<string>;
  toggle: (p: string) => void;
  selected?: string;
  onSelect: (p: string) => void;
}) {
  return (
    <>
      {nodes.map((node) =>
        node.isFile ? (
          <button
            key={node.path}
            onClick={() => onSelect(node.path)}
            style={{ paddingLeft: depth * 14 + 8 }}
            className={`flex w-full cursor-pointer items-center gap-1.5 rounded-md py-1 pr-2 text-left text-[13px] transition-colors ${
              selected === node.path
                ? "bg-white/[0.07] text-foreground"
                : "text-muted hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <FileCode size={14} className="shrink-0 text-cyan" />
            <span className="truncate">{node.name}</span>
          </button>
        ) : (
          <div key={node.path}>
            <button
              onClick={() => toggle(node.path)}
              style={{ paddingLeft: depth * 14 + 8 }}
              className="flex w-full cursor-pointer items-center gap-1 rounded-md py-1 pr-2 text-[13px] text-foreground/90 transition-colors hover:bg-white/5"
            >
              <ChevronRight
                size={13}
                className={`shrink-0 text-muted-2 transition-transform ${
                  expanded.has(node.path) ? "rotate-90" : ""
                }`}
              />
              {expanded.has(node.path) ? (
                <FolderOpenIcon size={14} className="shrink-0 text-violet" />
              ) : (
                <FolderIcon size={14} className="shrink-0 text-violet" />
              )}
              <span className="truncate">{node.name}</span>
            </button>
            {expanded.has(node.path) && (
              <TreeNodes
                nodes={node.children}
                depth={depth + 1}
                expanded={expanded}
                toggle={toggle}
                selected={selected}
                onSelect={onSelect}
              />
            )}
          </div>
        )
      )}
    </>
  );
}

export function FileViewer({
  files,
  title = "explorer",
}: {
  files: ViewerFile[];
  title?: string;
}) {
  const tree = useMemo(() => buildTree(files), [files]);
  const allFolders = useMemo(() => {
    const s = new Set<string>();
    const walk = (ns: Node[]) =>
      ns.forEach((n) => {
        if (!n.isFile) {
          s.add(n.path);
          walk(n.children);
        }
      });
    walk(tree);
    return s;
  }, [tree]);

  const [expanded, setExpanded] = useState<Set<string>>(allFolders);
  const [selected, setSelected] = useState<string>(files[0]?.path);
  const [copied, setCopied] = useState(false);

  const toggle = (p: string) =>
    setExpanded((prev) => {
      const n = new Set(prev);
      n.has(p) ? n.delete(p) : n.add(p);
      return n;
    });

  const current = files.find((f) => f.path === selected) ?? files[0];
  const lang = (current?.path.split(".").pop() || "txt").toLowerCase();
  const lines = (current?.content ?? "").split("\n");

  const copy = async () => {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div
      className="grid h-[480px] grid-rows-[200px_1fr] overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[minmax(0,230px)_1fr] md:grid-rows-1"
    >
      {/* sidebar / file tree */}
      <div className="flex flex-col overflow-hidden border-b border-border md:border-b-0 md:border-r">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 text-sm font-medium text-foreground">
          <FileIcon size={15} className="text-muted" />
          {title}
        </div>
        <div className="min-h-0 flex-1 overflow-auto p-2">
          <TreeNodes
            nodes={tree}
            depth={0}
            expanded={expanded}
            toggle={toggle}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>

      {/* code panel */}
      <div className="flex min-w-0 flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="rounded border border-border-2 px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted">
              {current ? fileType(current.path) : ""}
            </span>
            <span className="truncate font-mono text-xs text-muted">
              {current?.path}
            </span>
          </div>
          <button
            onClick={copy}
            title="Copy file"
            className="cursor-pointer rounded-md p-1.5 text-muted transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {copied ? (
              <Check size={14} className="text-green" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-background">
          <div className="min-w-max p-3 font-mono text-[13px] leading-6">
            {lines.map((ln, i) => (
              <div key={i} className="flex">
                <span className="w-9 shrink-0 select-none pr-3 text-right text-muted-2">
                  {i + 1}
                </span>
                <span
                  className="whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: highlightLine(ln, lang) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
