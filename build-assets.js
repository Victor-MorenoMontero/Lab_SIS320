const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = {
  // LOGO
  'logo-bytepro.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00D2FF"/>
        <stop offset="100%" stop-color="#0066FF"/>
      </linearGradient>
      <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
    </defs>
    <!-- Chip Icon -->
    <rect x="4" y="8" width="32" height="32" rx="6" fill="url(#chipGrad)" stroke="url(#logoGrad)" stroke-width="2"/>
    <rect x="10" y="14" width="20" height="20" rx="3" fill="#0A192F"/>
    <!-- Circuit lines inside icon -->
    <path d="M14 24h12M20 18v12" stroke="url(#logoGrad)" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="20" cy="24" r="2.5" fill="#00D2FF"/>
    <!-- Outer pins -->
    <path d="M8 4v4M16 4v4M24 4v4M32 4v4M8 40v4M16 40v4M24 40v4M32 40v4M0 12h4M0 20h4M0 28h4M0 36h4M36 12h4M36 20h4M36 28h4M36 36h4" stroke="#00D2FF" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Text -->
    <text x="46" y="32" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="24" fill="#FFFFFF" letter-spacing="-0.5">BYTE<tspan fill="url(#logoGrad)">PRO</tspan></text>
  </svg>`,

  // HERO COMPOSITION
  'hero-hardware.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" fill="none">
    <defs>
      <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0A192F"/>
        <stop offset="50%" stop-color="#0D2040"/>
        <stop offset="100%" stop-color="#050C1A"/>
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="50%" stop-color="#0369A1"/>
        <stop offset="100%" stop-color="#075985"/>
      </linearGradient>
      <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00F0FF"/>
        <stop offset="100%" stop-color="#0072FF"/>
      </linearGradient>
      <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
      <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#00D2FF" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#00D2FF" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadowGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- Background card with subtle cyber grid -->
    <rect width="800" height="520" rx="20" fill="url(#bgGlow)"/>
    <ellipse cx="400" cy="460" rx="350" ry="40" fill="url(#deskGlow)"/>

    <!-- Desk Surface Line -->
    <line x1="60" y1="460" x2="740" y2="460" stroke="#1E293B" stroke-width="4"/>

    <!-- ==================== TOWER PC (RIGHT) ==================== -->
    <g transform="translate(560, 130)">
      <!-- Case shadow -->
      <rect x="10" y="320" width="180" height="15" rx="7" fill="#000" opacity="0.4"/>
      <!-- Main Case Chassis -->
      <rect x="10" y="10" width="170" height="310" rx="10" fill="url(#towerGrad)" stroke="#334155" stroke-width="2"/>
      <!-- Tempered Glass Window -->
      <rect x="25" y="25" width="140" height="225" rx="6" fill="#070D18" stroke="#1E293B" stroke-width="1.5"/>
      <!-- Motherboard / Internal illumination -->
      <rect x="35" y="35" width="120" height="150" rx="4" fill="#0B132B"/>
      <!-- CPU Cooler AIO Liquid Block (Glowing Circle) -->
      <circle cx="85" cy="85" r="22" fill="#0A192F" stroke="url(#cyanAccent)" stroke-width="3" filter="url(#shadowGlow)"/>
      <circle cx="85" cy="85" r="14" fill="#00E5FF" opacity="0.8"/>
      <!-- Liquid Tubes -->
      <path d="M85 70 C 110 50, 130 50, 140 45" stroke="#00F0FF" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>
      <path d="M85 100 C 110 115, 130 65, 140 55" stroke="#0072FF" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>
      <!-- Dedicated GPU Card inside Tower -->
      <rect x="35" y="125" width="120" height="32" rx="4" fill="#1E293B" stroke="#00F0FF" stroke-width="1.5"/>
      <circle cx="65" cy="141" r="10" fill="#0F172A" stroke="#00D2FF" stroke-width="1.5"/>
      <circle cx="95" cy="141" r="10" fill="#0F172A" stroke="#00D2FF" stroke-width="1.5"/>
      <circle cx="125" cy="141" r="10" fill="#0F172A" stroke="#00D2FF" stroke-width="1.5"/>
      <line x1="38" y1="130" x2="152" y2="130" stroke="#00F0FF" stroke-width="2"/>
      <!-- Lower PSU Shroud -->
      <rect x="25" y="255" width="140" height="55" rx="4" fill="#0B132B" stroke="#1E293B"/>
      <text x="35" y="285" fill="#64748B" font-family="'Segoe UI', sans-serif" font-weight="700" font-size="12">BYTEPRO 850W</text>
      <!-- Front RGB Strip -->
      <line x1="172" y1="20" x2="172" y2="310" stroke="url(#cyanAccent)" stroke-width="4" stroke-linecap="round" filter="url(#shadowGlow)"/>
      <!-- Power Button -->
      <circle cx="30" cy="18" r="3" fill="#00F0FF"/>
      <rect x="42" y="16" width="24" height="4" rx="2" fill="#475569"/>
    </g>

    <!-- ==================== ULTRAWIDE MONITOR (CENTER) ==================== -->
    <g transform="translate(140, 80)">
      <!-- Monitor Stand Base -->
      <path d="M170 375 L 210 330 L 250 375 Z" fill="#1E293B" stroke="#334155" stroke-width="2"/>
      <!-- Monitor Arm -->
      <rect x="200" y="260" width="20" height="85" rx="4" fill="#334155"/>
      <!-- Monitor Outer Frame (Curved Bezel) -->
      <rect x="10" y="15" width="400" height="250" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="3"/>
      <!-- Display Screen -->
      <rect x="20" y="25" width="380" height="230" rx="6" fill="url(#screenGrad)"/>
      
      <!-- Tech HUD Graphics on Monitor -->
      <!-- Top header bar on screen -->
      <rect x="30" y="35" width="360" height="22" rx="3" fill="#0B192C" opacity="0.8"/>
      <circle cx="42" cy="46" r="4" fill="#EF4444"/>
      <circle cx="56" cy="46" r="4" fill="#F59E0B"/>
      <circle cx="70" cy="46" r="4" fill="#10B981"/>
      <text x="85" y="50" fill="#93C5FD" font-family="monospace" font-size="10">bytepro_hardware_engine.exe — [STATUS: 100% OPERATIONAL]</text>
      
      <!-- Chart / Visual analytics on screen -->
      <path d="M40 180 Q 90 120, 140 150 T 240 110 T 340 90 L 370 130" stroke="#00F0FF" stroke-width="3" fill="none" filter="url(#shadowGlow)"/>
      <path d="M40 180 Q 90 120, 140 150 T 240 110 T 340 90 L 370 130 L 370 200 L 40 200 Z" fill="#00F0FF" opacity="0.12"/>
      
      <!-- Specs Blocks on screen -->
      <rect x="40" y="70" width="100" height="45" rx="4" fill="#082F49" stroke="#0284C7" stroke-width="1"/>
      <text x="48" y="86" fill="#38BDF8" font-family="sans-serif" font-weight="700" font-size="9">CPU PERFORMANCE</text>
      <text x="48" y="105" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="14">4.95 GHz</text>

      <rect x="150" y="70" width="100" height="45" rx="4" fill="#082F49" stroke="#0284C7" stroke-width="1"/>
      <text x="158" y="86" fill="#38BDF8" font-family="sans-serif" font-weight="700" font-size="9">GPU RENDERING</text>
      <text x="158" y="105" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="14">165 FPS</text>

      <rect x="260" y="70" width="120" height="45" rx="4" fill="#082F49" stroke="#0284C7" stroke-width="1"/>
      <text x="268" y="86" fill="#38BDF8" font-family="sans-serif" font-weight="700" font-size="9">DDR5 LOW LATENCY</text>
      <text x="268" y="105" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="14">6000 MT/s</text>
      
      <!-- Cyan Accent Under Screen -->
      <line x1="20" y1="265" x2="400" y2="265" stroke="url(#cyanAccent)" stroke-width="2"/>
    </g>

    <!-- ==================== MECHANICAL KEYBOARD (FRONT) ==================== -->
    <g transform="translate(160, 420)">
      <rect x="0" y="0" width="260" height="32" rx="5" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
      <!-- Keycap rows with RGB gradient -->
      <g fill="#1E293B" stroke="#00D2FF" stroke-width="0.6">
        <rect x="6" y="4" width="16" height="6" rx="1.5"/>
        <rect x="26" y="4" width="16" height="6" rx="1.5"/>
        <rect x="46" y="4" width="16" height="6" rx="1.5"/>
        <rect x="66" y="4" width="16" height="6" rx="1.5"/>
        <rect x="86" y="4" width="16" height="6" rx="1.5"/>
        <rect x="106" y="4" width="16" height="6" rx="1.5"/>
        <rect x="126" y="4" width="16" height="6" rx="1.5"/>
        <rect x="146" y="4" width="16" height="6" rx="1.5"/>
        <rect x="166" y="4" width="16" height="6" rx="1.5"/>
        <rect x="186" y="4" width="16" height="6" rx="1.5"/>
        <rect x="206" y="4" width="16" height="6" rx="1.5"/>
        <rect x="226" y="4" width="26" height="6" rx="1.5" fill="#0284C7"/>
        
        <rect x="6" y="13" width="22" height="6" rx="1.5"/>
        <rect x="32" y="13" width="16" height="6" rx="1.5"/>
        <rect x="52" y="13" width="16" height="6" rx="1.5"/>
        <rect x="72" y="13" width="16" height="6" rx="1.5"/>
        <rect x="92" y="13" width="16" height="6" rx="1.5"/>
        <rect x="112" y="13" width="16" height="6" rx="1.5"/>
        <rect x="132" y="13" width="16" height="6" rx="1.5"/>
        <rect x="152" y="13" width="16" height="6" rx="1.5"/>
        <rect x="172" y="13" width="16" height="6" rx="1.5"/>
        <rect x="192" y="13" width="16" height="6" rx="1.5"/>
        <rect x="212" y="13" width="40" height="6" rx="1.5" fill="#0284C7"/>

        <!-- Spacebar row -->
        <rect x="6" y="22" width="25" height="6" rx="1.5"/>
        <rect x="35" y="22" width="22" height="6" rx="1.5"/>
        <rect x="61" y="22" width="120" height="6" rx="1.5" stroke="#00F0FF" stroke-width="1.2"/>
        <rect x="185" y="22" width="22" height="6" rx="1.5"/>
        <rect x="211" y="22" width="41" height="6" rx="1.5"/>
      </g>
    </g>

    <!-- ==================== PRECISION MOUSE (RIGHT OF KEYBOARD) ==================== -->
    <g transform="translate(445, 415)">
      <!-- Mousepad -->
      <rect x="-10" y="-5" width="70" height="45" rx="4" fill="#070D18" stroke="#1E293B"/>
      <!-- Mouse Body -->
      <path d="M10 0 C 25 -5, 35 -5, 45 0 C 50 15, 50 30, 42 40 C 35 44, 20 44, 13 40 C 5 30, 5 15, 10 0 Z" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <!-- Scroll Wheel & Accent -->
      <rect x="25" y="5" width="4" height="10" rx="2" fill="#00F0FF"/>
      <path d="M15 25 Q 27 20, 39 25" stroke="#00F0FF" stroke-width="1.5" fill="none" opacity="0.8"/>
    </g>

    <!-- Floating Badge (Left top) -->
    <g transform="translate(40, 120)">
      <rect width="130" height="70" rx="10" fill="#0F172A" stroke="#00F0FF" stroke-width="1.5" opacity="0.95"/>
      <circle cx="25" cy="35" r="14" fill="#0284C7"/>
      <path d="M21 35 L 24 38 L 29 32" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="46" y="30" fill="#94A3B8" font-family="sans-serif" font-size="10">Especialistas en</text>
      <text x="46" y="47" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="12">Hardware PC</text>
    </g>

    <!-- Floating Badge (Left bottom) -->
    <g transform="translate(40, 220)">
      <rect width="130" height="70" rx="10" fill="#0F172A" stroke="#38BDF8" stroke-width="1" opacity="0.95"/>
      <text x="16" y="28" fill="#38BDF8" font-family="sans-serif" font-weight="700" font-size="11">SOPORTE 100%</text>
      <text x="16" y="46" fill="#F8FAFC" font-family="sans-serif" font-size="11">Equipos &amp; Partes</text>
      <text x="16" y="59" fill="#64748B" font-family="sans-serif" font-size="9">USFX • BytePro Lab</text>
    </g>
  </svg>`,

  // CATEGORY 1: LAPTOPS
  'cat-laptops.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" fill="none">
    <defs>
      <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
    </defs>
    <!-- Background Card -->
    <rect width="320" height="220" rx="12" fill="#0F172A"/>
    <!-- Laptop Screen Top Shell -->
    <rect x="60" y="35" width="200" height="125" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    <rect x="70" y="45" width="180" height="105" rx="4" fill="url(#laptopScreen)"/>
    <!-- Webcam -->
    <circle cx="160" cy="40" r="2" fill="#00F0FF"/>
    <!-- Code on laptop screen -->
    <line x1="85" y1="65" x2="160" y2="65" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
    <line x1="85" y1="78" x2="210" y2="78" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="85" y1="91" x2="140" y2="91" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="85" y1="104" x2="190" y2="104" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="85" y1="117" x2="120" y2="117" stroke="#00F0FF" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="215" cy="115" r="16" fill="#0284C7" opacity="0.4"/>
    <!-- Base / Keyboard Deck -->
    <path d="M35 160 L 285 160 L 265 180 L 55 180 Z" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <!-- Trackpad -->
    <rect x="135" y="165" width="50" height="12" rx="2" fill="#1E293B"/>
    <!-- Front edge reflection -->
    <line x1="55" y1="180" x2="265" y2="180" stroke="#00F0FF" stroke-width="2"/>
  </svg>`,

  // CATEGORY 2: COMPUTADORAS DE ESCRITORIO
  'cat-desktop.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" fill="none">
    <defs>
      <linearGradient id="fanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00D2FF"/>
        <stop offset="100%" stop-color="#0055FF"/>
      </linearGradient>
    </defs>
    <rect width="320" height="220" rx="12" fill="#0F172A"/>
    <!-- PC Tower -->
    <rect x="105" y="25" width="110" height="165" rx="8" fill="#1E293B" stroke="#0284C7" stroke-width="1.5"/>
    <!-- Front Mesh Panel -->
    <rect x="115" y="35" width="90" height="145" rx="5" fill="#0B132B"/>
    <!-- Fan 1 (RGB Ring) -->
    <circle cx="160" cy="70" r="24" fill="#0F172A" stroke="url(#fanGrad)" stroke-width="3"/>
    <circle cx="160" cy="70" r="9" fill="#00D2FF"/>
    <!-- Fan 2 (RGB Ring) -->
    <circle cx="160" cy="128" r="24" fill="#0F172A" stroke="url(#fanGrad)" stroke-width="3"/>
    <circle cx="160" cy="128" r="9" fill="#00D2FF"/>
    <!-- Power Button & IO -->
    <circle cx="130" cy="192" r="3" fill="#00F0FF"/>
    <line x1="145" y1="192" x2="165" y2="192" stroke="#64748B" stroke-width="2"/>
    <!-- Feet -->
    <rect x="112" y="190" width="14" height="6" rx="2" fill="#475569"/>
    <rect x="194" y="190" width="14" height="6" rx="2" fill="#475569"/>
    <!-- Side Glow Accent -->
    <line x1="105" y1="35" x2="105" y2="175" stroke="#00F0FF" stroke-width="3"/>
  </svg>`,

  // CATEGORY 3: MONITORES
  'cat-monitors.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" fill="none">
    <rect width="320" height="220" rx="12" fill="#0F172A"/>
    <!-- Monitor Stand -->
    <path d="M125 185 L 160 150 L 195 185 Z" fill="#334155"/>
    <rect x="154" y="130" width="12" height="30" fill="#475569"/>
    <!-- Monitor Outer Frame -->
    <rect x="50" y="35" width="220" height="120" rx="6" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    <!-- Display -->
    <rect x="56" y="41" width="208" height="104" rx="3" fill="#0284C7"/>
    <!-- Gradient Landscape/Graph Graphic on Screen -->
    <path d="M56 120 Q 110 80, 160 100 T 264 65 L 264 145 L 56 145 Z" fill="#075985"/>
    <path d="M56 130 Q 120 95, 175 115 T 264 85 L 264 145 L 56 145 Z" fill="#0369A1" opacity="0.6"/>
    <!-- 4K / 165Hz Badge -->
    <rect x="65" y="48" width="55" height="16" rx="3" fill="#0F172A" opacity="0.85"/>
    <text x="70" y="60" fill="#38BDF8" font-family="sans-serif" font-weight="700" font-size="9">2K • 165Hz</text>
  </svg>`,

  // CATEGORY 4: TECLADOS Y RATONES
  'cat-peripherals.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" fill="none">
    <rect width="320" height="220" rx="12" fill="#0F172A"/>
    <!-- Mechanical Keyboard -->
    <g transform="translate(45, 60)">
      <rect width="160" height="100" rx="6" fill="#1E293B" stroke="#00D2FF" stroke-width="1.5"/>
      <!-- Keys -->
      <g fill="#0F172A" stroke="#38BDF8" stroke-width="0.8">
        <rect x="8" y="10" width="14" height="12" rx="2"/>
        <rect x="26" y="10" width="14" height="12" rx="2"/>
        <rect x="44" y="10" width="14" height="12" rx="2"/>
        <rect x="62" y="10" width="14" height="12" rx="2"/>
        <rect x="80" y="10" width="14" height="12" rx="2"/>
        <rect x="98" y="10" width="14" height="12" rx="2"/>
        <rect x="116" y="10" width="14" height="12" rx="2"/>
        <rect x="134" y="10" width="18" height="12" rx="2" fill="#0284C7"/>

        <rect x="8" y="28" width="18" height="12" rx="2"/>
        <rect x="30" y="28" width="14" height="12" rx="2"/>
        <rect x="48" y="28" width="14" height="12" rx="2"/>
        <rect x="66" y="28" width="14" height="12" rx="2"/>
        <rect x="84" y="28" width="14" height="12" rx="2"/>
        <rect x="102" y="28" width="14" height="12" rx="2"/>
        <rect x="120" y="28" width="14" height="12" rx="2"/>
        <rect x="138" y="28" width="14" height="12" rx="2"/>

        <rect x="8" y="46" width="22" height="12" rx="2"/>
        <rect x="34" y="46" width="14" height="12" rx="2"/>
        <rect x="52" y="46" width="14" height="12" rx="2"/>
        <rect x="70" y="46" width="14" height="12" rx="2"/>
        <rect x="88" y="46" width="14" height="12" rx="2"/>
        <rect x="106" y="46" width="14" height="12" rx="2"/>
        <rect x="124" y="46" width="28" height="12" rx="2" fill="#00D2FF"/>

        <!-- Spacebar row -->
        <rect x="8" y="66" width="24" height="14" rx="2"/>
        <rect x="36" y="66" width="80" height="14" rx="2" stroke="#00F0FF" stroke-width="1.5"/>
        <rect x="120" y="66" width="32" height="14" rx="2"/>
      </g>
    </g>

    <!-- Ergonomic Gaming Mouse -->
    <g transform="translate(225, 75)">
      <path d="M15 0 C 35 -5, 45 -5, 55 10 C 65 30, 60 60, 48 75 C 35 85, 20 85, 10 75 C 0 60, 0 30, 5 10 Z" fill="#1E293B" stroke="#00D2FF" stroke-width="1.5"/>
      <rect x="27" y="10" width="5" height="16" rx="2.5" fill="#00F0FF"/>
      <path d="M15 45 Q 30 35, 45 45" stroke="#38BDF8" stroke-width="2" fill="none"/>
    </g>
  </svg>`,

  // CATEGORY 5: IMPRESORAS
  'cat-printers.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" fill="none">
    <rect width="320" height="220" rx="12" fill="#0F172A"/>
    <!-- Paper Feed Top -->
    <rect x="105" y="30" width="110" height="25" rx="3" fill="#F8FAFC"/>
    <line x1="115" y1="40" x2="195" y2="40" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="115" y1="46" x2="175" y2="46" stroke="#CBD5E1" stroke-width="2"/>

    <!-- Main Printer Body -->
    <rect x="65" y="55" width="190" height="100" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    
    <!-- Scanner Lid Edge -->
    <rect x="65" y="55" width="190" height="20" rx="4" fill="#334155"/>
    <circle cx="235" cy="65" r="4" fill="#00F0FF"/>

    <!-- Output Paper Tray -->
    <rect x="95" y="110" width="130" height="45" rx="4" fill="#0F172A" stroke="#475569" stroke-width="1"/>
    <!-- Printed sheet coming out -->
    <rect x="110" y="125" width="100" height="35" rx="2" fill="#FFFFFF"/>
    <line x1="120" y1="135" x2="190" y2="135" stroke="#0284C7" stroke-width="2"/>
    <line x1="120" y1="143" x2="170" y2="143" stroke="#94A3B8" stroke-width="2"/>

    <!-- Ink Tanks Visible (CMYK indicator) -->
    <rect x="75" y="85" width="35" height="16" rx="2" fill="#0B132B"/>
    <circle cx="82" cy="93" r="3" fill="#00D2FF"/>
    <circle cx="90" cy="93" r="3" fill="#EC4899"/>
    <circle cx="98" cy="93" r="3" fill="#FACC15"/>
    <circle cx="104" cy="93" r="2.5" fill="#334155"/>
  </svg>`,

  // CATEGORY 6: COMPONENTES Y ACCESORIOS
  'cat-components.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" fill="none">
    <rect width="320" height="220" rx="12" fill="#0F172A"/>
    <!-- GPU Graphic Card -->
    <g transform="translate(45, 50)">
      <!-- Heatsink shroud -->
      <rect width="230" height="85" rx="6" fill="#1E293B" stroke="#00F0FF" stroke-width="1.5"/>
      <!-- Fan 1 -->
      <circle cx="45" cy="42" r="28" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="45" cy="42" r="9" fill="#0284C7"/>
      <!-- Fan 2 -->
      <circle cx="115" cy="42" r="28" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="115" cy="42" r="9" fill="#00F0FF"/>
      <!-- Fan 3 -->
      <circle cx="185" cy="42" r="28" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="185" cy="42" r="9" fill="#0284C7"/>
      <!-- Top illuminated logo -->
      <rect x="75" y="6" width="80" height="8" rx="2" fill="#00D2FF"/>
      <!-- PCIe Gold Pins -->
      <rect x="35" y="85" width="100" height="8" fill="#EAB308"/>
      <line x1="40" y1="89" x2="130" y2="89" stroke="#713F12" stroke-width="2" stroke-dasharray="2 2"/>
    </g>
    <!-- RAM Stick beside -->
    <g transform="translate(65, 155)">
      <rect width="190" height="24" rx="3" fill="#334155" stroke="#38BDF8" stroke-width="1"/>
      <rect x="15" y="3" width="160" height="6" rx="1" fill="#00F0FF"/>
      <rect x="30" y="24" width="130" height="5" fill="#EAB308"/>
    </g>
  </svg>`,

  // PRODUCT 1: LAPTOP BYTEPRO AERO 15
  'prod-laptop-zenith.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" fill="none">
    <rect width="360" height="260" rx="12" fill="#0D1B2A"/>
    <!-- Screen -->
    <rect x="55" y="30" width="250" height="155" rx="8" fill="#1E293B" stroke="#00D2FF" stroke-width="1.5"/>
    <rect x="68" y="42" width="224" height="131" rx="4" fill="#0284C7"/>
    <!-- High-res desktop UI preview -->
    <circle cx="180" cy="90" r="30" fill="#075985" opacity="0.6"/>
    <path d="M100 130 L 150 95 L 200 115 L 260 75" stroke="#00F0FF" stroke-width="3" fill="none"/>
    <rect x="80" y="55" width="70" height="14" rx="3" fill="#0F172A" opacity="0.75"/>
    <text x="86" y="65" fill="#38BDF8" font-family="sans-serif" font-weight="700" font-size="9">BYTEPRO OS</text>
    <!-- Webcam -->
    <circle cx="180" cy="36" r="2.5" fill="#38BDF8"/>
    <!-- Base Keyboard -->
    <path d="M30 185 L 330 185 L 305 220 L 55 220 Z" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <!-- Trackpad -->
    <rect x="150" y="195" width="60" height="18" rx="3" fill="#1E293B"/>
    <!-- Edge Cyan Glow -->
    <line x1="55" y1="220" x2="305" y2="220" stroke="#00D2FF" stroke-width="2.5"/>
  </svg>`,

  // PRODUCT 2: WORKSTATION BYTEPRO APEX PRO
  'prod-desktop-titan.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" fill="none">
    <rect width="360" height="260" rx="12" fill="#0D1B2A"/>
    <!-- Workstation Tower -->
    <rect x="110" y="25" width="140" height="205" rx="10" fill="#1E293B" stroke="#00D2FF" stroke-width="2"/>
    <!-- Glass side panel -->
    <rect x="125" y="40" width="110" height="140" rx="5" fill="#070D18"/>
    <!-- Motherboard details -->
    <rect x="135" y="50" width="90" height="90" fill="#0A192F"/>
    <!-- Liquid CPU cooler pump -->
    <circle cx="175" cy="80" r="18" fill="#0284C7" stroke="#00F0FF" stroke-width="2"/>
    <circle cx="175" cy="80" r="8" fill="#FFFFFF"/>
    <!-- GPU Card -->
    <rect x="135" y="110" width="90" height="24" rx="3" fill="#334155" stroke="#38BDF8" stroke-width="1.5"/>
    <circle cx="155" cy="122" r="7" fill="#0F172A" stroke="#00D2FF"/>
    <circle cx="185" cy="122" r="7" fill="#0F172A" stroke="#00D2FF"/>
    <!-- Front mesh RGB strip -->
    <line x1="240" y1="35" x2="240" y2="215" stroke="#00F0FF" stroke-width="4" stroke-linecap="round"/>
    <!-- Feet -->
    <rect x="120" y="230" width="20" height="8" rx="2" fill="#475569"/>
    <rect x="220" y="230" width="20" height="8" rx="2" fill="#475569"/>
  </svg>`,

  // PRODUCT 3: MONITOR CURVO BYTEPRO VISION 27
  'prod-monitor-ultra.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" fill="none">
    <rect width="360" height="260" rx="12" fill="#0D1B2A"/>
    <!-- Stand Base -->
    <path d="M130 225 L 180 180 L 230 225 Z" fill="#334155" stroke="#475569" stroke-width="2"/>
    <rect x="174" y="150" width="12" height="40" fill="#475569"/>
    <!-- Curved Bezel -->
    <path d="M40 50 Q 180 35, 320 50 L 320 170 Q 180 185, 40 170 Z" fill="#1E293B" stroke="#00D2FF" stroke-width="2"/>
    <path d="M48 57 Q 180 43, 312 57 L 312 163 Q 180 177, 48 163 Z" fill="#0284C7"/>
    <!-- Screen Horizon Graphic -->
    <path d="M48 140 Q 180 100, 312 135 L 312 163 Q 180 177, 48 163 Z" fill="#075985"/>
    <circle cx="180" cy="100" r="22" fill="#38BDF8" opacity="0.7"/>
    <!-- Specs tag on screen -->
    <rect x="60" y="70" width="85" height="20" rx="4" fill="#0F172A" opacity="0.8"/>
    <text x="66" y="84" fill="#00D2FF" font-family="sans-serif" font-weight="700" font-size="10">2K • 165Hz • 1ms</text>
  </svg>`,

  // PRODUCT 4: KIT TECLADO Y MOUSE MECHSTRIKE
  'prod-keyboard-mouse.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" fill="none">
    <rect width="360" height="260" rx="12" fill="#0D1B2A"/>
    <!-- Keyboard Deck -->
    <g transform="translate(30, 70)">
      <rect width="210" height="120" rx="8" fill="#1E293B" stroke="#00D2FF" stroke-width="2"/>
      <!-- Keycaps Matrix -->
      <g fill="#0F172A" stroke="#38BDF8" stroke-width="0.8">
        <rect x="10" y="12" width="16" height="16" rx="2"/>
        <rect x="32" y="12" width="16" height="16" rx="2"/>
        <rect x="54" y="12" width="16" height="16" rx="2"/>
        <rect x="76" y="12" width="16" height="16" rx="2"/>
        <rect x="98" y="12" width="16" height="16" rx="2"/>
        <rect x="120" y="12" width="16" height="16" rx="2"/>
        <rect x="142" y="12" width="16" height="16" rx="2"/>
        <rect x="164" y="12" width="36" height="16" rx="2" fill="#0284C7"/>

        <rect x="10" y="34" width="22" height="16" rx="2"/>
        <rect x="38" y="34" width="16" height="16" rx="2"/>
        <rect x="60" y="34" width="16" height="16" rx="2"/>
        <rect x="82" y="34" width="16" height="16" rx="2"/>
        <rect x="104" y="34" width="16" height="16" rx="2"/>
        <rect x="126" y="34" width="16" height="16" rx="2"/>
        <rect x="148" y="34" width="16" height="16" rx="2"/>
        <rect x="170" y="34" width="30" height="16" rx="2"/>

        <rect x="10" y="56" width="28" height="16" rx="2"/>
        <rect x="44" y="56" width="16" height="16" rx="2"/>
        <rect x="66" y="56" width="16" height="16" rx="2"/>
        <rect x="88" y="56" width="16" height="16" rx="2"/>
        <rect x="110" y="56" width="16" height="16" rx="2"/>
        <rect x="132" y="56" width="16" height="16" rx="2"/>
        <rect x="154" y="56" width="46" height="16" rx="2" fill="#00D2FF"/>

        <!-- Spacebar -->
        <rect x="10" y="78" width="30" height="20" rx="2"/>
        <rect x="46" y="78" width="105" height="20" rx="3" stroke="#00F0FF" stroke-width="1.5"/>
        <rect x="157" y="78" width="43" height="20" rx="2"/>
      </g>
    </g>

    <!-- Mouse -->
    <g transform="translate(260, 80)">
      <path d="M15 0 C 40 -5, 55 -5, 65 15 C 75 40, 70 80, 55 100 C 40 110, 20 110, 10 100 C -2 80 -2 40 5 15 Z" fill="#1E293B" stroke="#00D2FF" stroke-width="2"/>
      <rect x="32" y="15" width="6" height="20" rx="3" fill="#00F0FF"/>
      <path d="M18 60 Q 36 48, 54 60" stroke="#38BDF8" stroke-width="2" fill="none"/>
    </g>
  </svg>`,

  // PRODUCT 5: IMPRESORA BYTEPRO PRINTFLOW X
  'prod-printer-eco.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" fill="none">
    <rect width="360" height="260" rx="12" fill="#0D1B2A"/>
    <!-- Top paper input -->
    <rect x="115" y="30" width="130" height="35" rx="4" fill="#FFFFFF"/>
    <line x1="130" y1="42" x2="225" y2="42" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="130" y1="50" x2="200" y2="50" stroke="#CBD5E1" stroke-width="2"/>

    <!-- Printer main body -->
    <rect x="60" y="65" width="240" height="135" rx="10" fill="#1E293B" stroke="#00D2FF" stroke-width="2"/>
    <!-- Scanner flatbed -->
    <rect x="60" y="65" width="240" height="28" rx="6" fill="#334155"/>
    <circle cx="275" cy="79" r="5" fill="#00F0FF"/>

    <!-- Output Paper Sheet -->
    <rect x="95" y="140" width="170" height="50" rx="4" fill="#0F172A" stroke="#475569"/>
    <rect x="115" y="155" width="130" height="40" rx="2" fill="#FFFFFF"/>
    <line x1="125" y1="168" x2="215" y2="168" stroke="#0284C7" stroke-width="2.5"/>
    <line x1="125" y1="178" x2="195" y2="178" stroke="#94A3B8" stroke-width="2"/>

    <!-- Continuous Ink Reservoir (Ecotank style) -->
    <rect x="72" y="102" width="55" height="26" rx="4" fill="#0A192F" stroke="#38BDF8" stroke-width="1"/>
    <circle cx="82" cy="115" r="4.5" fill="#00D2FF"/>
    <circle cx="94" cy="115" r="4.5" fill="#EC4899"/>
    <circle cx="106" cy="115" r="4.5" fill="#FACC15"/>
    <circle cx="118" cy="115" r="4.5" fill="#475569"/>
  </svg>`,

  // PRODUCT 6: GPU BYTEPRO TITAN RTX 4060 TI
  'prod-gpu-rtx.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" fill="none">
    <rect width="360" height="260" rx="12" fill="#0D1B2A"/>
    <!-- GPU Chassis -->
    <g transform="translate(30, 70)">
      <rect width="300" height="110" rx="8" fill="#1E293B" stroke="#00D2FF" stroke-width="2"/>
      <!-- Heatsink fins lines inside -->
      <g opacity="0.3" stroke="#64748B" stroke-width="1">
        <line x1="30" y1="15" x2="30" y2="95"/>
        <line x1="50" y1="15" x2="50" y2="95"/>
        <line x1="70" y1="15" x2="70" y2="95"/>
        <line x1="130" y1="15" x2="130" y2="95"/>
        <line x1="150" y1="15" x2="150" y2="95"/>
        <line x1="170" y1="15" x2="170" y2="95"/>
        <line x1="230" y1="15" x2="230" y2="95"/>
        <line x1="250" y1="15" x2="250" y2="95"/>
        <line x1="270" y1="15" x2="270" y2="95"/>
      </g>
      <!-- Triple Fan Cooler -->
      <!-- Fan 1 -->
      <circle cx="60" cy="55" r="35" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="60" cy="55" r="12" fill="#0284C7"/>
      <!-- Fan 2 -->
      <circle cx="150" cy="55" r="35" fill="#0F172A" stroke="#00D2FF" stroke-width="2.5"/>
      <circle cx="150" cy="55" r="12" fill="#00D2FF"/>
      <!-- Fan 3 -->
      <circle cx="240" cy="55" r="35" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="240" cy="55" r="12" fill="#0284C7"/>
      <!-- Top illuminated RGB bar -->
      <rect x="90" y="8" width="120" height="8" rx="2" fill="#00F0FF"/>
      <!-- PCIe Connector gold contacts -->
      <rect x="40" y="110" width="140" height="12" fill="#EAB308"/>
      <line x1="45" y1="116" x2="175" y2="116" stroke="#854D0E" stroke-width="3" stroke-dasharray="3 2"/>
    </g>
  </svg>`
};

for (const [filename, content] of Object.entries(assets)) {
  const filePath = path.join(targetDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf8');
  console.log(`Generated: ${filename}`);
}

console.log('All SVG assets generated successfully!');
