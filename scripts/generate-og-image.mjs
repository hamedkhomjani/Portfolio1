import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="18%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#B0B0B5" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#B0B0B5" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0A0A0B"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <g font-family="Inter, Helvetica Neue, Arial, sans-serif">
    <text x="80" y="120" fill="#8E8E93" font-size="18" font-weight="600" letter-spacing="6">
      UX/UI DESIGNER &amp; FRONTEND DEVELOPER
    </text>

    <text x="80" y="255" fill="#F2F2F2" font-size="84" font-weight="600" letter-spacing="-2">
      Hamed Khomjani
    </text>

    <text x="80" y="335" fill="#8E8E93" font-size="32" font-weight="400">
      Designing with a developer&#8217;s mindset.
    </text>
    <text x="80" y="382" fill="#8E8E93" font-size="32" font-weight="400">
      Building with a designer&#8217;s eye.
    </text>

    <rect x="80" y="470" width="64" height="2" fill="#B0B0B5" fill-opacity="0.6"/>
    <text x="80" y="530" fill="#B0B0B5" font-size="20" font-weight="500" letter-spacing="1">
      hamedkhomjani.github.io/Portfolio1
    </text>
  </g>
</svg>
`;

sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png')
  .then(() => console.log('Generated public/og-image.png (1200x630)'))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
