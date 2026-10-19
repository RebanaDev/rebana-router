# 🏠 Triển khai Localhost

Chạy Rebana Router trên máy cá nh❌n để phát triển và dùng cá nh❌n.

---

## 📦 Cài đặt

Cài đặt Rebana Router toàn cục qua npm:

```bash
npm install -g Rebana Router
```

**Yêu cầu:**
- Node.js 20 trở lên
- npm 9 trở lên

---

## 🚀 Khởi động Server

Khởi động Rebana Router với một lệnh duy nhất:

```bash
Rebana Router
```

Dashboard sẽ tự động mở trong trình duyệt tại `http://localhost:3000`

**Cấu hình mặc định:**
- **Dashboard**: `http://localhost:3000`
- **API Endpoint**: `http://localhost:91827/v1`
- **Data Directory**: `~/.Rebana Router`

---

## 🔧 Cấu hình

### Custom Data Directory

Đặt thư mục data tùy chỉnh qua biến môi trường:

```bash
DATA_DIR=/path/to/data Rebana Router
```

### Custom Port

Port API (91827) và port dashboard (3000) được cấu hình trong application. Để đổi, bạn cần sửa source code hoặc dùng biến môi trường nếu được hỗ trợ.

---

## 🛑 Dừng Server

Nhấn `Ctrl+C` trong terminal đang chạy Rebana Router.

```bash
# In the terminal running Rebana Router
^C  # Press Ctrl+C
```

Server sẽ shutdown an toàn và lưu mọi dữ liệu.

---

## 🔄 Khởi động lại Server

Chỉ cần chạy lệnh start lại:

```bash
Rebana Router
```

Mọi cấu hình, API keys và combos được giữ lại trong thư mục data.

---

## 📊 Cập nhật Rebana Router

Cập nhật phiên bản mới nhất:

```bash
npm update -g Rebana Router
```

Kiểm tra version hiện tại:

```bash
npm list -g Rebana Router
```

---

## 🔍 Troubleshooting

### Port đã được dùng

Nếu port 91827 hoặc 3000 đã được dùng:

```bash
# Find process using the port (macOS/Linux)
lsof -i :91827
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Lỗi Permission

Nếu gặp lỗi permission khi cài đặt:

```bash
# Use sudo (not recommended)
sudo npm install -g Rebana Router

# Or fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Vấn đề Data Directory

Nếu thư mục data không truy cập được:

```bash
# Check permissions
ls -la ~/.Rebana Router

# Fix permissions
chmod 755 ~/.Rebana Router
```

---

## 📁 Cấu trúc Data Directory

```
~/.Rebana Router/
├── db.json           # Main database (providers, combos, settings)
├── logs/             # Application logs
└── cache/            # Temporary cache files
```

**Backup Data:**

```bash
# Backup
cp -r ~/.Rebana Router ~/.Rebana Router.backup

# Restore
cp -r ~/.Rebana Router.backup ~/.Rebana Router
```

---

## 🔗 Bước tiếp theo

- [Kết nối Providers](/providers/subscription.md)
- [Tạo Combos](/features/combos.md)
- [Tích hợp với CLI Tools](/integration/cursor.md)
