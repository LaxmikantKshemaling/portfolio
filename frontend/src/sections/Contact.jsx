import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { sendContactMessage } from "@/api/api.jsx";
import { toast } from "react-toastify";

const contactInfo = [
  { icon: Mail, value: "laxmikantaloji77@gmail.com" },
  { icon: Phone, value: "+91 9108530832" },
  { icon: MapPin, value: "India" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const toastId = toast.loading("Sending message...");

    try {
      const response = await sendContactMessage(formData);

      toast.update(toastId, {
        render: response.message || "Message sent successfully! ✅",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("FULL ERROR:", error);
      console.error("ERROR RESPONSE:", error.response);
      console.error("ERROR DATA:", error.response?.data);

      toast.update(toastId, {
        render:
          error.response?.data?.message ||
          "Failed to send message ❌",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="glass p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows={5}
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </Button>

          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-semibold text-xl mb-4">
              Contact Information
            </h3>

            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 mb-4"
              >
                <item.icon
                  className="text-primary"
                  size={22}
                />
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="glass p-6 rounded-2xl border border-green-500/20">
            <p className="text-green-400 font-semibold">
              Currently Available
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              Open to Java Full Stack Developer opportunities,
              freelance projects, and collaboration on exciting
              web applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};