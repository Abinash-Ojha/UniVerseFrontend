import { useState } from "react";

export default function ChatPanel({
  targetEmail,
  messages,
  onSend,
  currentUserEmail,
  onClose
}) {
  const [text, setText] = useState("");

  const visibleMessages = messages.filter(
    (m) =>
      (m.from === currentUserEmail && m.to === targetEmail) ||
      (m.from === targetEmail && m.to === currentUserEmail)
  );

  function send() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      send();
    }
  }

  const styles = {
    container: {
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      width: '320px',
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '16px',
      padding: '0',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.2)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      zIndex: 1000,
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))',
      padding: '16px',
      borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headerTitle: {
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    onlineIndicator: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
      boxShadow: '0 0 8px #10b981',
      animation: 'pulse 2s ease-in-out infinite'
    },
    closeButton: {
      background: 'rgba(239, 68, 68, 0.2)',
      border: 'none',
      color: '#ef4444',
      width: '28px',
      height: '28px',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    messagesContainer: {
      height: '200px',
      overflowY: 'auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      background: 'rgba(0, 0, 0, 0.15)'
    },
    messageWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    messageWrapperRight: {
      alignItems: 'flex-end'
    },
    messageBubble: {
      maxWidth: '75%',
      padding: '10px 14px',
      borderRadius: '12px',
      fontSize: '14px',
      wordWrap: 'break-word',
      position: 'relative'
    },
    messageBubbleOther: {
      background: 'rgba(71, 85, 105, 0.6)',
      color: '#e2e8f0',
      borderBottomLeftRadius: '4px'
    },
    messageBubbleUser: {
      background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
      color: '#fff',
      borderBottomRightRadius: '4px'
    },
    messageSender: {
      fontSize: '11px',
      color: '#94a3b8',
      marginBottom: '4px',
      fontWeight: '500'
    },
    inputContainer: {
      padding: '16px',
      borderTop: '1px solid rgba(139, 92, 246, 0.2)',
      background: 'rgba(0, 0, 0, 0.15)',
      display: 'flex',
      gap: '8px'
    },
    inputWrapper: {
      flex: 1,
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      background: 'rgba(2, 6, 23, 0.6)',
      border: '1px solid rgba(71, 85, 105, 0.5)',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box'
    },
    sendButton: {
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
      border: 'none',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
    },
    emptyState: {
      textAlign: 'center',
      color: '#64748b',
      fontSize: '13px',
      padding: '40px 20px'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .close-btn:hover {
          background: rgba(239, 68, 68, 0.4) !important;
          transform: scale(1.1);
        }
        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
        }
        .send-btn:active {
          transform: translateY(0);
        }
        .chat-input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }
        .messages-container::-webkit-scrollbar {
          width: 6px;
        }
        .messages-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .messages-container::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
        .message-bubble {
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          <div style={styles.onlineIndicator}></div>
          <span>{targetEmail}</span>
        </div>
        {onClose && (
          <button 
            className="close-btn" 
            style={styles.closeButton}
            onClick={onClose}
          >
            ×
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="messages-container" style={styles.messagesContainer}>
        {visibleMessages.length === 0 ? (
          <div style={styles.emptyState}>
            No messages yet. Start the conversation!
          </div>
        ) : (
          visibleMessages.map((m, i) => {
            const isUser = m.from === currentUserEmail;
            return (
              <div
                key={i}
                style={{
                  ...styles.messageWrapper,
                  ...(isUser ? styles.messageWrapperRight : {})
                }}
              >
                {!isUser && (
                  <div style={styles.messageSender}>{m.from}</div>
                )}
                <div
                  className="message-bubble"
                  style={{
                    ...styles.messageBubble,
                    ...(isUser ? styles.messageBubbleUser : styles.messageBubbleOther)
                  }}
                >
                  {m.content}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Input */}
      <div style={styles.inputContainer}>
        <div style={styles.inputWrapper}>
          <input
            className="chat-input"
            style={styles.input}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
        </div>
        <button 
          className="send-btn" 
          style={styles.sendButton}
          onClick={send}
        >
          Send
        </button>
      </div>
    </div>
  );
}