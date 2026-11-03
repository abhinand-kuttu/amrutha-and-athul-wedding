"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music, ListMusic, Play, Pause, Upload, Check, Sparkles } from "lucide-react";
import { weddingData } from "@/config/weddingData";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

// Simple IndexedDB helper for permanent browser audio caching
const DB_NAME = "WeddingAudioDB";
const STORE_NAME = "audio_store";

function saveAudioToDB(file: File): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(file, "custom_song");
      store.put(file.name, "custom_song_name");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
}

function getAudioFromDB(): Promise<{ blob: Blob; name: string } | null> {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const getFile = store.get("custom_song");
      const getName = store.get("custom_song_name");

      tx.oncomplete = () => {
        if (getFile.result) {
          resolve({
            blob: getFile.result,
            name: getName.result || "Sita Kalyanam - Agam",
          });
        } else {
          resolve(null);
        }
      };
      tx.onerror = () => resolve(null);
    };
    request.onerror = () => resolve(null);
  });
}

export default function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [songTitle, setSongTitle] = useState("Sita Kalyanam • Trending Reel Cut");
  const [isCustomLoaded, setIsCustomLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const tracks = weddingData.music.tracks;
  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  // Check IndexedDB on mount only if custom track was explicitly flagged
  useEffect(() => {
    getAudioFromDB().then((cached) => {
      // If user had uploaded a custom file with a non-default name
      if (cached && cached.name && cached.name.toLowerCase().includes("custom") && audioRef.current) {
        const url = URL.createObjectURL(cached.blob);
        audioRef.current.src = url;
        setSongTitle(cached.name);
        setIsCustomLoaded(true);
      }
    });
  }, []);

  // Attempt playback on envelope opening user gesture
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      if (audioRef.current) {
        audioRef.current.volume = 0.75;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay waiting for direct tap:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlayTrigger, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.75;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Audio play error", e));
    }
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setSongTitle(tracks[index].title);
    setIsPlaylistOpen(false);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].audioUrl;
      setTimeout(() => {
        audioRef.current
          ?.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log(e));
      }, 100);
    }
  };

  // Allow user to upload or select Agam's Sita Kalyanam MP3
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && audioRef.current) {
      try {
        await saveAudioToDB(file);
      } catch (err) {
        console.log("IndexedDB save error", err);
      }

      const url = URL.createObjectURL(file);
      audioRef.current.src = url;
      audioRef.current.volume = 0.8;
      setSongTitle(file.name.replace(/\.[^/.]+$/, "") || "Sita Kalyanam • Agam");
      setIsCustomLoaded(true);

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err));

      setIsPlaylistOpen(false);
    }
  };

  // Fallback handler if primary audio URL is not found
  const handleAudioError = () => {
    console.log("Primary audio source loading fallback");
    if (audioRef.current && audioRef.current.src.includes("sita-kalyanam-agam.mp3")) {
      // Fallback to local audio
      audioRef.current.src = "/audio/sita-kalyanam.mp3";
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <>
      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        loop
        preload="auto"
        onError={handleAudioError}
      />

      {/* Hidden file input for custom song upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Floating Audio Controller Badge */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none">
        {/* Playlist & Upload Menu Popup Card */}
        {isPlaylistOpen && (
          <div
            className="w-80 rounded-2xl bg-[#FBF9F4] border border-[#B89758]/50 shadow-2xl p-4 text-[#3A2D23] animate-in fade-in slide-in-from-bottom-3 duration-200"
            style={{
              boxShadow: "0 20px 40px -10px rgba(25, 35, 22, 0.45), 0 5px 15px -3px rgba(184, 151, 88, 0.3)",
            }}
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-[#B89758]/20">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-[#B89758]" />
                <h4 className="font-serif font-bold text-sm text-[#3A2D23]">
                  Wedding Song Settings
                </h4>
              </div>
              <button
                onClick={() => setIsPlaylistOpen(false)}
                className="text-xs text-[#8C7A6B] hover:text-[#3A2D23]"
              >
                ✕
              </button>
            </div>

            {/* Agam Sita Kalyanam Featured Pill */}
            <div className="my-3 p-3 rounded-xl bg-[#E5ECE3] border border-[#8DA38A]/60 text-xs font-serif">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#5A6E58] font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#B89758]" />
                  Selected Song
                </span>
                {isCustomLoaded && (
                  <span className="text-[10px] bg-[#6B7F68] text-white px-2 py-0.5 rounded-full font-sans">
                    Saved in Browser ✓
                  </span>
                )}
              </div>
              <h5 className="font-serif font-bold text-sm text-[#263025] mt-1">
                {currentTrack.title}
              </h5>
              <p className="font-serif italic text-[#5A493B] text-[11px]">
                {currentTrack.subtitle}
              </p>
            </div>

            {/* Choose or upload Agam MP3 file */}
            <div className="space-y-2 pt-1 border-t border-[#B89758]/20">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#B89758] via-[#DFC692] to-[#B89758] text-[#2E241B] font-serif font-bold text-xs shadow hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Agam&apos;s Sita Kalyanam (MP3)</span>
              </button>

              <p className="font-serif italic text-[10px] text-[#736054] text-center leading-relaxed">
                Or place file in project folder at:<br />
                <code className="text-[#3A2D23] font-mono bg-[#FAF8F3] px-1 py-0.5 rounded">
                  public/audio/sita-kalyanam-agam.mp3
                </code>
              </p>
            </div>

            {/* Alternative Tracks */}
            <div className="pt-3 mt-2 border-t border-[#B89758]/20">
              <p className="font-sans text-[10px] uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1.5">
                Alternative Tracks
              </p>
              <div className="space-y-1">
                {tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => selectTrack(idx)}
                    className="w-full text-left p-2 rounded-lg text-xs font-serif hover:bg-[#FAF8F3] transition-colors flex items-center justify-between"
                  >
                    <span className="truncate pr-2 font-medium text-[#4A3D33]">
                      {track.title}
                    </span>
                    {currentTrackIndex === idx && (
                      <Check className="w-3 h-3 text-[#5A6E58] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Floating Controller Badge */}
        <div className="flex items-center gap-1.5 bg-[#FBF9F4]/95 backdrop-blur-md p-1.5 rounded-full border border-[#B89758]/50 shadow-xl">
          {/* Main Play / Pause Button with Animated Equalizer */}
          <button
            onClick={togglePlay}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#E5ECE3] hover:bg-[#CCD7C9] transition-all text-[#283327]"
            title={isPlaying ? "Pause music" : "Play Sita Kalyanam by Agam"}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {/* Animated Equalizer Bars */}
            <div className="flex items-center gap-0.5 h-3.5 w-3.5 justify-center">
              {isPlaying ? (
                <>
                  <span className="w-0.5 bg-[#5A6E58] rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-3" />
                  <span className="w-0.5 bg-[#8DA38A] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3.5" />
                  <span className="w-0.5 bg-[#5A6E58] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2.5" />
                </>
              ) : (
                <Music className="w-3.5 h-3.5 text-[#5A6E58]" />
              )}
            </div>

            <span className="font-serif text-xs font-semibold text-[#283327] max-w-[150px] sm:max-w-[210px] truncate">
              {songTitle}
            </span>

            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-[#5A6E58]" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[#5A6E58]" />
            )}
          </button>

          {/* Playlist / Change Song Button */}
          <button
            onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
            className="p-2 rounded-full hover:bg-[#E5ECE3] text-[#5A6E58] transition-colors"
            title="Sita Kalyanam by Agam settings"
            aria-label="Music settings"
          >
            <ListMusic className="w-4 h-4" />
          </button>

          {/* Volume Mute Toggle */}
          <button
            onClick={togglePlay}
            className="p-2 rounded-full hover:bg-[#E5ECE3] text-[#5A6E58] transition-colors"
            title={isPlaying ? "Mute" : "Unmute"}
            aria-label="Toggle mute"
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#8C7A6B]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
