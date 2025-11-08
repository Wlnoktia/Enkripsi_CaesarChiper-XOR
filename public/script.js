async function encryptMessage() {
  const message = document.getElementById("message").value;
  const caesarKey = document.getElementById("caesarKey").value;
  const xorKey = document.getElementById("xorKey").value;

  const res = await fetch("/encrypt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, caesarKey, xorKey })
  });

  const data = await res.json();
  document.getElementById("cipher").value = data.cipher || data.error;
}

async function decryptMessage() {
  const cipher = document.getElementById("cipher").value;
  const caesarKey = document.getElementById("caesarKey").value;
  const xorKey = document.getElementById("xorKey").value;

  const res = await fetch("/decrypt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cipher, caesarKey, xorKey })
  });

  const data = await res.json();
  document.getElementById("decrypted").value = data.message || data.error;
}
