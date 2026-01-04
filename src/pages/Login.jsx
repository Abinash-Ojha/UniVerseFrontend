import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        alert("Invalid credentials");
        return;
      }

      const token = await res.text();
      localStorage.setItem("token", token);
      localStorage.setItem("token_created_at", Date.now());
      navigate("/world");
    } finally {
      setLoading(false);
    }
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial',
    },

    /* ---------------- LEFT SECTION ---------------- */

    leftSection: {
      flex: 1,
      padding: "80px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#ffffff",
    },

    heading: {
      fontSize: "44px",
      fontWeight: 700,
      color: "#0f172a",
      marginBottom: "12px",
    },

    sub2heading: {
      fontSize: "20px",
      fontWeight: 400,
      color: "#475569",
      marginBottom: "28px",
      maxWidth: "520px",
    },

    warningBox: {
      padding: "12px 16px",
      backgroundColor: "#fff1f2",
      color: "#9f1239",
      borderLeft: "4px solid #e11d48",
      borderRadius: "6px",
      fontSize: "14px",
      marginBottom: "12px",
      maxWidth: "520px",
    },

    desktopNote: {
      fontSize: "14px",
      color: "#64748b",
      marginBottom: "28px",
      fontStyle: "italic",
    },

    description: {
      fontSize: "16px",
      color: "#64748b",
      lineHeight: 1.7,
      marginBottom: "20px",
      maxWidth: "520px",
    },

    featureList: {
      paddingLeft: "18px",
      margin: 0,
      color: "#475569",
      fontSize: "15px",
      lineHeight: 1.9,
      maxWidth: "520px",
    },

    footer: {
      marginTop: "48px",
      fontSize: "13px",
      color: "#94a3b8",
    },

    contactLink: {
      color: "#0f172a",
      textDecoration: "none",
      fontWeight: 500,
    },

    /* ---------------- RIGHT SECTION ---------------- */

    rightSection: {
      flex: 1,
      padding: "80px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      background: "#f8fafc",
    },

    formContainer: {
      maxWidth: "400px",
      marginTop: "40px",
    },

    formGroup: {
      marginBottom: "24px",
    },

    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: 500,
      color: "#334155",
      marginBottom: "8px",
    },

    inputWrapper: {
      position: "relative",
    },

    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      border: "1px solid #e2e8f0",
      borderRadius: "6px",
      outline: "none",
      transition: "border-color 0.2s",
    },

    eyeButton: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      color: "#64748b",
    },

    button: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      fontWeight: 600,
      color: "#ffffff",
      background: "#0f172a",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "opacity 0.2s",
    },

    disabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    divider: {
      textAlign: "center",
      margin: "24px 0",
      color: "#94a3b8",
      fontSize: "14px",
    },

    linkButton: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      fontWeight: 600,
      color: "#0f172a",
      background: "transparent",
      border: "1px solid #e2e8f0",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.2s",
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        input:focus {
          border-color: #0f172a !important;
        }
        button:hover:not(:disabled) {
          opacity: 0.9;
        }
        .link-button:hover {
          background: #f1f5f9;
        }
      `}</style>

      {/* LEFT */}
      <div style={styles.leftSection}>
        <h1 style={styles.heading}>Welcome Back to the Verse</h1>

        <p style={styles.sub2heading}>
          Your identity already exists. Step back into the shared world.
        </p>

        <div style={styles.warningBox}>
          ⚠️ This app runs on Render Free Tier. The first request may take{" "}
          <b>2–3 minutes</b> to wake up.
        </div>

        <div style={styles.desktopNote}>
          💻 Use a desktop device for the best experience
        </div>

        <p style={styles.description}>
          Resume your presence in a virtual campus where movement is live and
          conversations depend on proximity.
        </p>

        <ul style={styles.featureList}>
          <li>Restore your persistent identity</li>
          <li>Reconnect to live presence</li>
          <li>Resume exactly where you left off</li>
        </ul>

        <div style={styles.footer}>
          For any queries, contact{" "}
          <a href="mailto:ojhabinash546@gmail.com" style={styles.contactLink}>
            ojhabinash546@gmail.com
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              style={styles.input}
              placeholder="you@universe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <button
                type="button"
                style={styles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </button>
            </div>
          </div>

          <button
            style={{ ...styles.button, ...(loading ? styles.disabled : {}) }}
            onClick={login}
            disabled={loading}
          >
            {loading ? "Restoring Presence..." : "Enter the World"}
          </button>

          <div style={styles.divider}>or</div>

          <button
            className="link-button"
            style={styles.linkButton}
            onClick={() => navigate("/register")}
          >
            Create New Identity
          </button>
        </div>
      </div>
    </div>
  );
}
