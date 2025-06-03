import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for managing text-to-speech (TTS) functionality using the Web Speech API.
 * 
 * This hook handles:
 * - Initial voice selection (randomly chooses between a male or female voice if available).
 * - Speech synthesis for provided text (split into individual sentences).
 * - Tracking of whether speech is currently in progress.
 * - Cancellation of ongoing speech, including across sentence boundaries.
 * - Muting and abortion behaviour when TTS is disabled.
 * 
 * @hook useTTS
 * 
 * @param {boolean} isEnabled - Controls whether speech synthesis is active. Disabling this will cancel any current speech.
 * 
 * @returns {Object} An object containing:
 *   - {SpeechSynthesisVoice | null} voice - The selected voice used for TTS.
 *   - {boolean} isSpeaking - Whether speech synthesis is currently active.
 *   - {Function} speak - Function to start speaking the given text, sentence by sentence.
 *   - {Function} cancel - Function to immediately cancel all ongoing speech.
 *   - {boolean} isFemale - Whether the selected voice is classified as female.
 */

export function useTTS(isEnabled: boolean) {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isFemale, setIsFemale] = useState<boolean>(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const abortedRef = useRef(false);

  useEffect(() => {
    const loadVoice = () => {
      const voices = window.speechSynthesis.getVoices();

      const maleVoice =
        voices.find((v) => v.name === "Google UK English Male") ||
        voices.find((v) => v.name === "Google US English") ||
        voices.find((v) => v.name.toLowerCase().includes("david")) ||
        voices.find((v) => v.name.toLowerCase().includes("male"));

      const femaleVoice =
        voices.find((v) => v.name === "Google UK English Female") ||
        voices.find((v) => v.name === "Google US English Female") ||
        voices.find((v) => v.name.toLowerCase().includes("female")) ||
        voices.find((v) => v.name.toLowerCase().includes("susan"));

      const fallback = voices.find((v) => v.lang === "en-US") || voices[0];
      const useMale = Math.random() < 0.5;
      const selected = useMale ? maleVoice || fallback : femaleVoice || fallback;

      setVoice(selected || null);
      setIsFemale(
        selected?.name?.toLowerCase().includes("female") ||
        selected?.name?.toLowerCase().includes("susan")
      );
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = loadVoice;
    } else {
      loadVoice();
    }
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      abortedRef.current = true;
      window.speechSynthesis.cancel();
    } else {
      abortedRef.current = false;
    }
  }, [isEnabled]);

  const cancel = () => {
    abortedRef.current = true;
    window.speechSynthesis.cancel();
  };

  const speak = (text: string) => {
    if (!voice || !text) return;

    window.speechSynthesis.cancel();

    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];

    (async () => {
      for (let sentence of sentences) {
        if (abortedRef.current) break;

        await new Promise<void>(resolve => {
          const u = new SpeechSynthesisUtterance(sentence.trim());
          utteranceRef.current = u;
          u.voice = voice;
          u.lang = voice.lang || "en-US";
          u.volume = 1.1;
          u.onstart = () => setIsSpeaking(true);
          u.onend = () => {
            setIsSpeaking(false);
            resolve();
          };
          u.onerror = () => {
            setIsSpeaking(false);
            resolve();
          };
          window.speechSynthesis.speak(u);
        });
      }
    })();
  };

  return { voice, speak, cancel, isSpeaking, isFemale };
}