"use client";
import { useState } from "react";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "e03789f4-94ae-46c1-8bd7-b6b0d88dd4b3");

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
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting the form:", error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-sm mx-auto sm:max-w-xl">
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
      <input type="submit" className="bg-white text-black font-bold px-4 py-2 rounded-md" disabled={isLoading} value={isLoading ? "Loading..." : "Submit"} />
    </form>
  );
}

// Production Api: b36221af-c069-41c5-bafe-62ea05f03855
