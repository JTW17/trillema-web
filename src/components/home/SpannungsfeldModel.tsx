"use client";

import React from "react";

export type Field = "wachstum" | "stabilitaet" | "erneuerung";

export default function SpannungsfeldModel({
  activeField,
  onSelectField,
}: {
  activeField: Field | null;
  onSelectField: (field: Field) => void;
}) {
  const dotStyle = (field: Field) => {
    const isActive = activeField === field;
    return {
      r: isActive ? 44 : 40,
      stroke: isActive ? "white" : undefined,
      strokeWidth: isActive ? 2 : undefined,
      strokeOpacity: isActive ? 0.4 : undefined,
    } as const;
  };

  const onKey = (field: Field) => (e: React.KeyboardEvent<SVGGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectField(field);
    }
  };

  const w = dotStyle("wachstum");
  const s = dotStyle("stabilitaet");
  const e = dotStyle("erneuerung");

  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Interaktives Spannungsfeld-Modell"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2968B2" stopOpacity="0.85" />
          <stop offset="65%" stopColor="#1A3A5C" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0F2440" stopOpacity="1" />
        </radialGradient>

        <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2968B2" stopOpacity="0.12">
            <animate attributeName="stop-opacity" values="0.12;0.05;0.12" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#2968B2" stopOpacity="0" />
        </radialGradient>

        <path id="arcOutTL" d="M25,320 A295,295 0 0,1 320,25" />
        <path id="arcOutTR" d="M320,25 A295,295 0 0,1 615,320" />
        <path id="arcOutBR" d="M320,615 A295,295 0 0,0 615,320" />
        <path id="arcOutBL" d="M25,320 A295,295 0 0,0 320,615" />
      </defs>

      <rect width="640" height="640" rx="16" fill="#F8FAFC" />

      <circle cx="320" cy="320" r="268" stroke="#1A3A5C" strokeWidth="1.2" strokeDasharray="8 4" opacity="0.18" />
      <text
        x="320"
        y="28"
        textAnchor="middle"
        fill="#8A97A8"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Sora', system-ui, sans-serif"
        letterSpacing="0.18em"
        opacity="0.45"
      >
        DIAGNOSTIK
      </text>

      <circle cx="130" cy="130" r="7" fill="#E8A838" opacity="0.85" />
      <circle cx="510" cy="130" r="7" fill="#D4574E" opacity="0.85" />
      <circle cx="510" cy="510" r="7" fill="#5BA67D" opacity="0.85" />
      <circle cx="130" cy="510" r="7" fill="#C47D3F" opacity="0.85" />

      <text fontSize="10" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif" fill="#E8A838" letterSpacing="0.04em" opacity="0.8">
        <textPath href="#arcOutTL" startOffset="50%" textAnchor="middle">
          Stakeholder-Bindung
        </textPath>
      </text>
      <text fontSize="10" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif" fill="#D4574E" letterSpacing="0.04em" opacity="0.8">
        <textPath href="#arcOutTR" startOffset="50%" textAnchor="middle">
          Markt-Dynamik
        </textPath>
      </text>
      <text fontSize="10" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif" fill="#5BA67D" letterSpacing="0.04em" opacity="0.8">
        <textPath href="#arcOutBR" startOffset="50%" textAnchor="middle">
          Organisations-Reife
        </textPath>
      </text>
      <text fontSize="10" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif" fill="#C47D3F" letterSpacing="0.04em" opacity="0.8">
        <textPath href="#arcOutBL" startOffset="50%" textAnchor="middle">
          Führungs-Kapazität
        </textPath>
      </text>

      <circle cx="320" cy="320" r="188" stroke="#1A3A5C" strokeWidth="0.6" opacity="0.08" />

      {/* WACHSTUM */}
      <g
        className="sf-group"
        role="button"
        tabIndex={0}
        aria-label="Wachstum auswählen"
        onClick={() => onSelectField("wachstum")}
        onKeyDown={onKey("wachstum")}
      >
        <circle
          cx="320"
          cy="132"
          r={w.r}
          fill="#2968B2"
          className="sf-main-circle sf-dot"
          id="dot-wachstum"
          stroke={w.stroke}
          strokeWidth={w.strokeWidth}
          strokeOpacity={w.strokeOpacity}
        />
        <text
          x="320"
          y="135"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          fontWeight="600"
          fontFamily="'Sora', system-ui, sans-serif"
          pointerEvents="none"
        >
          Wachstum
        </text>
        <g className="sf-tooltip">
          <rect x="221" y="67" width="198" height="36" rx="10" fill="white" stroke="#2968B2" strokeWidth="1.2" opacity="0.97" />
          <text x="320" y="89" textAnchor="middle" fill="#1A3A5C" fontSize="11" fontStyle="italic" fontFamily="'DM Sans', system-ui, sans-serif">
            Wachsen, ohne zu zerbrechen
          </text>
        </g>
      </g>

      {/* STABILITÄT */}
      <g
        className="sf-group"
        role="button"
        tabIndex={0}
        aria-label="Stabilität auswählen"
        onClick={() => onSelectField("stabilitaet")}
        onKeyDown={onKey("stabilitaet")}
      >
        <circle
          cx="152"
          cy="420"
          r={s.r}
          fill="#374F6B"
          className="sf-main-circle sf-dot"
          id="dot-stabilitaet"
          stroke={s.stroke}
          strokeWidth={s.strokeWidth}
          strokeOpacity={s.strokeOpacity}
        />
        <text
          x="152"
          y="423"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          fontWeight="600"
          fontFamily="'Sora', system-ui, sans-serif"
          pointerEvents="none"
        >
          Stabilität
        </text>
        <g className="sf-tooltip">
          <rect x="57" y="466" width="190" height="36" rx="10" fill="white" stroke="#374F6B" strokeWidth="1.2" opacity="0.97" />
          <text x="152" y="488" textAnchor="middle" fill="#374F6B" fontSize="11" fontStyle="italic" fontFamily="'DM Sans', system-ui, sans-serif">
            Stabilität, die atmet
          </text>
        </g>
      </g>

      {/* ERNEUERUNG */}
      <g
        className="sf-group"
        role="button"
        tabIndex={0}
        aria-label="Erneuerung auswählen"
        onClick={() => onSelectField("erneuerung")}
        onKeyDown={onKey("erneuerung")}
      >
        <circle
          cx="488"
          cy="420"
          r={e.r}
          fill="#48A5D1"
          className="sf-main-circle sf-dot"
          id="dot-erneuerung"
          stroke={e.stroke}
          strokeWidth={e.strokeWidth}
          strokeOpacity={e.strokeOpacity}
        />
        <text
          x="488"
          y="423"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="11.5"
          fontWeight="600"
          fontFamily="'Sora', system-ui, sans-serif"
          pointerEvents="none"
        >
          Erneuerung
        </text>
        <g className="sf-tooltip">
          <rect x="389" y="466" width="198" height="36" rx="10" fill="white" stroke="#48A5D1" strokeWidth="1.2" opacity="0.97" />
          <text x="488" y="488" textAnchor="middle" fill="#1A3A5C" fontSize="11" fontStyle="italic" fontFamily="'DM Sans', system-ui, sans-serif">
            Erneuern, ohne zu zerstören
          </text>
        </g>
      </g>

      <circle cx="320" cy="320" r="112" stroke="#1A3A5C" strokeWidth="0.8" opacity="0.08" />

      {/* Inner icons */}
      <g transform="translate(223, 264)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#2968B2" strokeWidth="1.3" opacity="0.4" />
        <circle cx="0" cy="0" r="9" fill="none" stroke="#2968B2" strokeWidth="1" opacity="0.45" />
        <circle cx="0" cy="0" r="3.5" fill="#2968B2" opacity="0.7" />
        <text x="0" y="30" textAnchor="middle" fill="#1A3A5C" fontSize="9.5" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif">
          Diagnostik
        </text>
      </g>

      <g transform="translate(417, 264)">
        <rect x="-13" y="-13" width="26" height="26" rx="2.5" transform="rotate(45 0 0)" fill="none" stroke="#1A3A5C" strokeWidth="1.3" opacity="0.4" />
        <circle cx="0" cy="0" r="3.5" fill="#1A3A5C" opacity="0.6" />
        <text x="0" y="30" textAnchor="middle" fill="#1A3A5C" fontSize="9.5" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif">
          Begleitung
        </text>
      </g>

      <g transform="translate(320, 432)">
        <rect x="-13" y="-13" width="26" height="26" rx="2.5" transform="rotate(45 0 0)" fill="#0F2440" />
        <text x="0" y="30" textAnchor="middle" fill="#1A3A5C" fontSize="9.5" fontWeight="600" fontFamily="'Sora', system-ui, sans-serif">
          Verantwortung
        </text>
      </g>

      {/* Core */}
      <circle cx="320" cy="320" r="80" fill="url(#corePulse)" />
      <circle cx="320" cy="320" r="62" fill="url(#coreGlow)" />
      <circle cx="320" cy="320" r="62" fill="none" stroke="#2968B2" strokeWidth="0.8" opacity="0.25" />
      <text x="320" y="312" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8.5" fontWeight="400" fontFamily="'Sora', system-ui, sans-serif" letterSpacing="0.03em" opacity="0.7">
        Unternehmerische
      </text>
      <text x="320" y="332" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="'Sora', system-ui, sans-serif" letterSpacing="0.05em">
        Plastizität
      </text>

      <text x="320" y="618" textAnchor="middle" fill="#8A97A8" fontSize="7.5" fontFamily="'Sora', system-ui, sans-serif" opacity="0.4">
        Wählen Sie ein Spannungsfeld
      </text>
    </svg>
  );
}
