"use client";

import { useState, FormEvent } from "react";

interface GateAuthProps {
  children: React.ReactNode;
}

export function GateAuth({ children }: GateAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return document.cookie.includes("gate_auth=authenticated");
    }
    return false;
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gate-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="gate-container">
      <div className="gate-card">
        <div className="gate-header">
          <div className="gate-logo">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M16 28C16 28 18 32 24 32C30 32 32 28 32 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="18" cy="20" r="2" fill="currentColor" />
              <circle cx="30" cy="20" r="2" fill="currentColor" />
            </svg>
          </div>
          <h1>Welcome to QUVUR</h1>
          <p className="gate-subtitle">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="gate-form">
          <div className="gate-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              autoComplete="email"
            />
          </div>

          <div className="gate-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          {error && <div className="gate-error">{error}</div>}

          <button type="submit" className="gate-button" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="gate-footer">
          <p>
            Questions? Email us at{" "}
            <a href="mailto:numanovikrom454@gmail.com">
              numanovikrom454@gmail.com
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .gate-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e293b 50%,
            #0f172a 100%
          );
          padding: 20px;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
        }

        .gate-card {
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 48px 40px;
          width: 100%;
          max-width: 420px;
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .gate-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .gate-logo {
          color: #38bdf8;
          margin-bottom: 16px;
          display: flex;
          justify-content: center;
        }

        .gate-header h1 {
          color: #f1f5f9;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .gate-subtitle {
          color: #94a3b8;
          font-size: 14px;
          margin: 0;
        }

        .gate-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .gate-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gate-field label {
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 500;
        }

        .gate-field input {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 10px;
          padding: 14px 16px;
          font-size: 15px;
          color: #f1f5f9;
          transition: all 0.2s ease;
          outline: none;
        }

        .gate-field input::placeholder {
          color: #64748b;
        }

        .gate-field input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }

        .gate-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          text-align: center;
        }

        .gate-button {
          background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
          border: none;
          border-radius: 10px;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .gate-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(56, 189, 248, 0.3);
        }

        .gate-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .gate-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .gate-footer {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
          text-align: center;
        }

        .gate-footer p {
          color: #64748b;
          font-size: 13px;
          margin: 0;
          line-height: 1.6;
        }

        .gate-footer a {
          color: #38bdf8;
          text-decoration: none;
          font-weight: 500;
        }

        .gate-footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
