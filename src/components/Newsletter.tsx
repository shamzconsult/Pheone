"use client"
import { useState} from "react"
import { motion, AnimatePresence } from "framer-motion"

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#1a1a1a] border border-[#AFFF00]/30 rounded-2xl p-10 max-w-lg w-full text-center shadow-xl"
          initial={{ scale: 0.85, y: 24 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 24 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Check icon */}
          <div className="w-16 h-16 rounded-full bg-[#AFFF00]/15 border-2 border-[#AFFF00] flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M6 14.5L11.5 20L22 9"
                stroke="#AFFF00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-white text-2xl font-black tracking-tight mb-2">You are now subscribed!</h3>
          <p className="text-white/60 font-mono text-sm leading-relaxed mb-7">
          {"Thanks for subscribing. You'll be the first to know..."}
            latest updates, initiatives, and projects from ARBR.
          </p>

          <motion.button
            className="bg-[#AFFF00] text-[#121212] font-bold text-sm px-10 py-3 rounded-xl w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
          >
            Done
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Toast({
  message,
  type,
  onClose,
}: {
  message: string
  type: "error" | "exists"
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-mono shadow-lg
            ${type === "error"
              ? "bg-[#3a1a1a] border border-red-500/40 text-red-400"
              : "bg-[#2a2a10] border border-yellow-400/40 text-yellow-300"
            }`}
          style={{ translateX: "-50%" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <span>{type === "error" ? "✕" : "!"}</span>
          <span>{message}</span>
          <button
            className="ml-2 text-white/40 hover:text-white/80 transition-colors"
            onClick={onClose}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error" | "exists">("idle")
  const [message, setMessage] = useState("")
  const [showModal, setShowModal] = useState(false)

  const showToast = (msg: string, type: "error" | "exists") => {
    setStatus(type)
    setMessage(msg)
    setTimeout(() => setMessage(""), 3000) // auto-dismiss after 4s
  }

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.", "error")
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setEmail("")
        setStatus("success")
        setShowModal(true)
      } else if (data.error?.toLowerCase().includes("already")) {
        showToast("You're already subscribed!", "exists")
      } else {
        showToast(data.error || "Something went wrong. Try again.", "error")
      }
    } catch {
      showToast("Network error. Please try again.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit()
  }

  return (
    <>
      {/* Success Modal */}
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      {/* Error / Exists Toast */}
      <Toast
        message={message}
        type={status === "exists" ? "exists" : "error"}
        onClose={() => setMessage("")}
      />

      <footer className=" relative w-full max-w-6xl mx-auto flex flex-col items-center  pt-4 justify-center bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </motion.span>
              <motion.span
                className="block text-[#AFFF00]"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
              >
                LEVEL UP?
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div className="flex-1 relative" whileFocus={{ scale: 1.02 }}>
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isSubmitting || status === "success"}
                  placeholder="your email address"
                  className="w-full bg-white/5 border-2 border-white/20 rounded-2xl px-4 py-5 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#AFFF00] transition-all duration-300 disabled:opacity-50"
                  whileFocus={{ borderColor: "#AFFF00" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={email.length > 0 ? { boxShadow: "0 0 20px rgba(175,255,0,0.2)" } : { boxShadow: "none" }}
                />
              </motion.div>

              <motion.button
                className="bg-[#AFFF00] text-[#121212] px-10 py-3 rounded-2xl font-bold text-lg tracking-wide whitespace-nowrap relative overflow-hidden disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={handleSubmit}
                disabled={isSubmitting || status === "success"}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span
                  className="relative z-10"
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/80 font-mono text-md max-w-4xl mx-auto leading-relaxed">
              Subscribe to our newsletter to receive the latest updates, and highlights from our
              activities, programmes, and operations. Be the first to know about new initiatives,
              industry developments, and opportunities.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}