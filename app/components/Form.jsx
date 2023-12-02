"use client";

export default function Form() {
  return (
    <form style={{ minHeight: "93dvh" }} className="flex flex-col items-center">
      <label className="text-gray-50" htmlFor="name">
        Your Name
      </label>
      <br />
      <input type="text" placeholder="Your Name" id="name" /> <br />
      <label className="text-gray-50" htmlFor="email">
        Your Email
      </label>
      <br />
      <input type="email" placeholder="Your Name" id="email" /> <br />
      <label className="text-gray-50" htmlFor="topic">
        Your Topic
      </label>
      <br />
      <select id="topic">
        <option value="">Choose Topic</option>
        <option value="">Discussion about the Project</option>
        <option value="">Lorem1</option>
        <option value="">Lorem1</option>
      </select>
      <br />
      <label className="text-gray-50" htmlFor="message">
        Message
      </label>
      <br />
      <textarea id="message" rows="10" placeholder="Let us know your thoughts..."></textarea> <br />
      <input type="submit" className="text-gray-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-md" />
    </form>
  );
}
