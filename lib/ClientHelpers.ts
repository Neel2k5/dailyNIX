"use client";

import { CommandElement, CommandUsageExample } from "@/types/CommandElement";
import { getCommandById, getCommandCount } from "./DataFetcherHelpers";

export const DocsRedirect = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const HandleClipboardCopy = async (cmd: string) => {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(cmd);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  }
};

const randomSteppedIndexGenerator = (rowCount: number, index: number) => {
  return (index + Math.floor(Math.random() * 10) + 1) % rowCount;
};

const mapDBRowToCommandElement = (row: any): CommandElement => {
  // SERVER->CLIENT SIDE LEVEL PARSING
  const usageExamples: CommandUsageExample[] = [
    { command: row.usage_e_1, usage: row.usage_d_1 },
    { command: row.usage_e_2, usage: row.usage_d_2 },
    { command: row.usage_e_3, usage: row.usage_d_3 },
    { command: row.usage_e_4, usage: row.usage_d_4 },
    { command: row.usage_e_5, usage: row.usage_d_5 },
  ].filter((ex) => ex.command && ex.usage) as CommandUsageExample[];

  return {
    id: row.id,
    base_name: row.base_name,
    description: row.description,
    documentation: row.documentation,
    usageExamples,
  };
};

export const setClientCacheAndReturn =
  async (): Promise<CommandElement | null> => {


    const today = new Date().toISOString().split("T")[0];
    // CLIENT CACHE EXISTANCE CHECK
    const cachedCommandStr = localStorage.getItem("cached_client_command");
    const cacheUpdateDate = localStorage.getItem("cache_update_date");

    if (cachedCommandStr && cacheUpdateDate === today) {
      // SAME DAY REFRESH
      try {
        return JSON.parse(cachedCommandStr) as CommandElement;
      } catch (err) {
        console.error("Failed to parse cached command:", err);
        localStorage.removeItem("cached_client_command");
        localStorage.removeItem("cache_update_date");
      }
    }

    let rowCount = 0;
    try {
      rowCount = await getCommandCount();
    } catch (err) {
      console.error("Failed to get command count:", err);
      return null;
    }

    if (!rowCount || rowCount < 1) return null;

    let newIndex = 0;
    if (cachedCommandStr) {
      // NEW DAY
      try {
        const prevCommand = JSON.parse(cachedCommandStr) as CommandElement;
        newIndex = randomSteppedIndexGenerator(rowCount, prevCommand.id);
      } catch (err) {
        console.error("Failed to parse previous cached command:", err);
        newIndex = Math.floor(Math.random() * rowCount);
      }
    } else {
      newIndex = Math.floor(Math.random() * rowCount);
    }

    let rawCommand: any = null;
    try {
      rawCommand = await getCommandById(newIndex + 1);
    } catch (err) {
      console.error("Failed to fetch command by ID:", err);
      return null;
    }

    if (!rawCommand) return null;

    // PARSING FOR FRONTEND
    const newCommand = mapDBRowToCommandElement(rawCommand);
    try {
      localStorage.setItem("cached_client_command", JSON.stringify(newCommand));
      localStorage.setItem("cache_update_date", today);
    } catch (err) {
      console.error("Failed to cache command in localStorage:", err);
    }

    return newCommand;
  };
