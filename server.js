const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// Route enkripsi
app.post("/encrypt", (req, res) => {
  const { message, caesarKey, xorKey } = req.body;

  if (!message || !caesarKey || !xorKey) {
    return res.json({ error: "Semua input harus diisi" });
  }

  const caesarEncrypted = caesarEncrypt(message, parseInt(caesarKey));
  const xorEncrypted = xorEncrypt(caesarEncrypted, xorKey);

  res.json({ cipher: xorEncrypted });
});

// Route dekripsi
app.post("/decrypt", (req, res) => {
  const { cipher, caesarKey, xorKey } = req.body;

  if (!cipher || !caesarKey || !xorKey) {
    return res.json({ error: "Semua input harus diisi" });
  }

  const xorDecrypted = xorDecrypt(cipher, xorKey);
  const caesarDecrypted = caesarDecrypt(xorDecrypted, parseInt(caesarKey));

  res.json({ message: caesarDecrypted });
});


// ===== Caesar Cipher =====
function caesarEncrypt(text, shift) {
  return text.split("").map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = char === char.toUpperCase() ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26) + base);
    }
    return char;
  }).join("");
}

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - shift);
}

// ===== XOR Cipher =====
function xorEncrypt(text, key) {
  return text.split("")
    .map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length)))
    .join("");
}

function xorDecrypt(cipher, key) {
  return xorEncrypt(cipher, key); // XOR simetris
}
