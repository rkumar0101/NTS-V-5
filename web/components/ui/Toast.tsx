"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { CheckCircle, X, AlertTriangle, Info } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

type ToastContextValue = {
  toast: (message: string, type?: ToastType) => void;
};

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const ToastContext = createContext<ToastContextValue>({
  toast: () => {},
});

export const useToast = () => useContext(ToastContext);

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "success") => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, message, type }]);
    // auto-dismiss after 3s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast container — bottom-right */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Single toast                                                       */
/* ------------------------------------------------------------------ */

const icons: Record<ToastType, ReactNode> = {
  success: <CheckCircle size={16} className="text-green-500 shrink-0" />,
  error: <AlertTriangle size={16} className="text-rose-500 shrink-0" />,
  info: <Info size={16} className="text-blue-500 shrink-0" />,
};

const bg: Record<ToastType, string> = {
  success: "bg-green-50 border-green-200 dark:bg-green-950/40 dark:border-green-800",
  error: "bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-800",
  info: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800",
};

function ToastItem({
  toast: t,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: number) => void;
}) {
  return (
    <div
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-sm animate-fade-in-up text-sm font-medium text-slate-800 dark:text-slate-200 min-w-[260px] max-w-[360px] ${bg[t.type]}`}
    >
      {icons[t.type]}
      <span className="flex-1">{t.message}</span>
      <button
        onClick={() => onDismiss(t.id)}
        className="p-0.5 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors shrink-0"
        aria-label="Dismiss"
      >
        <X size={14} className="text-slate-400" />
      </button>
    </div>
  );
}
