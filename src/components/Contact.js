import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { MotionSection } from "./Assets";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // send form data to FastAPI
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://sharathhebbar24-email-sender.hf.space/send-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error sending message.", err);
      console.log(err);
    }
  };

  return (
    <MotionSection id="contact" title="Contact" icon={Mail}>
      <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-950/40">
        <p className="text-neutral-300">Have a project or a role in mind? Let’s talk.</p>

        <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-1"
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-1"
            placeholder="Email"
            required
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-2"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-2"
            rows={5}
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center gap-2 bg-lime-400 text-black font-bold px-5 py-3 rounded-xl w-max"
          >
            Send Message <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {status && <p className="mt-3 text-sm text-neutral-400">{status}</p>}
      </div>
    </MotionSection>
  );
}
