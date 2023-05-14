import { surpriseMePrompts } from "../constants";
import { saveAs } from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  // saveAs(photo, `download-${_id}.jpg`);
  try {
    const response = await fetch(photo);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `download-${_id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
}
