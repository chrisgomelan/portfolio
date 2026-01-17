"use client";
import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Send } from "lucide-react";
import { Toaster, toast } from "sonner";

export function ContactUs2() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    errors: {},
    submitting: false,
    submitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setState({
          name: "",
          email: "",
          message: "",
          errors: {},
          submitting: false,
          submitted: true,
        });
        toast.success('Email sent successfully! ✅');
      } else {
        setState({
          ...state,
          submitting: false,
          errors: { general: data.error || 'Failed to send email' },
        });
        toast.error(data.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      setState({
        ...state,
        submitting: false,
        errors: { general: error.message || 'Failed to send email' },
      });
      toast.error(error.message || 'Failed to send email');
    }
  };
  return (
    <>
    <Toaster position="top-right" richColors />
    <section className="w-3/4 px-2">
      <h2 className="mt-4 mb-3 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Get In Touch
      </h2>
      <p className="text-muted-foreground mb-4 text-center text-xs sm:text-sm md:text-base">
        Have a question or opportunity? I&apos;d love to hear from you. Send me a message!
      </p>
      <div
        className="bg-opacity-10 mx-auto mb-6 grid w-full items-start gap-6 rounded-lg border border-white bg-black px-3 py-6 sm:gap-8 sm:px-4 sm:pt-8 sm:pb-6 md:grid-cols-2 lg:px-12">
        <form className="space-y-6 text-white sm:space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2 text-base sm:text-lg">
            <label htmlFor="name" />
            Name
            <input
              id="name"
              type="text"
              required
              className="flex h-9 w-full rounded-md border border-white bg-black px-2 py-1 text-xs sm:h-10 sm:px-3 sm:py-2 sm:text-sm text-white placeholder-gray-400 outline-none hover:border-gray-300 focus:border-white"
              placeholder="Enter your name"
              name="name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>

          <div className="space-y-2 text-base sm:text-lg">
            <label htmlFor="email" /> Email
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="flex h-9 w-full rounded-md border border-white bg-black px-2 py-1 text-xs sm:h-10 sm:px-3 sm:py-2 sm:text-sm text-white placeholder-gray-400 outline-none hover:border-gray-300 focus:border-white"
              name="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              required
            />
            {state.errors && state.errors.email && (
              <p className="mt-1 text-xs text-red-500">{state.errors.email}</p>
            )}
          </div>
          <div className="space-y-2 text-base sm:text-lg">
            <label htmlFor="message" className="text-base sm:text-lg" />
            Message
            <textarea
              className="mb-4 flex min-h-[80px] w-full rounded-md border border-white bg-black px-2 py-1 text-xs sm:mb-5 sm:min-h-[100px] sm:px-3 sm:py-2 sm:text-sm text-white placeholder-gray-400 outline-none hover:border-gray-300 focus:border-white"
              id="message"
              placeholder="Enter your message"
              name="message"
              value={state.message}
              onChange={(e) => setState({ ...state, message: e.target.value })}
            />
            {state.errors && state.errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {state.errors.message}
              </p>
            )}
          </div>
          <button
            className="group/btn relative block h-9 w-full rounded-md bg-white px-2 py-1 text-center text-xs font-medium text-black transition-all duration-300 ease-in-out hover:bg-gray-200 sm:h-10 sm:py-2 sm:text-sm"
            type="submit"
            disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send"}
            <Send className="mx-1 inline h-3 sm:mx-2 sm:h-4" />
          </button>
        </form>
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white sm:mb-10 sm:text-2xl">
            Connect With Me
          </h3>
          <div className="mb-8 flex gap-4 sm:mb-12 sm:gap-8">
            <a
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white sm:h-10 sm:w-10 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="mailto:christiangomelan@gmail.com">
              <Mail className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </a>
            <div className="text-xs text-white sm:text-sm">
              <p>Email me at </p>
              <p className="break-all">christiangomelan@gmail.com</p>
            </div>
          </div>

          <div className="mb-8 flex gap-4 sm:mb-12 sm:gap-8">
            <a
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white sm:h-10 sm:w-10 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="tel:+639123456789">
              <Phone className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </a>
            <div className="text-xs text-white sm:text-sm">
              <p>Call me at </p>
              <p>+63 926 711 2643</p>
            </div>
          </div>

          <div className="mb-8 flex gap-4 sm:mb-12 sm:gap-8">
            <a
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white px-1 sm:h-10 sm:w-10 sm:px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="https://maps.google.com?q=Taguig,Philippines">
              <MapPin className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </a>
            <div className="text-xs text-white sm:text-sm">
              <p>Based in </p>
              <p>Taguig, Philippines</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 py-4 sm:space-x-12 sm:py-7">
            <a
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-white bg-black sm:h-10 sm:w-10 hover:bg-white transition-all duration-300"
              href="https://linkedin.com/in/christiangomelan" target="_blank" rel="noopener noreferrer  ">
              <Linkedin className="h-4 w-4 text-white group-hover:text-black sm:h-5 sm:w-5" />
            </a>
            <a
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-white bg-black sm:h-10 sm:w-10 hover:bg-white transition-all duration-300"
              href="https://github.com/chrisgomelan" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 text-white group-hover:text-black sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

