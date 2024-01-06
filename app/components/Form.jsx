"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "b36221af-c069-41c5-bafe-62ea05f03855");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        console.log(result);
        document.getElementById("contactForm").reset();
        setShowDialog(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      // setShowDialog(true);
      console.error("Error submitting the form:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-xs mx-auto sm:max-w-xl" id="contactForm">
        <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
        <input type="hidden" name="subject" value="Potential Client Message"></input>
        <input type="hidden" name="from_name" value="Arcane Fusion"></input>
        <label className="text-gray-50" htmlFor="name">
          Your Name
        </label>
        <br />
        <input type="text" placeholder="Your Name" id="name" name="username" required /> <br />
        <label className="text-gray-50" htmlFor="email">
          Your Email
        </label>
        <br />
        <input type="email" placeholder="Your Name" id="email" name="email" required /> <br />
        <label className="text-gray-50" htmlFor="topic">
          Your Topic
        </label>
        <br />
        <select id="topic" name="topic" required>
          <option value="no-topic">Choose Topic</option>
          <option value="project-discussion">Discussion about the Project</option>
          <option value="more-about-us">Get to know us</option>
          <option value="appreciation-message">Random Appreciation Message</option>
        </select>
        <br />
        <label className="text-gray-50" htmlFor="message">
          Message
        </label>
        <br />
        <textarea name="message" id="message" rows="10" placeholder="Let us know your thoughts..." required></textarea> <br />
        <AlertDialog>
          <AlertDialogTrigger type="submit" className="bg-white text-black font-bold px-4 py-2 rounded-md w-full" disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </AlertDialogTrigger>
          {showDialog && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Thanks for Reaching out to us!</AlertDialogTitle>
                <AlertDialogDescription>We will get back to you 😊</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </form>
    </>
  );
}

// Production Api: b36221af-c069-41c5-bafe-62ea05f03855
