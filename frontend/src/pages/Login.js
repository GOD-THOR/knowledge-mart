import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="input mb-2" />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="input mb-2" />
      <button type="submit" className="btn btn-primary w-full">Login</button>
    </form>
  );
}