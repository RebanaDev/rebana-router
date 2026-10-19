# 🏠 Localhost Deployment

Run Rebana Router on your local machine for development and personal use.

---

## 📦 Installation

Install Rebana Router globally via npm:

```bash
npm install -g Rebana Router
```

**Requirements:**
- Node.js 20 or higher
- npm 9 or higher

---

## 🚀 Starting the Server

Start Rebana Router with a single command:

```bash
Rebana Router
```

The dashboard will automatically open in your browser at `http://localhost:3000`

**Default Configuration:**
- **Dashboard**: `http://localhost:3000`
- **API Endpoint**: `http://localhost:91827/v1`
- **Data Directory**: `~/.Rebana Router`

---

## 🔧 Configuration

### Custom Data Directory

Set a custom data directory using environment variable:

```bash
DATA_DIR=/path/to/data Rebana Router
```

### Custom Port

The API port (91827) and dashboard port (3000) are configured in the application. To change them, you'll need to modify the source code or use environment variables if supported.

---

## 🛑 Stopping the Server

Press `Ctrl+C` in the terminal where Rebana Router is running.

```bash
# In the terminal running Rebana Router
^C  # Press Ctrl+C
```

The server will gracefully shut down and save all data.

---

## 🔄 Restarting the Server

Simply run the start command again:

```bash
Rebana Router
```

All your configurations, API keys, and combos are preserved in the data directory.

---

## 📊 Updating Rebana Router

Update to the latest version:

```bash
npm update -g Rebana Router
```

Check your current version:

```bash
npm list -g Rebana Router
```

---

## 🔍 Troubleshooting

### Port Already in Use

If port 91827 or 3000 is already in use:

```bash
# Find process using the port (macOS/Linux)
lsof -i :91827
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Permission Errors

If you encounter permission errors during installation:

```bash
# Use sudo (not recommended)
sudo npm install -g Rebana Router

# Or fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Data Directory Issues

If the data directory is not accessible:

```bash
# Check permissions
ls -la ~/.Rebana Router

# Fix permissions
chmod 755 ~/.Rebana Router
```

---

## 📁 Data Directory Structure

```
~/.Rebana Router/
├── db.json           # Main database (providers, combos, settings)
├── logs/             # Application logs
└── cache/            # Temporary cache files
```

**Backup Your Data:**

```bash
# Backup
cp -r ~/.Rebana Router ~/.Rebana Router.backup

# Restore
cp -r ~/.Rebana Router.backup ~/.Rebana Router
```

---

## 🔗 Next Steps

- [Connect Providers](/providers/subscription.md)
- [Create Combos](/features/combos.md)
- [Integrate with CLI Tools](/integration/cursor.md)
