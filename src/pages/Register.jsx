import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function register() {
    setLoading(true);
    try {
      const res =  await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        alert("Registration failed");
        return;
      }

      alert("Identity created successfully");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial',
    },

    leftSection: {
      flex: 1,
      padding: "80px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#ffffff",
    },

    rightSection: {
      flex: 1,
      padding: "80px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#f8fafc",
    },

    heading: {
      fontSize: "48px",
      fontWeight: 700,
      color: "#0f172a",
      marginBottom: "20px",
      lineHeight: 1.2,
    },

    subheading: {
      fontSize: "18px",
      color: "#64748b",
      lineHeight: 1.6,
      marginBottom: "40px",
      maxWidth: "500px",
    },

    infoText: {
      fontSize: "15px",
      color: "#64748b",
      lineHeight: 1.8,
      marginBottom: "12px",
    },

    formContainer: {
      maxWidth: "400px",
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
      transition: "background 0.2s",
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
      transition: "all 0.2s",
    },

    footer: {
      marginTop: "60px",
      fontSize: "13px",
      color: "#94a3b8",
    },

    contactLink: {
      color: "#0f172a",
      textDecoration: "none",
      fontWeight: 500,
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

      <div style={styles.leftSection}>
        <h1 style={styles.heading}>Enter the Verse</h1>
        <p style={styles.subheading}>
          A shared virtual campus where presence is real, movement is live, and
          conversations happen based on proximity.
        </p>
        <p style={styles.infoText}>
          ✓ Live presence - see others move in real time
        </p>
        <p style={styles.infoText}>
          ✓ Proximity chat - talk only when you are close
        </p>
        <p style={styles.infoText}>
          ✓ Persistent identity - your presence survives sessions
        </p>

        <div style={styles.footer}>
          For any queries, contact{" "}
          <a href="mailto:ojhabinash546@gmail.com" style={styles.contactLink}>
            ojhabinash546@gmail.com
          </a>
        </div>
      </div>

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
                placeholder="Secure your identity"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <button
                type="button"
                style={styles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁" : "👁"}
              </button>
            </div>
          </div>

          <button
            style={{ ...styles.button, ...(loading ? styles.disabled : {}) }}
            onClick={register}
            disabled={loading}
          >
            {loading ? "Creating Your Identity..." : "Enter the World"}
          </button>

          <div style={styles.divider}>or</div>

          <button
            className="link-button"
            style={styles.linkButton}
            onClick={() => navigate("/login")}
          >
            I Already Exist
          </button>
        </div>
      </div>
    </div>
  );
}