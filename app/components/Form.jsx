"use client";

export default function Form() {
  async function handleSubmit(event) {
    event.preventDefault();
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
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ minHeight: "93dvh" }} className="flex flex-col items-center">
      <input type="hidden" name="subject" value="Potential Client Message"></input>
      <input type="hidden" name="from_name" value="Arcane Fusion"></input>
      <label className="text-gray-50" htmlFor="name">
        Your Name
      </label>
      <br />
      <input type="text" placeholder="Your Name" id="name" name="username" /> <br />
      <label className="text-gray-50" htmlFor="email">
        Your Email
      </label>
      <br />
      <input type="email" placeholder="Your Name" id="email" name="email" /> <br />
      <label className="text-gray-50" htmlFor="topic">
        Your Topic
      </label>
      <br />
      <select id="topic" name="topic">
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
      <textarea name="message" id="message" rows="10" placeholder="Let us know your thoughts..."></textarea> <br />
      <input type="submit" className="text-gray-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-md" />
    </form>
  );
}

// Production Api: b36221af-c069-41c5-bafe-62ea05f03855