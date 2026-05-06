import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// SKILLS STACK MASTERY — full interactive reference
// ═══════════════════════════════════════════════════════════════════════════════

const T = {
  bg: "#07080f", surface: "#0d0e18", card: "#12131e", border: "#1c1d2e",
  text: "#e4e4f0", muted: "#565670", light: "#9898b8",
  html: "#e34c26", css: "#264de4", js: "#f7df1e", react: "#61dafb",
  python: "#3776ab", backend: "#00b894", db: "#e17055", git: "#f05032",
  deploy: "#a29bfe", prompt: "#fd79a8", arch: "#00cec9",
};

const SKILLS = [
  {
    id: "html", label: "HTML", icon: "🌐", color: T.html, tagline: "Structure of every web page",
    what: "HTML (HyperText Markup Language) is the skeleton of every website. It defines what exists on a page — headings, paragraphs, images, buttons, forms — but NOT how it looks.",
    why: "Everything you build for the web starts with HTML. Even React and Vue output HTML in the end. You must be able to read and write basic HTML to understand what AI is building for you.",
    aiDoes: ["Writes all the tags", "Structures forms", "Builds tables", "Creates complex layouts"],
    youNeed: ["Read and understand any HTML file", "Know what each tag does", "Spot missing tags or wrong structure", "Understand semantic HTML (why <nav> not <div>)"],
    concepts: [
      { name: "Document Structure", code: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <!-- Content goes here -->\n  </body>\n</html>`, desc: "Every HTML file has this exact skeleton. <head> = metadata. <body> = visible content." },
      { name: "Essential Tags", code: `<h1>Big Heading</h1>\n<h2>Smaller Heading</h2>\n<p>A paragraph of text</p>\n<a href="/about">Link to About page</a>\n<img src="photo.jpg" alt="Description">\n<button>Click Me</button>`, desc: "These 6 tags cover 80% of what you see on any website." },
      { name: "Containers & Layout", code: `<div>Generic container (block)</div>\n<span>Inline container</span>\n\n<header>Top of page</header>\n<nav>Navigation links</nav>\n<main>Main content</main>\n<section>A section</section>\n<footer>Bottom of page</footer>`, desc: "div/span = generic boxes. Semantic tags (header, nav, main) = meaningful boxes that describe their purpose." },
      { name: "Forms & Inputs", code: `<form>\n  <input type="text" placeholder="Your name">\n  <input type="email" placeholder="Email">\n  <input type="password" placeholder="Password">\n  <select>\n    <option>Option 1</option>\n  </select>\n  <textarea>Big text area</textarea>\n  <button type="submit">Submit</button>\n</form>`, desc: "Forms are how users send data to your backend. Every login, signup, and contact form is built with these." },
      { name: "Lists & Tables", code: `<!-- Unordered list -->\n<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>\n\n<!-- Table -->\n<table>\n  <tr>\n    <th>Name</th><th>Age</th>\n  </tr>\n  <tr>\n    <td>Abdalle</td><td>22</td>\n  </tr>\n</table>`, desc: "Lists for navigation menus, feature lists. Tables for data display." },
      { name: "id vs class", code: `<!-- id: unique, one element only -->\n<div id="main-header">...</div>\n\n<!-- class: reusable, many elements -->\n<div class="card">Card 1</div>\n<div class="card">Card 2</div>\n<div class="card">Card 3</div>`, desc: "id = one specific element. class = a group of similar elements. CSS and JS target these." },
    ],
    practice: ["Build a personal profile page (name, photo, bio, links)", "Build a login form with email + password", "Build a product card with image, title, price, button", "Build a navigation menu with links"],
    depth: "1 week to understand, lifetime to perfect",
  },
  {
    id: "css", label: "CSS", icon: "🎨", color: T.css, tagline: "Makes everything look good",
    what: "CSS (Cascading Style Sheets) controls how HTML looks — colors, fonts, spacing, layout, animations. Without CSS, every website looks like a plain text document.",
    why: "You need to read CSS to understand why things look the way they do, and to tell AI exactly what visual changes you want.",
    aiDoes: ["Writes all styling rules", "Creates responsive layouts", "Builds animations", "Handles cross-browser issues"],
    youNeed: ["Read CSS and understand what each property does", "Describe visual changes clearly to AI", "Spot layout problems", "Understand the Box Model", "Know Flexbox basics"],
    concepts: [
      { name: "Selectors", code: `/* Target by tag */\np { color: red; }\n\n/* Target by class */\n.card { background: white; }\n\n/* Target by id */\n#header { height: 60px; }\n\n/* Target on hover */\nbutton:hover { background: blue; }`, desc: "Selectors tell CSS WHICH element to style. This is the most important concept in CSS." },
      { name: "The Box Model", code: `div {\n  width: 300px;\n  height: 200px;\n  padding: 20px;    /* space INSIDE */\n  border: 2px solid black;\n  margin: 30px;     /* space OUTSIDE */\n  box-sizing: border-box;\n}`, desc: "EVERY element is a box. Content → Padding → Border → Margin. Understanding this stops 90% of spacing confusion." },
      { name: "Flexbox", code: `.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.item { flex: 1; }`, desc: "Flexbox = line up items in a row OR column. This handles most layouts — navbars, card rows, centered content." },
      { name: "CSS Grid", code: `.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n}\n.featured {\n  grid-column: 1 / 3;\n}`, desc: "Grid = layout in rows AND columns simultaneously. Perfect for dashboards, galleries, complex page layouts." },
      { name: "Responsive Design", code: `.card { width: 100%; }\n\n@media (min-width: 768px) {\n  .card { width: 50%; }\n}\n\n@media (min-width: 1024px) {\n  .card { width: 33%; }\n}`, desc: "Media queries change your layout based on screen size. Every real product must work on mobile AND desktop." },
      { name: "Variables & Animations", code: `:root {\n  --primary: #6c63ff;\n  --radius: 8px;\n}\n.button {\n  background: var(--primary);\n  border-radius: var(--radius);\n  transition: all 0.3s ease;\n}\n.button:hover {\n  transform: translateY(-2px);\n}`, desc: "CSS variables let you define colors/sizes once and reuse everywhere. Transitions make interactions smooth." },
    ],
    practice: ["Style your HTML profile page with fonts, colors, spacing", "Build a responsive card grid (3 cols desktop, 1 col mobile)", "Build a sticky navbar with hover effects", "Create a button with hover animation"],
    depth: "2 weeks to be useful, ongoing to master",
  },
  {
    id: "js", label: "JavaScript", icon: "⚡", color: T.js, tagline: "Makes pages interactive & alive",
    what: "JavaScript (JS) is the programming language of the web. It runs in the browser and makes things happen: button clicks, form validation, fetching data, updating the page without reloading.",
    why: "JS is what separates a static page from a real application. Every modern web app (Gmail, Twitter, YouTube) runs on JavaScript.",
    aiDoes: ["Writes all logic", "Handles complex algorithms", "Manages state", "Writes async code"],
    youNeed: ["Understand variables, functions, arrays, objects", "Read and follow the logic flow", "Understand DOM manipulation", "Debug with console.log"],
    concepts: [
      { name: "Variables & Types", code: `const name = "Abdalle";\nconst age = 22;\nconst isStudent = true;\nlet score = 0;\nscore = 100;\n\nconst list = [1, 2, 3];\nconst obj = { key: "value" };`, desc: "Use const by default. Use let only when the value needs to change. Understand each data type — they behave differently." },
      { name: "Functions", code: `function greet(name) {\n  return "Hello, " + name;\n}\n\n// Arrow function (modern)\nconst greet = (name) => {\n  return "Hello, " + name;\n};\n\n// Short arrow\nconst double = (n) => n * 2;\nconsole.log(double(5)); // 10`, desc: "Functions are reusable blocks of logic. Arrow functions are the modern way. You'll see them everywhere in React." },
      { name: "Arrays & Methods", code: `const students = ["Ali", "Hassan", "Fatima"];\nstudents[0];     // "Ali"\nstudents.push("Mohamed");\n\n// Transform each item\nconst upper = students.map(s => s.toUpperCase());\n\n// Filter items\nconst long = students.filter(s => s.length > 4);\n\n// Find one item\nconst found = students.find(s => s === "Ali");`, desc: "map/filter/find are the 3 most important methods — React uses them constantly to render lists." },
      { name: "Objects", code: `const user = {\n  name: "Abdalle",\n  age: 22,\n  isActive: true,\n};\n\nconsole.log(user.name);   // Abdalle\nuser.age = 23;\n\n// Destructure\nconst { name, age } = user;\nconsole.log(name); // Abdalle`, desc: "Objects represent real-world things. Almost ALL data from APIs comes as JSON objects." },
      { name: "DOM Manipulation", code: `const btn = document.getElementById("myBtn");\nbtn.addEventListener("click", () => {\n  console.log("Clicked!");\n});\n\nbtn.textContent = "New Text";\nbtn.classList.add("active");\nbtn.classList.toggle("active");`, desc: "DOM = the live HTML in the browser. JS can select, change, add, or remove any element on the page." },
      { name: "Fetch & Async/Await", code: `async function loadUsers() {\n  try {\n    const response = await fetch("/api/users");\n    const users = await response.json();\n    console.log(users);\n  } catch (error) {\n    console.error("Failed:", error);\n  }\n}\nloadUsers();`, desc: "async = this function will wait for things. await = pause here until this finishes. Always wrap in try/catch." },
    ],
    practice: ["Build a counter (+ and - buttons)", "Build a to-do list (add, delete, complete)", "Fetch data from a public API and display it", "Build a search filter"],
    depth: "3–4 weeks to be useful, months to feel confident",
  },
  {
    id: "react", label: "React", icon: "⚛️", color: T.react, tagline: "Build complex UIs from components",
    what: "React is a JavaScript library for building user interfaces. Instead of one big HTML file, you build small reusable components (like LEGO bricks) and combine them to build any UI.",
    why: "React is the most popular frontend framework. Most real-world apps are built with React. AI tools like Claude generate React code very well.",
    aiDoes: ["Writes all component code", "Manages complex state", "Builds hooks", "Handles routing"],
    youNeed: ["Understand what a component is", "Understand props (passing data)", "Understand useState", "Understand useEffect", "Read JSX syntax"],
    concepts: [
      { name: "Components", code: `function UserCard({ name, email }) {\n  return (\n    <div className="card">\n      <h2>{name}</h2>\n      <p>{email}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <UserCard name="Abdalle" email="a@test.com" />\n      <UserCard name="Hassan"  email="h@test.com" />\n    </div>\n  );\n}`, desc: "Components = reusable building blocks. Build once, use many times. Everything in React is a component." },
      { name: "JSX", code: `function Button({ label, color }) {\n  return (\n    <button\n      className="btn"\n      style={{ color: color }}\n      onClick={() => alert("Clicked!")}\n    >\n      {label}\n    </button>\n  );\n}\n\n// Conditional rendering\n{isOnline ? "🟢 Online" : "🔴 Offline"}`, desc: "JSX is HTML written inside JavaScript. Rules: className not class, style={{}}, expressions in {curly braces}." },
      { name: "Props", code: `function App() {\n  return (\n    <ProductCard\n      name="Laptop"\n      price={999}\n      inStock={true}\n      onBuy={() => console.log("Bought!")}\n    />\n  );\n}\n\nfunction ProductCard({ name, price, inStock, onBuy }) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>\${price}</p>\n      {inStock && <button onClick={onBuy}>Buy</button>}\n    </div>\n  );\n}`, desc: "Props = data flowing from parent to child. Always one direction (down). Never modify props — they're read-only." },
      { name: "useState", code: `import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}`, desc: "State = data that changes over time. When state changes, React automatically re-renders the component." },
      { name: "useEffect", code: `import { useState, useEffect } from "react";\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch("/api/users")\n      .then(res => res.json())\n      .then(data => setUsers(data));\n  }, []); // [] = run once on load\n\n  return (\n    <ul>\n      {users.map(u => <li key={u.id}>{u.name}</li>)}\n    </ul>\n  );\n}`, desc: "useEffect runs code AFTER rendering. Use it to fetch data, set up subscriptions, or react to state changes." },
      { name: "Forms", code: `function LoginForm() {\n  const [email, setEmail] = useState("");\n  const [password, setPassword] = useState("");\n\n  const handleSubmit = async () => {\n    const res = await fetch("/api/login", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ email, password }),\n    });\n    const data = await res.json();\n  };\n\n  return (\n    <div>\n      <input value={email} onChange={e => setEmail(e.target.value)} />\n      <input value={password} onChange={e => setPassword(e.target.value)} />\n      <button onClick={handleSubmit}>Login</button>\n    </div>\n  );\n}`, desc: "Controlled inputs: React state drives the input value. onChange updates state. On submit, send state to your API." },
    ],
    practice: ["Build a counter with useState", "Build a to-do list with add/delete", "Fetch users from an API with useEffect", "Build a multi-step form"],
    depth: "3–4 weeks to build real things",
  },
  {
    id: "python", label: "Python", icon: "🐍", color: T.python, tagline: "Backend logic & AI integration",
    what: "Python is the most popular language for backend development, data processing, and AI/ML. It's clean, readable, and has a massive library ecosystem.",
    why: "Most AI APIs (OpenAI, Anthropic) have Python SDKs. Flask and FastAPI are the fastest way to build a backend. Python reads like English.",
    aiDoes: ["Writes all functions and classes", "Handles complex algorithms", "Manages imports and packages", "Writes database queries"],
    youNeed: ["Variables, functions, lists, dicts", "How to run Python files", "pip (package installer)", "Read error messages (tracebacks)", "Understand Flask/FastAPI routes"],
    concepts: [
      { name: "Variables & Types", code: `name = "Abdalle"\nage = 22\ngpa = 3.8\nis_student = True\nnothing = None\n\n# f-string\nfull = f"Name: {name}, Age: {age}"\nprint(full)  # Name: Abdalle, Age: 22`, desc: "Python types are dynamic — no need to declare them. f-strings are the modern way to embed variables in strings." },
      { name: "Functions", code: `def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\ngreet("Abdalle")           # Hello, Abdalle!\ngreet("Abdalle", "Salaam") # Salaam, Abdalle!\n\n# Lambda (one-line)\ndouble = lambda x: x * 2\ndouble(5)  # 10`, desc: "Python functions use indentation (4 spaces) instead of {}. Default parameters make functions flexible." },
      { name: "Lists & Dicts", code: `students = ["Ali", "Hassan", "Fatima"]\nstudents.append("Mohamed")\nstudents[0]   # first\nstudents[-1]  # last\n\nuser = { "name": "Abdalle", "age": 22 }\nuser["name"]          # access\nuser["email"] = "a@test.com"  # add\n\nfor key, value in user.items():\n    print(f"{key}: {value}")`, desc: "Lists = ordered collections. Dicts = key-value pairs (JSON is dict format). These carry 90% of your data." },
      { name: "Classes", code: `class User:\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email\n        self.is_active = True\n\n    def greet(self):\n        return f"Hi, I'm {self.name}"\n\nuser1 = User("Abdalle", "a@test.com")\nprint(user1.greet())  # Hi, I'm Abdalle`, desc: "Classes = blueprints for objects. __init__ runs on creation. self refers to the instance." },
      { name: "Flask API", code: `from flask import Flask, request, jsonify\napp = Flask(__name__)\n\n@app.route("/users", methods=["GET"])\ndef get_users():\n    users = [{"id": 1, "name": "Abdalle"}]\n    return jsonify(users)\n\n@app.route("/users", methods=["POST"])\ndef create_user():\n    data = request.json\n    return jsonify({"message": "Created", "name": data["name"]})\n\nif __name__ == "__main__":\n    app.run(debug=True)`, desc: "Flask = micro web framework. @app.route defines a URL endpoint. jsonify converts Python dict to JSON response." },
      { name: "pip & Virtual Env", code: `# Install packages\npip install flask openai\n\n# Create virtual environment\npython -m venv venv\n\n# Activate (Mac/Linux)\nsource venv/bin/activate\n# Activate (Windows)\nvenv\\Scripts\\activate\n\n# Save dependencies\npip freeze > requirements.txt\n\n# Install from file\npip install -r requirements.txt`, desc: "Virtual environment = isolated Python per project. Always use one. requirements.txt = your package list." },
    ],
    practice: ["Build a Flask API with 3 routes (GET, POST, DELETE)", "Build a script that reads a JSON file", "Call the OpenAI/Anthropic API from Python", "Build a simple calculator class"],
    depth: "2–3 weeks to build real backends",
  },
  {
    id: "backend", label: "Backend & APIs", icon: "⚙️", color: T.backend, tagline: "The brain behind every app",
    what: "The backend handles business logic, processes data, manages users, and talks to the database. An API is how the frontend communicates with the backend.",
    why: "Every real app needs a backend. Login systems, saving user data, charging money, sending emails — all backend.",
    aiDoes: ["Designs API routes", "Writes authentication logic", "Handles complex business rules", "Manages middleware"],
    youNeed: ["HTTP methods (GET, POST, PUT, DELETE)", "What JSON is", "Request/Response cycle", "Status codes", "Authentication concepts (JWT)"],
    concepts: [
      { name: "HTTP Methods — CRUD", code: `GET    /posts       → Read all posts\nGET    /posts/1     → Read post id=1\nPOST   /posts       → Create new post\nPUT    /posts/1     → Replace post id=1\nPATCH  /posts/1     → Update part of post\nDELETE /posts/1     → Delete post id=1\n\nCRUD   → HTTP    → SQL\nCreate → POST    → INSERT\nRead   → GET     → SELECT\nUpdate → PUT     → UPDATE\nDelete → DELETE  → DELETE`, desc: "Every action in an app maps to one of these 4 operations (CRUD). GET = read, POST = create, PUT = update, DELETE = delete." },
      { name: "Request & Response", code: `── REQUEST ──\nMethod:  POST\nURL:     /api/login\nHeaders: { Content-Type: application/json }\nBody:    { "email": "a@test.com", "password": "123" }\n\n── RESPONSE ──\nStatus:  200 OK\nBody:    { "token": "eyJhbG...", "user": {...} }\n\n── Status Codes ──\n200 OK          → Success\n201 Created     → New resource made\n400 Bad Request → Wrong data sent\n401 Unauthorized→ Not logged in\n404 Not Found   → Doesn't exist\n500 Server Error→ Backend crashed`, desc: "Every API call is a request + response. Status codes tell you what happened. Know these by heart." },
      { name: "REST API Design", code: `── GOOD ──\nGET    /api/users\nGET    /api/users/42\nPOST   /api/users\nDELETE /api/users/42\n\n── BAD ──\nGET  /getUser?id=42\nGET  /deleteUser?id=42  ← GET never deletes!\n\n── RULES ──\n✅ Use nouns, not verbs\n✅ Use plural nouns (/posts not /post)\n✅ Use lowercase + hyphens\n✅ Version your API (/api/v1/users)`, desc: "REST = a standard way to design APIs. Follow naming conventions so AI and teammates understand your API." },
      { name: "JWT Authentication", code: `── LOGIN FLOW ──\n1. User sends: { email, password }\n2. Backend verifies password\n3. Backend creates JWT token\n4. Frontend stores token (localStorage)\n5. Frontend sends token in every request:\n   Headers: { Authorization: "Bearer eyJhbGc..." }\n6. Backend verifies token → allows access\n\n── TOKEN PAYLOAD ──\n{\n  "userId": 42,\n  "email": "a@test.com",\n  "exp": 1735689600\n}`, desc: "JWT = JSON Web Token. It's like a signed ID card. User logs in once, gets a token, uses it for all future requests." },
      { name: "Environment Variables", code: `# .env file (NEVER commit to GitHub!)\nDATABASE_URL=postgresql://user:pass@host/db\nSECRET_KEY=super_secret_random_string\nOPENAI_API_KEY=sk-proj-xxxx\nDEBUG=False\n\n# Load in Python\nimport os\nfrom dotenv import load_dotenv\nload_dotenv()\napi_key = os.getenv("OPENAI_API_KEY")\n\n# Load in JavaScript\nconst key = process.env.OPENAI_API_KEY;`, desc: "Never hardcode secrets in code. Store them in .env files. Add .env to .gitignore. Always." },
      { name: "CORS", code: `# Why: Frontend on localhost:3000\n#      Backend on localhost:5000\n# Browser blocks by default!\n\n# Flask fix\nfrom flask_cors import CORS\napp = Flask(__name__)\nCORS(app)  # allow all (dev)\n\n# Production: restrict to your domain\nCORS(app, origins=["https://myapp.com"])\n\n# Node/Express\nconst cors = require("cors");\napp.use(cors({ origin: "https://myapp.com" }));`, desc: "CORS errors are one of the most common bugs beginners face. Add CORS to your backend to fix them." },
    ],
    practice: ["Build a full REST API with GET/POST/PUT/DELETE", "Add JWT authentication to your API", "Connect React frontend to Python/Flask API", "Use Postman to test your API"],
    depth: "2–3 weeks to understand, ongoing to master",
  },
  {
    id: "db", label: "Database", icon: "🗄️", color: T.db, tagline: "Where all data lives permanently",
    what: "A database stores data permanently. Without a database, all data is lost when the server restarts. Everything users create lives in a database.",
    why: "Every real app needs persistent data. You need to understand how to model your data to tell AI what to build.",
    aiDoes: ["Writes all SQL queries", "Designs schemas", "Writes migrations", "Optimizes queries"],
    youNeed: ["Understand tables, rows, columns", "Basic SQL (SELECT, INSERT, UPDATE, DELETE)", "Primary & foreign keys", "When to use SQL vs NoSQL"],
    concepts: [
      { name: "How DBs Work", code: `TABLE: users\n┌────┬──────────┬──────────────────┐\n│ id │ name     │ email            │\n├────┼──────────┼──────────────────┤\n│  1 │ Abdalle  │ a@test.com       │\n│  2 │ Hassan   │ h@test.com       │\n└────┴──────────┴──────────────────┘\n\nTABLE: posts\n┌────┬─────────┬──────────────────┐\n│ id │ user_id │ title            │\n├────┼─────────┼──────────────────┤\n│  1 │    1    │ My First Post    │\n│  2 │    2    │ Hassan's Post    │\n└────┴─────────┴──────────────────┘`, desc: "A database = multiple tables. Each table = rows (records) and columns (fields). user_id links tables together." },
      { name: "Core SQL", code: `-- SELECT (Read)\nSELECT * FROM users;\nSELECT name, email FROM users;\nSELECT * FROM users WHERE id = 1;\nSELECT * FROM users ORDER BY name ASC;\n\n-- INSERT (Create)\nINSERT INTO users (name, email)\nVALUES ('Abdalle', 'a@test.com');\n\n-- UPDATE\nUPDATE users SET email = 'new@test.com' WHERE id = 1;\n\n-- DELETE\nDELETE FROM users WHERE id = 1;`, desc: "These 4 operations (CRUD) are 90% of what you'll ever do with a database. Master these first." },
      { name: "JOIN & Filter", code: `-- WHERE with conditions\nSELECT * FROM users WHERE age > 18;\nSELECT * FROM users WHERE name LIKE 'A%';\n\n-- JOIN — combine tables\nSELECT users.name, posts.title\nFROM posts\nJOIN users ON posts.user_id = users.id;\n\n-- COUNT & GROUP\nSELECT user_id, COUNT(*) as post_count\nFROM posts\nGROUP BY user_id;`, desc: "JOIN is the most powerful SQL operation — it combines data from multiple tables. WHERE filters rows." },
      { name: "Table Design", code: `CREATE TABLE users (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE NOT NULL,\n  created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  user_id INTEGER NOT NULL,\n  title TEXT NOT NULL,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE\n);`, desc: "PRIMARY KEY = unique identifier. FOREIGN KEY = reference to another table. NOT NULL = required field." },
      { name: "SQL vs NoSQL", code: `── SQL (PostgreSQL, SQLite) ──\n✅ Structured, fixed columns\n✅ Complex queries & relationships\n✅ Transactions (bank, orders)\n→ Use for: accounts, orders, products\n\n── NoSQL (Firebase, MongoDB) ──\n✅ Flexible JSON structure\n✅ Easy real-time (Firebase)\n✅ Fast setup\n→ Use for: chat, activity, prototyping\n\n── Rule ──\nNew app / prototype → Firebase\nProduction app      → PostgreSQL`, desc: "Start with Firebase for speed, switch to PostgreSQL when you need complex queries and transactions." },
      { name: "SQLAlchemy ORM", code: `class User(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    name = db.Column(db.String(100), nullable=False)\n    email = db.Column(db.String(120), unique=True)\n\nclass Post(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))\n\n# Use Python instead of SQL\nnew_user = User(name="Abdalle", email="a@test.com")\ndb.session.add(new_user)\ndb.session.commit()\n\nusers = User.query.filter_by(name="Abdalle").all()`, desc: "ORM = write Python classes instead of SQL. SQLAlchemy is the most popular Python ORM." },
    ],
    practice: ["Design tables for a blog app (users, posts, comments)", "Write SQL to get all posts by a specific user", "Build a Flask app that reads/writes to SQLite", "Connect to Firebase Firestore"],
    depth: "1–2 weeks for basics, ongoing for optimization",
  },
  {
    id: "git", label: "Git & GitHub", icon: "🌿", color: T.git, tagline: "Save, track, and share your code",
    what: "Git = a tool that tracks every change you make to your code. GitHub = a website that stores your code online and lets you collaborate.",
    why: "You cannot deploy without Git. Claude Code and Codex work with Git. Every developer uses it.",
    aiDoes: ["Writes .gitignore files", "Resolves merge conflicts", "Writes commit messages", "Sets up CI/CD"],
    youNeed: ["Basic git commands (init, add, commit, push, pull)", "Understand what a repository is", "How to connect to GitHub", "Branches concept"],
    concepts: [
      { name: "Core Concepts", code: `Repository (repo) = project folder tracked by git\nCommit           = a saved snapshot of code\nBranch           = a separate version of code\nMain/Master      = the primary branch\nRemote           = the version on GitHub\nClone            = download a repo from GitHub\nPush             = upload changes to GitHub\nPull             = download changes from GitHub`, desc: "Think of Git as a time machine for your code. Every commit = a save point you can go back to anytime." },
      { name: "Daily Commands", code: `git init\ngit remote add origin https://github.com/you/repo.git\n\ngit status           # see what changed\ngit add .            # stage ALL changes\ngit add index.html   # stage ONE file\ngit commit -m "Add login page"\ngit push origin main\ngit pull origin main\ngit log --oneline    # see all commits`, desc: "This is your daily workflow: status → add → commit → push. Memorize this sequence." },
      { name: "Branching", code: `git checkout -b feature/login-page  # create + switch\ngit branch                          # see all branches\n\ngit checkout main\ngit merge feature/login-page\ngit branch -d feature/login-page\n\n── Strategy ──\nmain       → production (deployed)\ndevelop    → work in progress\nfeature/*  → new feature\nfix/*      → bug fix`, desc: "Branches let you work on new features without breaking the working version. Always develop on a branch." },
      { name: ".gitignore", code: `# Python\nvenv/\n__pycache__/\n*.pyc\n.env\n\n# Node.js\nnode_modules/\ndist/\nbuild/\n\n# NEVER commit these\n.env\n*.key\nsecrets.json\n\n# OS\n.DS_Store\nThumbs.db`, desc: "CRITICAL: Never commit node_modules, venv, or .env files. Create .gitignore before your first commit." },
      { name: "GitHub Workflow", code: `── NEW PROJECT ──\n1. Create repo on GitHub\n2. git clone https://github.com/you/repo.git\n3. cd repo → start coding!\n\n── EXISTING PROJECT ──\ngit init\ngit add .\ngit commit -m "Initial commit"\ngit branch -M main\ngit remote add origin [URL]\ngit push -u origin main\n\n── DAILY ──\ngit pull\n[make changes]\ngit add . && git commit -m "..." && git push`, desc: "Follow this exact workflow every time. Git pull first always — never push without pulling latest first." },
    ],
    practice: ["Create a GitHub account", "Create a repo and push a simple HTML file", "Make a change, commit it, push it", "Clone someone else's repo and explore it"],
    depth: "3 days to be functional",
  },
  {
    id: "deploy", label: "Deployment", icon: "🚀", color: T.deploy, tagline: "Put your app live on the internet",
    what: "Deployment = taking code from your computer and putting it on a server so anyone in the world can access it via a URL.",
    why: "This is the final step of every product. Real users can only use your app after deployment.",
    aiDoes: ["Writes deployment configs", "Creates Dockerfiles", "Sets up CI/CD pipelines", "Configures web servers"],
    youNeed: ["How to deploy frontend to Vercel", "How to deploy backend to Render", "What environment variables are", "Basic domain setup", "How to read deployment logs"],
    concepts: [
      { name: "Overview", code: `Your Computer:\n  code lives here\n  only YOU can access it\n  localhost:3000\n\nAfter Deployment:\n  code lives on a SERVER\n  EVERYONE can access it\n  https://myapp.com\n\nProcess:\nCode → GitHub → Deploy Service → Live URL`, desc: "Deployment = move from localhost to a cloud server. The deploy service reads your GitHub repo and runs your code." },
      { name: "Vercel (Frontend)", code: `── DEPLOY REACT to VERCEL ──\n1. Push code to GitHub\n2. Go to vercel.com → Sign up with GitHub\n3. Click "New Project"\n4. Import your GitHub repo\n5. Configure:\n   Build command: npm run build\n   Output dir: dist\n6. Click "Deploy"\n7. Get: https://myapp.vercel.app\n\n── AUTO DEPLOY ──\nEvery git push to main\nauto-redeploys. No manual steps.`, desc: "Vercel is the easiest way to deploy frontend apps. Connect GitHub once, every push auto-deploys." },
      { name: "Render (Backend)", code: `── DEPLOY FLASK to RENDER ──\n# requirements.txt:\nflask==3.0.0\ngunicorn==21.2.0\n\n# Procfile:\nweb: gunicorn app:app\n\n1. Push to GitHub\n2. render.com → New Web Service\n3. Connect GitHub repo\n4. Runtime: Python\n5. Build: pip install -r requirements.txt\n6. Start: gunicorn app:app\n7. Add env variables\n8. Deploy → https://myapi.onrender.com`, desc: "Render is the easiest for Python backends. Free tier spins down after inactivity." },
      { name: "Env Vars in Production", code: `# BAD ❌\nopenai_key = "sk-proj-abc123..."\n\n# GOOD ✅\nopenai_key = os.getenv("OPENAI_API_KEY")\n\n── WHERE TO SET THEM ──\nVercel: Project → Settings → Env Variables\nRender: Service → Environment → Add Variable\n\n── WHAT TO ADD ──\nOPENAI_API_KEY = sk-proj-...\nDATABASE_URL   = postgresql://...\nSECRET_KEY     = random-string\nDEBUG          = False`, desc: "Environment variables in production work exactly like .env files locally. Set them in your deploy dashboard." },
      { name: "Custom Domain", code: `── CONNECT myapp.com to Vercel ──\n1. Buy domain at Namecheap / Cloudflare\n2. Vercel: Project → Settings → Domains\n   Add: myapp.com\n3. In your domain registrar DNS:\n   Type A     → 76.76.21.21\n   Type CNAME → cname.vercel-dns.com\n4. Wait 5–30 min for DNS propagation\n5. Done! https://myapp.com is live\n\n✅ Vercel auto-handles HTTPS/SSL`, desc: "Cloudflare as registrar gives you free CDN and DDoS protection. DNS takes time — be patient." },
    ],
    practice: ["Deploy your HTML/React project to Vercel", "Deploy a Python Flask API to Render", "Connect a custom domain to Vercel", "Set up environment variables in production"],
    depth: "1 day to understand, 1 week to be comfortable",
  },
  {
    id: "prompt", label: "AI Prompting", icon: "🤖", color: T.prompt, tagline: "Your most powerful skill",
    what: "Prompting is the art of communicating with AI to get exactly what you need. A bad prompt gets generic code. A great prompt gets production-ready code on the first try.",
    why: "This is the skill that multiplies everything else. A 10x better prompt = 10x faster development. You will use this every single day.",
    aiDoes: ["Generates code from your instructions", "Follows context you give it", "Adapts to your constraints", "Iterates based on feedback"],
    youNeed: ["How to write a complete, clear prompt", "How to give context", "How to iterate and refine", "How to split complex tasks"],
    concepts: [
      { name: "The 6-Part Formula", code: `[ROLE]\nYou are an expert Python/Flask developer.\n\n[CONTEXT]\nI'm building a task management web app.\nStack: Python Flask + SQLite + React.\n\n[TASK]\nBuild Flask backend with:\n- GET  /api/tasks  → all tasks\n- POST /api/tasks  → create task\n- DELETE /api/tasks/<id> → delete\n\n[REQUIREMENTS]\n- Use SQLAlchemy\n- Include error handling\n- Add CORS support\n\n[FORMAT]\nOne complete app.py file with comments.\n\n[CONSTRAINTS]\nNo authentication needed yet.`, desc: "Use all 6 parts for complex tasks. For simple tasks, Role + Task + Format is enough. More context = better output." },
      { name: "Context Management", code: `── BAD ──\n"Fix my code"\n\n── GOOD ──\n"I have a React form that submits data.\nWhen I click submit I get this error:\n  TypeError: Cannot read properties of\n  undefined reading 'json' at line 24\n\nHere is my code:\n[paste relevant code]\n\nFix the handleSubmit function."\n\n── ALWAYS INCLUDE ──\n✅ What you're trying to do\n✅ The exact error message\n✅ The relevant code\n✅ What outcome you want`, desc: "Context is everything. The AI has no memory of your project. Every prompt must be self-contained." },
      { name: "Breaking Down Tasks", code: `── BAD: One massive prompt ──\n"Build me a complete e-commerce site"\n→ AI gets overwhelmed, output is messy\n\n── GOOD: Sequential prompts ──\nPrompt 1: "Design the database schema\nfor an e-commerce site (users, products,\norders tables). Show CREATE TABLE SQL."\n\nPrompt 2: "Using this schema [paste],\nbuild Flask routes for user login."\n\nPrompt 3: "Now add product listing routes"\n\n── RULE ──\nOne feature per prompt.\nBuild incrementally. Test each piece.`, desc: "Complex = many simple prompts, not one massive prompt. Each prompt should have one clear, testable outcome." },
      { name: "Iteration Patterns", code: `── FIXING ERRORS ──\n"This error: [exact error]\nCurrent code: [paste code]\nFix only this error, change nothing else."\n\n── IMPROVING OUTPUT ──\n"This works but I need:\n1. Button should be blue\n2. Add email validation\n3. Show loading spinner\nCurrent code: [paste code]"\n\n── UNDERSTANDING CODE ──\n"Explain this code line by line:\n[paste code]\nI am a beginner, use simple language."`, desc: "Iteration = how you go from 'it works' to 'it's great'. Never hesitate to ask AI to explain or change its output." },
      { name: "System Prompts & Roles", code: `"You are a senior full-stack developer\nwith 10 years experience. You write\nclean, commented, production-ready code.\nAlways include error handling."\n\n"You are a UX designer who writes\nfrontend code. Prioritize user\nexperience and modern design."\n\n"You are a security expert reviewing\nmy code for vulnerabilities. Check\nfor SQL injection, XSS, and secrets."`, desc: "Setting a role primes the AI's entire approach. A security reviewer will spot things a normal assistant misses." },
      { name: "Prompt Templates", code: `── NEW FEATURE ──\n"Add [feature] to my [app].\nStack: [tech]. Code: [paste]\nRequirements: [list]\nReturn: [one file / function]"\n\n── BUG FIX ──\n"Error: [paste error] at line [N]\nCode: [paste section]\nFix only this issue."\n\n── CODE REVIEW ──\n"Review for bugs, security issues:\n[paste code]\nList problems and show fixed version."`, desc: "Save these templates. Use them every day. Consistent structure = consistent, high-quality output." },
    ],
    practice: ["Rewrite a bad prompt using the 6-part formula", "Build a full feature using 5+ sequential prompts", "Ask AI to explain code you don't understand", "Use the bug fix template on a real error"],
    depth: "1 week to be good, ongoing practice to master",
  },
  {
    id: "arch", label: "Architecture", icon: "🏗️", color: T.arch, tagline: "Designing systems before building them",
    what: "Architecture = planning the structure of your entire system before writing code. It answers: what pieces exist, how they connect, where data lives.",
    why: "Bad architecture = months of pain. Good architecture = easy to build, change, and scale.",
    aiDoes: ["Suggests patterns for your use case", "Generates boilerplate structure", "Reviews architecture for issues", "Diagrams system flows"],
    youNeed: ["How to break a product into components", "Frontend / Backend / Database separation", "MVC pattern basics", "How to design a REST API", "MVP thinking"],
    concepts: [
      { name: "3-Layer Architecture", code: `┌─────────────────────────────────┐\n│  FRONTEND (Presentation Layer)  │\n│  React, HTML/CSS, JavaScript    │\n│  What the user sees & touches   │\n└──────────────┬──────────────────┘\n               │ HTTP / JSON\n┌──────────────▼──────────────────┐\n│  BACKEND (Application Layer)    │\n│  Python Flask, Node.js          │\n│  Business logic, auth, rules    │\n└──────────────┬──────────────────┘\n               │ SQL queries\n┌──────────────▼──────────────────┐\n│  DATABASE (Data Layer)          │\n│  PostgreSQL, SQLite, Firebase   │\n│  Stores all data permanently    │\n└─────────────────────────────────┘`, desc: "Every real app follows this 3-layer pattern. Each layer has ONE job. Never let them mix responsibilities." },
      { name: "MVC Pattern", code: `MODEL (Data)\n  class User(db.Model):\n      id, name, email...\n  → Talks to database\n\nVIEW (UI)\n  React components / HTML templates\n  → What user sees\n\nCONTROLLER (Logic)\n  @app.route("/users")\n  def get_users():\n      users = User.query.all()  # Model\n      return jsonify(users)     # View\n\n── RULE ──\nModel = data\nView = display\nController = decisions`, desc: "MVC is the most common architecture pattern. Flask naturally follows it. Keep them separate." },
      { name: "5 Questions to Ask First", code: `1. WHO are the users?\n   Anonymous? Logged-in? Admins?\n\n2. WHAT can each user do?\n   Register / Login / Create / Edit / Delete\n\n3. WHAT DATA needs storing?\n   User → (id, name, email, password)\n   Post → (id, title, content, user_id)\n\n4. WHAT PAGES exist?\n   Landing → Login → Dashboard → Editor\n\n5. WHAT EXTERNAL SERVICES?\n   Email? (SendGrid)\n   Payments? (Stripe)\n   AI? (OpenAI)`, desc: "Answer these 5 questions on paper BEFORE touching a computer. 30 minutes here saves 30 hours of refactoring." },
      { name: "Folder Structure", code: `my-app/\n├── backend/\n│   ├── app.py\n│   ├── models.py\n│   ├── routes/\n│   │   ├── auth.py\n│   │   ├── users.py\n│   │   └── posts.py\n│   ├── .env\n│   └── requirements.txt\n├── frontend/\n│   ├── src/\n│   │   ├── components/\n│   │   ├── pages/\n│   │   ├── api/\n│   │   └── App.jsx\n│   └── package.json\n└── README.md`, desc: "Good folder structure = each file has one clear job. Tell this structure to Claude Code at the start of every project." },
      { name: "MVP Thinking", code: `── Building Twitter Clone ──\n\nDON'T build everything:\n❌ Profiles, trending, DMs\n❌ Notifications, media uploads\n❌ Follow/following system\n\nBUILD MVP first:\n✅ Register / Login\n✅ Post a tweet (text only)\n✅ See all tweets\n✅ Delete your own tweet\n→ SHIP IT. Get feedback.\n\nWeek 2: User profiles\nWeek 3: Following system\nWeek 4: Media uploads`, desc: "MVP = smallest thing that works. Ship early, learn fast, improve. Never build everything at once." },
    ],
    practice: ["Design architecture for a blog on paper first", "Write all tables and routes for a task manager", "Build an MVP with just 3 core features", "Refactor messy code into MVC structure"],
    depth: "Ongoing — every project teaches you more",
  },
];

function SkillsStackApp() {
  const [activeSkill, setActiveSkill] = useState("html");
  const [activeTab, setActiveTab] = useState("concepts");
  const [activeConcept, setActiveConcept] = useState(0);
  const skill = SKILLS.find(s => s.id === activeSkill);

  return (
    <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", color: T.text, display: "flex", flexDirection: "column" }}>
      <div style={{ background: T.surface, borderBottom: `1px solid ${T.border}`, padding: "14px 20px", flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: T.muted, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>Complete Self-Contained Reference</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: T.text }}>⚡ Skills Stack Mastery</div>
      </div>

      <div style={{ background: T.surface, borderBottom: `1px solid ${T.border}`, overflowX: "auto", flexShrink: 0 }}>
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {SKILLS.map(s => (
            <button key={s.id} onClick={() => { setActiveSkill(s.id); setActiveTab("concepts"); setActiveConcept(0); }}
              style={{ background: activeSkill === s.id ? s.color + "18" : "transparent", border: "none", borderBottom: activeSkill === s.id ? `2.5px solid ${s.color}` : "2.5px solid transparent", color: activeSkill === s.id ? s.color : T.muted, padding: "12px 16px", cursor: "pointer", fontSize: 12, fontWeight: activeSkill === s.id ? 700 : 400, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 80, transition: "all 0.2s" }}>
              <span style={{ fontSize: 18 }}>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ background: skill.color + "10", border: `1px solid ${skill.color}33`, borderRadius: 12, padding: "18px 20px", marginBottom: 20, display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36 }}>{skill.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ color: skill.color, fontWeight: 800, fontSize: 20 }}>{skill.label}</span>
                <span style={{ background: skill.color + "22", color: skill.color, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 600 }}>{skill.tagline}</span>
              </div>
              <p style={{ color: T.light, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{skill.what}</p>
              <p style={{ color: T.light, fontSize: 13, lineHeight: 1.7, margin: "8px 0 0 0" }}>
                <strong style={{ color: "#00d4aa" }}>Why it matters: </strong>{skill.why}
              </p>
              <div style={{ marginTop: 10, color: T.muted, fontSize: 11 }}>⏱ {skill.depth}</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 10, padding: 14 }}>
              <div style={{ color: "#6c63ff", fontWeight: 700, fontSize: 12, marginBottom: 10 }}>🤖 AI HANDLES THIS</div>
              {skill.aiDoes.map((item, i) => (
                <div key={i} style={{ color: T.light, fontSize: 12, padding: "4px 0", display: "flex", gap: 6, borderBottom: i < skill.aiDoes.length - 1 ? `1px solid ${T.border}` : "none" }}>
                  <span style={{ color: "#6c63ff" }}>✓</span> {item}
                </div>
              ))}
            </div>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 10, padding: 14 }}>
              <div style={{ color: "#00d4aa", fontWeight: 700, fontSize: 12, marginBottom: 10 }}>👤 YOU NEED TO KNOW</div>
              {skill.youNeed.map((item, i) => (
                <div key={i} style={{ color: T.light, fontSize: 12, padding: "4px 0", display: "flex", gap: 6, borderBottom: i < skill.youNeed.length - 1 ? `1px solid ${T.border}` : "none" }}>
                  <span style={{ color: "#00d4aa" }}>→</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
            {["concepts", "practice"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? skill.color + "20" : T.card, border: `1px solid ${activeTab === tab ? skill.color + "66" : T.border}`, borderRadius: 8, color: activeTab === tab ? skill.color : T.muted, padding: "8px 18px", cursor: "pointer", fontSize: 13, fontWeight: activeTab === tab ? 700 : 400 }}>
                {tab === "concepts" ? `📖 Core Concepts (${skill.concepts.length})` : "✅ Practice Projects"}
              </button>
            ))}
          </div>

          {activeTab === "concepts" && (
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {skill.concepts.map((c, i) => (
                  <button key={i} onClick={() => setActiveConcept(i)} style={{ background: activeConcept === i ? skill.color + "20" : T.card, border: `1px solid ${activeConcept === i ? skill.color + "66" : T.border}`, borderRadius: 8, color: activeConcept === i ? skill.color : T.light, padding: "10px 12px", cursor: "pointer", fontSize: 12, fontWeight: activeConcept === i ? 700 : 400, textAlign: "left", lineHeight: 1.4 }}>
                    <span style={{ color: T.muted, fontSize: 10, display: "block", marginBottom: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                    {c.name}
                  </button>
                ))}
              </div>
              <div>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ background: skill.color + "15", borderBottom: `1px solid ${T.border}`, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: skill.color, fontWeight: 700, fontSize: 15 }}>{skill.concepts[activeConcept].name}</span>
                    <span style={{ color: T.muted, fontSize: 11 }}>{activeConcept + 1} / {skill.concepts.length}</span>
                  </div>
                  <div style={{ background: "#0a0a12", padding: 18, overflowX: "auto" }}>
                    <pre style={{ margin: 0, fontSize: 12, lineHeight: 1.8, color: "#c9d1d9", fontFamily: "'Courier New', Consolas, monospace", whiteSpace: "pre" }}>
                      {skill.concepts[activeConcept].code}
                    </pre>
                  </div>
                  <div style={{ padding: "14px 18px", background: T.surface, borderTop: `1px solid ${T.border}` }}>
                    <div style={{ color: skill.color, fontWeight: 600, fontSize: 11, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>💡 What this means</div>
                    <p style={{ color: T.light, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{skill.concepts[activeConcept].desc}</p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                  <button onClick={() => setActiveConcept(Math.max(0, activeConcept - 1))} disabled={activeConcept === 0}
                    style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 8, color: activeConcept === 0 ? T.muted : T.light, padding: "8px 16px", cursor: activeConcept === 0 ? "default" : "pointer", fontSize: 13 }}>
                    ← Previous
                  </button>
                  <button onClick={() => setActiveConcept(Math.min(skill.concepts.length - 1, activeConcept + 1))} disabled={activeConcept === skill.concepts.length - 1}
                    style={{ background: skill.color, border: "none", borderRadius: 8, color: "#fff", padding: "8px 16px", cursor: activeConcept === skill.concepts.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 700, opacity: activeConcept === skill.concepts.length - 1 ? 0.4 : 1 }}>
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "practice" && (
            <div>
              <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ color: skill.color, fontWeight: 700, marginBottom: 16, fontSize: 15 }}>🎯 Practice These Projects — In Order</div>
                {skill.practice.map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < skill.practice.length - 1 ? `1px solid ${T.border}` : "none", alignItems: "flex-start" }}>
                    <span style={{ background: skill.color + "22", color: skill.color, borderRadius: 8, padding: "4px 10px", fontSize: 13, fontWeight: 800, minWidth: 32, textAlign: "center" }}>{i + 1}</span>
                    <div>
                      <div style={{ color: T.text, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{p}</div>
                      <div style={{ color: T.muted, fontSize: 12 }}>Build this with AI → understand every line → be able to explain it</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#00d4aa10", border: "1px solid #00d4aa33", borderRadius: 10, padding: 16 }}>
                <div style={{ color: "#00d4aa", fontWeight: 700, marginBottom: 8 }}>📌 How to Practice with AI</div>
                <div style={{ color: T.light, fontSize: 13, lineHeight: 1.9 }}>
                  1. <strong style={{ color: T.text }}>Ask AI to build it</strong> — use the 6-part prompt formula<br />
                  2. <strong style={{ color: T.text }}>Read every line</strong> — ask AI to explain anything you don't understand<br />
                  3. <strong style={{ color: T.text }}>Break it intentionally</strong> — delete lines, see what happens<br />
                  4. <strong style={{ color: T.text }}>Rebuild from scratch</strong> — try to write it yourself with AI helping<br />
                  5. <strong style={{ color: T.text }}>Add one improvement</strong> — make it better than what AI gave you
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// AI BUILDER MASTERY GUIDE
// ═══════════════════════════════════════════════════════════════════════════════

const colors = {
  bg: "#0a0a0f", surface: "#111118", card: "#16161f", border: "#1e1e2e",
  accent1: "#6c63ff", accent2: "#00d4aa", accent3: "#ff6b6b", accent4: "#ffd166",
  text: "#e8e8f0", muted: "#6b6b8a", light: "#a0a0c0",
};

const masterySections = [
  { id: "mindset",      label: "🧠 Mindset" },
  { id: "skills",       label: "🛠 Skills Stack" },
  { id: "workflow",     label: "🔄 Universal Workflow" },
  { id: "normal",       label: "💬 Normal AI" },
  { id: "agentic",      label: "🤖 Agentic AI" },
  { id: "architecture", label: "🏗 Architecture" },
  { id: "roadmap",      label: "🗺 Roadmap" },
];

const PhaseCard = ({ num, title, color, items }) => (
  <div style={{ background: colors.card, border: `1px solid ${color}33`, borderLeft: `3px solid ${color}`, borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ background: color + "22", color, borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PHASE {num}</span>
      <span style={{ color: colors.text, fontWeight: 700, fontSize: 15 }}>{title}</span>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item, i) => (
        <span key={i} style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 6, padding: "4px 10px", fontSize: 12, color: colors.light }}>{item}</span>
      ))}
    </div>
  </div>
);

const FlowStep = ({ icon, title, desc, color, arrow }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ background: color + "15", border: `1.5px solid ${color}55`, borderRadius: 12, padding: "14px 18px", width: "100%", display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ fontSize: 22 }}>{icon}</span>
      <div>
        <div style={{ color, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
        <div style={{ color: colors.light, fontSize: 13, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
    {arrow && <div style={{ color: colors.muted, fontSize: 20, margin: "4px 0" }}>↓</div>}
  </div>
);

const SkillCard = ({ icon, title, items, color }) => (
  <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderTop: `2px solid ${color}`, borderRadius: 10, padding: 16, flex: "1 1 200px" }}>
    <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
    <div style={{ color: colors.text, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{title}</div>
    {items.map((item, i) => (
      <div key={i} style={{ color: colors.light, fontSize: 12, padding: "4px 0", borderBottom: i < items.length - 1 ? `1px solid ${colors.border}` : "none", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color, fontSize: 10 }}>▸</span> {item}
      </div>
    ))}
  </div>
);

const CompareRow = ({ topic, normal, agentic }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 1, marginBottom: 1 }}>
    <div style={{ background: colors.surface, padding: "10px 14px", color: colors.light, fontSize: 13 }}>{topic}</div>
    <div style={{ background: "#ff6b6b0a", padding: "10px 14px", color: "#ff9999", fontSize: 13 }}>{normal}</div>
    <div style={{ background: "#6c63ff0a", padding: "10px 14px", color: "#9d97ff", fontSize: 13 }}>{agentic}</div>
  </div>
);

function AIBuilderMasteryApp({ onOpenSkillsStack }) {
  const [active, setActive] = useState("mindset");

  const renderContent = () => {
    switch (active) {

      case "mindset": return (
        <div>
          <h2 style={{ color: colors.accent1, fontSize: 22, marginBottom: 6 }}>🧠 The Builder's Mindset</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
            Before any tool or workflow, you need to think like an architect. AI is your co-builder — you are the <strong style={{ color: colors.accent2 }}>engineer, director, and decision-maker</strong>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[
              { label: "❌ Wrong Thinking", items: ["AI will do everything", "Just prompt and it works", "I don't need to understand code", "One tool does everything"], color: colors.accent3 },
              { label: "✅ Right Thinking", items: ["I direct, AI executes", "I understand what's built", "I connect the right tools", "I own the final product"], color: colors.accent2 },
            ].map((col, i) => (
              <div key={i} style={{ background: col.color + "08", border: `1px solid ${col.color}33`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: col.color, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{col.label}</div>
                {col.items.map((item, j) => (
                  <div key={j} style={{ color: colors.light, fontSize: 13, padding: "5px 0", borderBottom: j < col.items.length - 1 ? `1px solid ${colors.border}` : "none" }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ background: colors.card, border: `1px solid ${colors.accent1}33`, borderRadius: 10, padding: 20 }}>
            <div style={{ color: colors.accent1, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>🔑 The 5 Core Mental Models</div>
            {[
              { num: "01", title: "Think in Systems", desc: "Every product = Inputs → Process → Output. Always ask: what goes in, what happens, what comes out?" },
              { num: "02", title: "Think in Layers", desc: "Frontend (what users see) → Backend (logic) → Database (data) → Deployment (server). Know which layer you're working on." },
              { num: "03", title: "Think in Problems", desc: "Start with the user's problem, not the technology. What pain are you solving? For who? Why?" },
              { num: "04", title: "Think in Iterations", desc: "Build → Test → Break → Fix → Improve. Never try to build everything perfect at once." },
              { num: "05", title: "Think in Prompts", desc: "AI output quality = your prompt quality. Be specific, give context, show examples, define the format you want." },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: i < 4 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ color: colors.accent1, fontWeight: 900, fontSize: 20, minWidth: 32, opacity: 0.5 }}>{m.num}</span>
                <div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: 14 }}>{m.title}</div>
                  <div style={{ color: colors.light, fontSize: 13, marginTop: 3, lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

      case "skills": return (
        <div>
          <h2 style={{ color: colors.accent2, fontSize: 22, marginBottom: 6 }}>🛠 Skills Stack to Master</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 16, lineHeight: 1.7 }}>
            You don't need to be an expert programmer — but you need to understand each layer enough to <strong style={{ color: colors.accent2 }}>direct AI and verify its output</strong>.
          </p>

          {/* Button to open full Skills Stack reference */}
          <div style={{ background: colors.accent2 + "12", border: `1px solid ${colors.accent2}44`, borderRadius: 10, padding: 16, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ color: colors.accent2, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>⚡ Full Interactive Skills Reference</div>
              <div style={{ color: colors.light, fontSize: 13 }}>Deep dive into all 11 skills with code examples, explanations, and practice projects.</div>
            </div>
            <button onClick={onOpenSkillsStack} style={{ background: colors.accent2, border: "none", borderRadius: 8, color: "#000", padding: "10px 20px", cursor: "pointer", fontSize: 13, fontWeight: 800, whiteSpace: "nowrap", flexShrink: 0 }}>
              Open Skills Stack →
            </button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
            <SkillCard icon="🎨" title="Frontend (What Users See)" color={colors.accent2} items={["HTML structure", "CSS styling", "JavaScript interactivity", "React / components", "Responsive design"]} />
            <SkillCard icon="⚙️" title="Backend (The Brain)" color={colors.accent1} items={["Python / Node.js basics", "APIs & routes", "Authentication (login)", "File handling", "Business logic"]} />
            <SkillCard icon="🗄️" title="Database (Memory)" color={colors.accent4} items={["SQL basics (tables, queries)", "NoSQL (Firebase, MongoDB)", "Data modeling", "CRUD operations", "Relationships"]} />
            <SkillCard icon="☁️" title="Deployment (Ship It)" color={colors.accent3} items={["Git & GitHub", "Vercel / Netlify", "Environment variables", "Domain setup", "CI/CD basics"]} />
            <SkillCard icon="🤖" title="AI Prompting (Your Superpower)" color="#ff9f43" items={["Prompt engineering", "Context management", "Chain-of-thought", "System prompts", "Iteration loops"]} />
            <SkillCard icon="🏗️" title="Architecture (Big Picture)" color="#a29bfe" items={["System design", "API design", "Component structure", "Scalability thinking", "Security basics"]} />
          </div>
          <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10, padding: 16 }}>
            <div style={{ color: colors.accent4, fontWeight: 700, marginBottom: 10 }}>📌 What You Actually Need to Know</div>
            <div style={{ color: colors.light, fontSize: 13, lineHeight: 1.8 }}>
              You need to <strong style={{ color: colors.text }}>read code</strong>, not necessarily write it from scratch. Understand what each part does so you can:<br />
              ✅ Tell AI what to build clearly &nbsp;&nbsp; ✅ Spot when AI makes a mistake<br />
              ✅ Connect different pieces together &nbsp;&nbsp; ✅ Debug with AI's help<br />
              ✅ Make architectural decisions &nbsp;&nbsp; ✅ Know which tool fits which job
            </div>
          </div>
        </div>
      );

      case "workflow": return (
        <div>
          <h2 style={{ color: colors.accent4, fontSize: 22, marginBottom: 6 }}>🔄 Universal Build Workflow</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            This works for <strong style={{ color: colors.accent4 }}>any product</strong> — website, app, software, tool — with any AI.
          </p>
          <FlowStep icon="💡" color={colors.accent4} arrow title="PHASE 1 — Define the Idea" desc="What are you building? Who is it for? What problem does it solve? Write it in 3 sentences." />
          <FlowStep icon="📐" color={colors.accent1} arrow title="PHASE 2 — Design the Architecture" desc="Sketch what pages/screens exist. What data do you need? What APIs? Frontend + Backend + DB plan." />
          <FlowStep icon="🗂️" color={colors.accent2} arrow title="PHASE 3 — Break It Into Modules" desc="Split the whole product into small independent pieces. Each piece has one job. Build one at a time." />
          <FlowStep icon="💬" color="#ff9f43" arrow title="PHASE 4 — Prompt AI to Build Each Module" desc="Give AI context, the module's job, inputs/outputs, and desired format. Be specific. Review output." />
          <FlowStep icon="🧪" color="#a29bfe" arrow title="PHASE 5 — Test & Iterate" desc="Run it. Break it intentionally. Fix with AI. Repeat until each module is solid." />
          <FlowStep icon="🔗" color={colors.accent2} arrow title="PHASE 6 — Connect the Modules" desc="Wire the pieces together. Make sure data flows correctly from one module to the next." />
          <FlowStep icon="☁️" color={colors.accent3} arrow title="PHASE 7 — Deploy & Go Live" desc="Push to GitHub → Deploy on Vercel/Render → Set up domain → Monitor for errors." />
          <FlowStep icon="🔁" color={colors.muted} title="PHASE 8 — Maintain & Improve" desc="Collect user feedback → prioritize fixes → loop back to Phase 4 for new features." />
        </div>
      );

      case "normal": return (
        <div>
          <h2 style={{ color: colors.accent3, fontSize: 22, marginBottom: 6 }}>💬 Normal AI Workflow</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            ChatGPT, Claude.ai, Gemini — these are <strong style={{ color: colors.accent3 }}>conversational AI tools</strong>. You talk, they write code, you execute.
          </p>
          <div style={{ background: colors.card, border: `1px solid ${colors.accent3}33`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <div style={{ color: colors.accent3, fontWeight: 700, marginBottom: 12 }}>📋 Step-by-Step: Normal AI Workflow</div>
            {[
              { step: "1", title: "Write a Clear Prompt", desc: 'Give context: "I am building a login page using HTML/CSS/JS. Build me a signup form with email and password validation."' },
              { step: "2", title: "AI Writes the Code", desc: "It gives you code blocks. Read through them to understand what was built." },
              { step: "3", title: "Copy Code → Create Files", desc: "Manually create the file (e.g. index.html), paste the code, save." },
              { step: "4", title: "Run It Locally", desc: "Open in browser (for HTML) or run python app.py in terminal (for Python). See if it works." },
              { step: "5", title: "Copy Errors Back", desc: 'If broken, copy the exact error and tell AI: "I got this error: [paste]. Fix it."' },
              { step: "6", title: "Iterate Until It Works", desc: "Repeat the fix loop until each piece works correctly." },
              { step: "7", title: "Connect All Pieces", desc: "Manually connect your modules together — import functions, link pages, wire up APIs." },
              { step: "8", title: "Deploy", desc: "Push to GitHub, deploy on Vercel/Render. Ask AI how to do this step too." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: i < 7 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ background: colors.accent3 + "22", color: colors.accent3, borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700, height: "fit-content" }}>{s.step}</span>
                <div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: 13 }}>{s.title}</div>
                  <div style={{ color: colors.light, fontSize: 12, marginTop: 3, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10, padding: 16 }}>
            <div style={{ color: colors.accent4, fontWeight: 700, marginBottom: 10 }}>🎯 Prompting Formula for Normal AI</div>
            <div style={{ background: colors.surface, borderRadius: 8, padding: 14, fontFamily: "monospace", fontSize: 12, color: colors.light, lineHeight: 1.8 }}>
              <span style={{ color: colors.accent2 }}>CONTEXT:</span> I am building [what product] using [tech stack]<br />
              <span style={{ color: colors.accent1 }}>TASK:</span> Build me [specific feature/module]<br />
              <span style={{ color: colors.accent4 }}>INPUTS:</span> It receives [what data]<br />
              <span style={{ color: colors.accent3 }}>OUTPUT:</span> It should return/show [what result]<br />
              <span style={{ color: "#a29bfe" }}>FORMAT:</span> Give me [HTML file / Python function / React component]<br />
              <span style={{ color: colors.muted }}>CONSTRAINTS:</span> Keep it simple, no external libraries
            </div>
          </div>
        </div>
      );

      case "agentic": return (
        <div>
          <h2 style={{ color: colors.accent1, fontSize: 22, marginBottom: 6 }}>🤖 Agentic AI Workflow</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            Claude Code, Codex — these are <strong style={{ color: colors.accent1 }}>autonomous agents</strong>. They live in your terminal and act like a developer who can read, write, run, and fix code independently.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            <div style={{ background: colors.card, border: `1px solid ${colors.accent1}33`, borderRadius: 10, padding: 14 }}>
              <div style={{ color: colors.accent1, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>⚡ What the Agent Does Itself</div>
              {["Creates all files & folders", "Writes code across multiple files", "Runs terminal commands", "Reads error messages", "Fixes its own bugs", "Installs dependencies (npm, pip)", "Refactors and improves code", "Searches your codebase"].map((item, i) => (
                <div key={i} style={{ color: colors.light, fontSize: 12, padding: "4px 0", display: "flex", gap: 6 }}>
                  <span style={{ color: colors.accent1 }}>✓</span> {item}
                </div>
              ))}
            </div>
            <div style={{ background: colors.card, border: `1px solid ${colors.accent3}33`, borderRadius: 10, padding: 14 }}>
              <div style={{ color: colors.accent3, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>👤 What YOU Still Do</div>
              {["Define the idea & requirements", "Review what was built", "Test like a real user", "Deploy to production", "Manage API keys & secrets", "Create external accounts", "Make design decisions", "Handle user feedback"].map((item, i) => (
                <div key={i} style={{ color: colors.light, fontSize: 12, padding: "4px 0", display: "flex", gap: 6 }}>
                  <span style={{ color: colors.accent3 }}>→</span> {item}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: colors.card, border: `1px solid ${colors.accent1}33`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <div style={{ color: colors.accent1, fontWeight: 700, marginBottom: 12 }}>🔄 Claude Code / Codex Workflow</div>
            {[
              { step: "1", title: "Install & Open in Your Project Folder", desc: "Run: claude (for Claude Code) or codex in terminal, inside your project directory." },
              { step: "2", title: "Give It the Full Plan", desc: '"Build a web app for tracking tasks. Needs: user login, task list, add/delete. Use Python Flask + HTML + SQLite."' },
              { step: "3", title: "Agent Builds the Full Structure", desc: "It creates folders, files, writes code, installs packages — all automatically. You watch." },
              { step: "4", title: "Review What Was Built", desc: "Open the files. Read the code. Ask the agent to explain anything you don't understand." },
              { step: "5", title: "Ask for Changes", desc: '"Change the button color to blue" or "Add email notifications" — it updates the right files.' },
              { step: "6", title: "Test Like a Real User", desc: "Click every button. Try wrong inputs. Test on mobile. Find what breaks and report to agent." },
              { step: "7", title: "YOU Deploy It", desc: "Push to GitHub manually, then deploy. The agent cannot log into Vercel/Firebase for you." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: i < 6 ? `1px solid ${colors.border}` : "none" }}>
                <span style={{ background: colors.accent1 + "22", color: colors.accent1, borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700 }}>{s.step}</span>
                <div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: 13 }}>{s.title}</div>
                  <div style={{ color: colors.light, fontSize: 12, marginTop: 3, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr" }}>
              <div style={{ background: colors.surface, padding: "10px 14px", color: colors.muted, fontSize: 12, fontWeight: 700 }}>TOPIC</div>
              <div style={{ background: "#ff6b6b15", padding: "10px 14px", color: colors.accent3, fontSize: 12, fontWeight: 700 }}>💬 NORMAL AI</div>
              <div style={{ background: "#6c63ff15", padding: "10px 14px", color: colors.accent1, fontSize: 12, fontWeight: 700 }}>🤖 AGENTIC AI</div>
            </div>
            <CompareRow topic="Saves files" normal="❌ You do it" agentic="✅ Does it" />
            <CompareRow topic="Runs code" normal="❌ You do it" agentic="✅ Does it" />
            <CompareRow topic="Fixes bugs" normal="You copy-paste errors" agentic="Sees & fixes itself" />
            <CompareRow topic="Multi-file projects" normal="Hard to manage" agentic="Handles naturally" />
            <CompareRow topic="Speed" normal="Slower (manual steps)" agentic="Much faster" />
            <CompareRow topic="Best for" normal="Small tasks, learning" agentic="Full products, complex apps" />
          </div>
        </div>
      );

      case "architecture": return (
        <div>
          <h2 style={{ color: "#a29bfe", fontSize: 22, marginBottom: 6 }}>🏗 Designing & Architecting with AI</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            Architecture = deciding <strong style={{ color: "#a29bfe" }}>what to build, how to organize it, and how the pieces connect</strong> — before writing a single line of code.
          </p>
          <div style={{ background: colors.card, border: `1px solid #a29bfe33`, borderRadius: 10, padding: 16, marginBottom: 14 }}>
            <div style={{ color: "#a29bfe", fontWeight: 700, marginBottom: 12 }}>📐 Architecture Design Process</div>
            {[
              { q: "What does the user need to do?", a: "List all actions: sign up, log in, create post, delete post, view profile..." },
              { q: "What data needs to be stored?", a: "Users table, Posts table, Comments table. What fields? What relationships?" },
              { q: "What pages/screens exist?", a: "Draw a simple map: Home → Login → Dashboard → Settings" },
              { q: "What APIs are needed?", a: "GET /posts, POST /users, DELETE /task/:id — map out every endpoint" },
              { q: "Which tech fits the job?", a: "Simple site → HTML/CSS. Dynamic app → React + Node. Data-heavy → Python + PostgreSQL" },
              { q: "What's the MVP?", a: "Minimum Viable Product — the smallest version that works. Build that first." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "10px 0", borderBottom: i < 5 ? `1px solid ${colors.border}` : "none" }}>
                <div style={{ color: "#a29bfe", fontSize: 13, fontWeight: 600, marginBottom: 3 }}>❓ {item.q}</div>
                <div style={{ color: colors.light, fontSize: 12, lineHeight: 1.6 }}>→ {item.a}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10, padding: 14 }}>
              <div style={{ color: colors.accent2, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>🌐 Website Architecture</div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: colors.light, lineHeight: 2 }}>
                index.html (Home)<br />about.html (About)<br />style.css (Design)<br />script.js (Logic)<br />→ Deploy: GitHub Pages
              </div>
            </div>
            <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 10, padding: 14 }}>
              <div style={{ color: colors.accent1, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>📱 Full App Architecture</div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: colors.light, lineHeight: 2 }}>
                Frontend (React)<br />↕ REST API<br />Backend (Node/Python)<br />↕ Queries<br />Database (PostgreSQL)<br />→ Deploy: Vercel + Render
              </div>
            </div>
          </div>
        </div>
      );

      case "roadmap": return (
        <div>
          <h2 style={{ color: colors.accent2, fontSize: 22, marginBottom: 6 }}>🗺 Your Learning Roadmap</h2>
          <p style={{ color: colors.light, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            Follow this phase-by-phase path. Each phase builds on the last. <strong style={{ color: colors.accent2 }}>Don't skip phases.</strong>
          </p>
          <PhaseCard num="1" title="Foundation — Understand the Layers" color={colors.accent3} items={["HTML basics (1 week)", "CSS basics (1 week)", "JavaScript basics (2 weeks)", "How the web works (HTTP, DNS)", "Git & GitHub basics"]} />
          <PhaseCard num="2" title="Build with Normal AI — Small Projects" color={colors.accent4} items={["Use Claude/ChatGPT to build a landing page", "Build a calculator app", "Build a to-do list", "Learn to read & understand AI-generated code", "Practice prompting formula"]} />
          <PhaseCard num="3" title="Add Backend & Database" color={colors.accent1} items={["Python basics (2 weeks)", "Flask or FastAPI (1 week)", "SQL basics (1 week)", "Build a backend API with AI", "Connect frontend + backend"]} />
          <PhaseCard num="4" title="First Full Product" color={colors.accent2} items={["Design architecture yourself", "Build full-stack app with Normal AI", "Deploy to Vercel + Render", "Add a real domain", "Share with real users"]} />
          <PhaseCard num="5" title="Master Agentic AI — Claude Code / Codex" color="#a29bfe" items={["Install Claude Code", "Learn terminal basics", "Give it complex multi-file tasks", "Review & audit agent output", "Build a full app in one session"]} />
          <PhaseCard num="6" title="Architecture Mastery — Design Anything" color="#ff9f43" items={["System design patterns", "API design best practices", "Database modeling", "Authentication systems", "Scalability & performance"]} />
          <PhaseCard num="7" title="Production Master — Ship Real Products" color={colors.accent3} items={["CI/CD pipelines", "Error monitoring (Sentry)", "User analytics", "Security hardening", "Iterating from user feedback"]} />
          <div style={{ background: colors.card, border: `1px solid ${colors.accent2}33`, borderRadius: 10, padding: 16, marginTop: 4 }}>
            <div style={{ color: colors.accent2, fontWeight: 700, marginBottom: 8 }}>⏱ Realistic Timeline</div>
            <div style={{ color: colors.light, fontSize: 13, lineHeight: 1.9 }}>
              Phase 1-2: <strong style={{ color: colors.text }}>1–2 months</strong><br />
              Phase 3-4: <strong style={{ color: colors.text }}>2–3 months</strong><br />
              Phase 5-6: <strong style={{ color: colors.text }}>2–3 months</strong><br />
              Phase 7: <strong style={{ color: colors.text }}>Ongoing (never stops)</strong><br />
              <span style={{ color: colors.muted, fontSize: 12 }}>With consistent daily practice of 1–2 hours.</span>
            </div>
          </div>
        </div>
      );

      default: return null;
    }
  };

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", color: colors.text }}>
      <div style={{ background: colors.surface, borderBottom: `1px solid ${colors.border}`, padding: "20px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: colors.accent1 + "22", border: `1px solid ${colors.accent1}55`, borderRadius: 10, padding: "8px 12px", fontSize: 22 }}>⚡</div>
          <div>
            <div style={{ color: colors.text, fontWeight: 800, fontSize: 20, letterSpacing: -0.5 }}>AI Builder Mastery Guide</div>
            <div style={{ color: colors.muted, fontSize: 13 }}>From Idea → Architecture → Build → Deploy → Real Users</div>
          </div>
        </div>
      </div>
      <div style={{ background: colors.surface, borderBottom: `1px solid ${colors.border}`, padding: "0 24px", overflowX: "auto" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", gap: 4 }}>
          {masterySections.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{ background: active === s.id ? colors.accent1 + "22" : "transparent", border: "none", borderBottom: active === s.id ? `2px solid ${colors.accent1}` : "2px solid transparent", color: active === s.id ? colors.accent1 : colors.muted, padding: "14px 14px", cursor: "pointer", fontSize: 12, fontWeight: active === s.id ? 700 : 400, whiteSpace: "nowrap", transition: "all 0.2s" }}>{s.label}</button>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
        {renderContent()}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          {masterySections.findIndex(s => s.id === active) > 0 ? (
            <button onClick={() => setActive(masterySections[masterySections.findIndex(s => s.id === active) - 1].id)}
              style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 8, padding: "10px 18px", color: colors.light, cursor: "pointer", fontSize: 13 }}>
              ← Previous
            </button>
          ) : <div />}
          {masterySections.findIndex(s => s.id === active) < masterySections.length - 1 && (
            <button onClick={() => setActive(masterySections[masterySections.findIndex(s => s.id === active) + 1].id)}
              style={{ background: colors.accent1, border: "none", borderRadius: 8, padding: "10px 18px", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ROOT APP — top-level switcher
// ═══════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [view, setView] = useState("mastery"); // "mastery" | "skills"

  return (
    <div style={{ minHeight: "100vh", background: "#07080f" }}>
      {/* Top switcher bar */}
      <div style={{ background: "#0d0e18", borderBottom: "1px solid #1c1d2e", padding: "0 16px", display: "flex", alignItems: "center", gap: 0, position: "sticky", top: 0, zIndex: 100 }}>
        <button onClick={() => setView("mastery")} style={{ background: view === "mastery" ? "#6c63ff22" : "transparent", border: "none", borderBottom: view === "mastery" ? "2.5px solid #6c63ff" : "2.5px solid transparent", color: view === "mastery" ? "#6c63ff" : "#565670", padding: "13px 20px", cursor: "pointer", fontSize: 13, fontWeight: view === "mastery" ? 700 : 400, transition: "all 0.2s" }}>
          ⚡ AI Builder Mastery
        </button>
        <button onClick={() => setView("skills")} style={{ background: view === "skills" ? "#00d4aa22" : "transparent", border: "none", borderBottom: view === "skills" ? "2.5px solid #00d4aa" : "2.5px solid transparent", color: view === "skills" ? "#00d4aa" : "#565670", padding: "13px 20px", cursor: "pointer", fontSize: 13, fontWeight: view === "skills" ? 700 : 400, transition: "all 0.2s" }}>
          🛠 Skills Stack Reference
        </button>
      </div>

      {view === "mastery"
        ? <AIBuilderMasteryApp onOpenSkillsStack={() => setView("skills")} />
        : <SkillsStackApp />
      }
    </div>
  );
}
