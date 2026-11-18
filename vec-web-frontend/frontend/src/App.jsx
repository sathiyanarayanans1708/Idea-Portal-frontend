import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  ["overview", "Dashboard"],
  ["projects", "Projects"],
  ["team", "Team"],
  ["queries", "Queries"],
  ["messages", "Messages"]
];

function Icon({ name }) {
  const paths = {
    overview: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
    projects: <><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H11l2 2h5.5A2.5 2.5 0 0 1 21 9.5V18H3Z"/><path d="M3 10h18"/></>,
    team: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="9" r="2"/><path d="M16 14h1a4 4 0 0 1 4 4v2"/></>,
    queries: <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H6l-4 2v-7.5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 9a3 3 0 1 1 4.2 2.7c-1.2.7-1.7 1.3-1.7 2.3M11.5 17h.01"/></>,
    messages: <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H6l-4 2v-7.5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M7.5 11.5h9"/></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{paths[name]}</svg>;
}

function AuthScreen({ onAuthenticated }) {
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setError("");
    setBusy(true);
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    await new Promise((resolve) => window.setTimeout(resolve, 250));
    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    if (!email || !payload.password) {
      setError("Enter your email and password.");
      setBusy(false);
      return;
    }
    const account = {
      name: mode === "signup" ? name || email.split("@")[0] : email.split("@")[0],
      email,
      role: payload.role || "student"
    };
    localStorage.setItem("nodeTheorySession", JSON.stringify(account));
    onAuthenticated(account);
    setBusy(false);
  }

  return (
    <main className="auth-layout">
      <section className="auth-card" aria-label="Account access">
        <div className="auth-brand"><span className="brand-mark">NT</span><strong>NODE THEORY</strong></div>
        <div className="auth-tabs">
          <button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Create account</button>
          <button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Log in</button>
        </div>
        <h1>{mode === "signup" ? "Start with a fresh account" : "Welcome back"}</h1>
        <form onSubmit={submit}>
          {mode === "signup" && (
            <>
              <label>Full name<input name="name" required autoComplete="name" /></label>
              <label>Account type<select name="role"><option value="student">Student</option><option value="teacher">Teacher</option></select></label>
              <label>Department<input name="department" autoComplete="organization" /></label>
            </>
          )}
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Password<input name="password" type="password" required autoComplete={mode === "signup" ? "new-password" : "current-password"} /></label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="primary-button" type="submit" disabled={busy}>{busy ? "Please wait…" : mode === "signup" ? "Create account" : "Log in"}</button>
        </form>
      </section>
    </main>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-row">
      <div className="project-icon">DOC</div>
      <div className="project-copy">
        <strong>{project.name}</strong>
        <span>{project.type} · {project.date}</span>
      </div>
      <span className={`status ${project.status === "Approved" ? "approved" : "review"}`}>{project.status}</span>
    </article>
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState(null);
  const [workspace, setWorkspace] = useState(null);
  const [page, setPage] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadWorkspace() {
    setError("");
    const account = authenticated || JSON.parse(localStorage.getItem("nodeTheorySession") || "null");
    if (!account) {
      setAuthenticated(false);
      setLoading(false);
      return;
    }
    setWorkspace({
      role: account.role,
      account,
      projects: [],
      queries: [],
      members: []
    });
    setAuthenticated(account);
    setLoading(false);
  }

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("nodeTheorySession") || "null");
    if (account) {
      setAuthenticated(account);
      setWorkspace({
        role: account.role,
        account,
        projects: [],
        queries: [],
        members: []
      });
    } else {
      setAuthenticated(false);
    }
    setLoading(false);
  }, []);

  function logout() {
    localStorage.removeItem("nodeTheorySession");
    setAuthenticated(false);
    setWorkspace(null);
  }

  if (loading) return <main className="loading-screen"><div className="spinner" />Loading workspace…</main>;
  if (!authenticated) return <AuthScreen onAuthenticated={() => loadWorkspace()} />;

  const projects = workspace?.projects || workspace?.submissions || [];
  const queries = workspace?.queries || [];
  const members = workspace?.members || [];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">NT</span><strong>NODE THEORY</strong></div>
        <nav aria-label="Main navigation">
          {NAV_ITEMS.map(([key, label]) => (
            <button key={key} type="button" className={`nav-item ${page === key ? "active" : ""}`} onClick={() => setPage(key)}>
              <Icon name={key} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <button className="logout-button" type="button" onClick={logout}>Log out</button>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <span>Workspace</span><b>{NAV_ITEMS.find(([key]) => key === page)?.[1]}</b>
          <span className="profile-chip">{workspace.account.name}</span>
        </header>
        <div className="content">
          {error && <p className="page-error" role="alert">{error}</p>}
          {page === "overview" && (
            <>
              <div className="page-heading"><div><p className="eyebrow">{workspace.role === "teacher" ? "TEACHER WORKSPACE" : "STUDENT WORKSPACE"}</p><h1>Good morning, {workspace.account.name}</h1><p>A standalone React workspace for projects, teams, and questions.</p></div></div>
              <section className="welcome-banner"><div><span>YOUR PROJECT WORKSPACE</span><h2>Make your next idea happen.</h2><p>Manage projects, feedback, teams, and questions.</p></div></section>
              <section className="stats-grid">
                <article><span>Projects</span><strong>{projects.length}</strong></article>
                <article><span>Approved</span><strong>{projects.filter((project) => project.status === "Approved").length}</strong></article>
                <article><span>Awaiting review</span><strong>{projects.filter((project) => project.status === "In review").length}</strong></article>
              </section>
              <section className="panel"><div className="panel-header"><h2>Recent projects</h2></div>{projects.slice(0, 4).map((project) => <ProjectCard key={project.id} project={project} />)}{projects.length === 0 && <div className="empty-state">No projects yet.</div>}</section>
            </>
          )}
          {page === "projects" && <section className="panel"><div className="panel-header"><h2>Projects</h2></div>{projects.map((project) => <ProjectCard key={project.id} project={project} />)}{projects.length === 0 && <div className="empty-state">No projects yet.</div>}</section>}
          {page === "team" && <section className="panel"><div className="panel-header"><h2>{workspace.teamName || "My team"}</h2></div>{members.map((member) => <div className="member-row" key={member.id || member.email}><span className="avatar">{member.initials}</span><div><strong>{member.name}</strong><span>{member.email}</span></div></div>)}</section>}
          {page === "queries" && <section className="panel"><div className="panel-header"><h2>Questions</h2></div>{queries.map((query) => <article className="query-row" key={query.id}><strong>{query.title}</strong><p>{query.details}</p><span>{query.meta}</span></article>)}</section>}
          {page === "messages" && <section className="panel"><div className="panel-header"><h2>Messages</h2></div><div className="empty-state">No messages yet.</div></section>}
        </div>
      </main>
    </div>
  );
}

export default App;
