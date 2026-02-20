const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } = require("firebase/firestore");
require("dotenv").config();

// ─── Cloudinary Setup ───
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ─── Firebase Setup ───
const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});
const db = getFirestore(firebaseApp);

// ─── Express Setup ───
const app = express();
app.use(cors());
app.use(express.json());

// Multer — store uploads in memory (we send buffer straight to Cloudinary)
const upload = multer({ storage: multer.memoryStorage() });

// ─── POST /add-member ───
app.post("/add-member", upload.single("image"), async (req, res) => {
  try {
    const { title, name, team, role, linkedinUrl, githubUrl } = req.body;

    // Validate required fields
    if (!title || !name || !team || !role || !linkedinUrl || !githubUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    // Upload image to Cloudinary
    const imageUrl = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "mlsc-members" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }
      );
      stream.end(req.file.buffer);
    });

    // Save member to Firestore
    const member = {
      title,
      name,
      team,
      role,
      linkedinUrl,
      githubUrl,
      imageUrl,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "members"), member);

    res.status(201).json({ message: "Member added", id: docRef.id, imageUrl });
  } catch (error) {
    console.error("Error adding member:", error);
    res.status(500).json({ error: "Failed to add member" });
  }
});

// ─── GET /members (optional — to verify data) ───
app.get("/members", async (req, res) => {
  try {
    const q = query(collection(db, "members"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const members = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    res.status(500).json({ error: "Failed to fetch members" });
  }
});

// ─── GET /health (for frontend status check) ───
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ─── Start Server ───
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
