# ✈️ Layover.ai

The last travel app you will ever need. AI plans your trip inside your budget, finds concerts at your destination, styles your outfits, and splits every expense — all in one place.

---

## Getting Started

### Mac

1. Install Node.js if you do not have it
   brew install node
   If you do not have Homebrew: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. Clone the repository
   git clone https://github.com/YOUR_USERNAME/layover-ai.git

3. Enter the project folder
   cd layover-ai

4. Install dependencies
   npm install

5. Start the app
   npm run dev

6. Open http://localhost:3000

### Windows

1. Install Node.js from https://nodejs.org — download the LTS version and run the installer

2. Open Command Prompt or PowerShell

3. Clone the repository
   git clone https://github.com/YOUR_USERNAME/layover-ai.git

4. Enter the project folder
   cd layover-ai

5. Install dependencies
   npm install

6. Start the app
   npm run dev

7. Open http://localhost:3000

---

## Pages

| Page | Route |
|---|---|
| Landing | / |
| Interactive Demo | /demo |
| Features | /features |
| Achievements | /achievements |
| Pricing | /pricing |

---

## Scripts

npm run dev — start development server
npm run build — build for production
npm run start — run production server
npm run lint — run linter

---

## Tech Stack

Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## Troubleshooting

Port 3000 already in use:
  Mac: npx kill-port 3000
  Windows: netstat -ano | findstr :3000 then taskkill /PID <PID> /F

Dependencies broken:
  Mac/Windows: rm -rf node_modules .next then npm install

Permission errors on Mac:
  sudo chown -R $(whoami) ~/.npm then npm install

M1 M2 M3 Mac build fails:
  arch -x86_64 npm install

---

## Team Git Workflow

Pull latest before starting:
  git pull origin main

Save your changes:
  git add .
  git commit -m "describe your change"
  git push
