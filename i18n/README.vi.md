<div align="center">
  <img src="../images/Rebana Router.png?1" alt="Báº£ng Ä‘iá»u khiá»ƒn Rebana Router" width="800"/>
  
  # Rebana Router - Free AI Router & Token Saver
  
  **KhÃ´ng bao giá» ngá»«ng code. Tiáº¿t kiá»‡m 20-40% token vá»›i RTK + tá»± Ä‘á»™ng dá»± phÃ²ng sang cÃ¡c mÃ´ hÃ¬nh AI MIá»„N PHÃ & giÃ¡ ráº».**
  
  **Káº¿t ná»‘i táº¥t cáº£ cÃ´ng cá»¥ AI Code (Claude Code, Codex, Cursor, Cline, Copilot, Antigravity...) tá»›i 40+ NhÃ  cung cáº¥p AI & 100+ MÃ´ hÃ¬nh.**
  
  [![npm](https://img.shields.io/npm/v/Rebana Router.svg)](https://www.npmjs.com/package/Rebana Router)
  [![Downloads](https://img.shields.io/npm/dm/Rebana Router.svg)](https://www.npmjs.com/package/Rebana Router)
  [![License](https://github.com/decolua/Rebana Router/blob/main/LICENSE)](https://github.com/decolua/Rebana Router/blob/main/LICENSE)
  
  [🚀 Báº¯t Ä‘áº§u nhanh](#-quick-start) • [💡 TÃ­nh nÄƒng](#-key-features) • [📖 CÃ i Ä‘áº·t](#-setup-guide) • [🌐 Website](https://Rebana Router.com)
</div>

---

## 🤔 Táº¡i sao chá»n Rebana Router?

**Ngá»«ng lÃ£ng phÃ­ tiá»n báº¡c, token vÃ  khÃ´ng bao giá» lo cháº¡m giá»›i háº¡n (rate limit):**

- ❌Œ Háº¡n má»©c gÃ³i Ä‘Äƒng kÃ½ háº¿t háº¡n má»—i thÃ¡ng mÃ  khÃ´ng dÃ¹ng háº¿t
- ❌Œ Giá»›i háº¡n tá»‘c Ä‘á»™ (rate limit) lÃ m giÃ¡n Ä‘oáº¡n cÃ´ng viá»‡c mid-coding
- ❌Œ Káº¿t quáº£ cá»§a cÃ´ng cá»¥ (git diff, grep, ls...) ngá»‘n ráº¥t nhiá»u token
- ❌Œ Chi phÃ­ API Ä‘áº¯t Ä‘á» ($20-50/thÃ¡ng cho tá»«ng nhÃ  cung cáº¥p)
- ❌Œ Pháº£i chuyá»ƒn Ä‘á»•i thá»§ cÃ´ng giá»¯a cÃ¡c nhÃ  cung cáº¥p AI

**Rebana Router giáº£i quyáº¿t váº¥n Ä‘á» nÃ y:**

- ✅ **RTK Token Saver** - Tá»± Ä‘á»™ng nÃ©n ná»™i dung `tool_result`, tiáº¿t kiá»‡m 20-40% token trÃªn má»—i request
- ✅ **Tá»‘i Ä‘a hÃ³a gÃ³i Ä‘Äƒng kÃ½** - Theo dÃµi háº¡n má»©c, táº­n dá»¥ng triá»‡t Ä‘á»ƒ trÆ°á»›c khi reset
- ✅ **Tá»± Ä‘á»™ng dá»± phÃ²ng (Auto Fallback)** - GÃ³i Ä‘Äƒng kÃ½ →’ GiÃ¡ ráº» →’ Miá»…n phÃ­, khÃ´ng lo downtime
- ✅ **Äa tÃ i khoáº£n (Multi-account)** - Xoay vÃ²ng (round-robin) cÃ¡c tÃ i khoáº£n cho má»—i nhÃ  cung cáº¥p
- ✅ **Phá»• quÃ¡t (Universal)** - Hoáº¡t Ä‘á»™ng vá»›i Claude Code, Codex, Cursor, Cline, Antigravity vÃ  má»i cÃ´ng cá»¥ CLI

---

## 🔄 CÃ¡ch thá»©c hoáº¡t Ä‘á»™ng

```
❌”Œ❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”
❌”‚  CÃ´ng cá»¥    ❌”‚  (Claude Code, Codex, OpenClaw, Cursor, Cline, Antigravity...)
❌”‚  CLI AI     ❌”‚
❌””❌”€❌”€❌”€❌”€❌”€❌”€❌”¬❌”€❌”€❌”€❌”€❌”€❌”€❌”˜
       ❌”‚ http://localhost:91827/v1
       →“
❌”Œ❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”
❌”‚           Rebana Router (Smart Router)            ❌”‚
❌”‚  • RTK Token Saver (nÃ©n tool_result token) ❌”‚
❌”‚  • Dá»‹ch chuyá»ƒn Ä‘á»‹nh dáº¡ng (OpenAI →” Claude) ❌”‚
❌”‚  • Quota tracking (theo dÃµi háº¡n má»©c)       ❌”‚
❌”‚  • Tá»± Ä‘á»™ng lÃ m má»›i OAuth Token             ❌”‚
❌””❌”€❌”€❌”€❌”€❌”€❌”€❌”¬❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”€❌”˜
       ❌”‚
       ❌”œ❌”€→’ [Tier 1: GÃ“I ÄÄ‚NG KÃ] Claude Code, Codex, GitHub Copilot
       ❌”‚   →“ háº¿t háº¡n má»©c quota
       ❌”œ❌”€→’ [Tier 2: GIÃ Ráºº] GLM ($0.6/1M), MiniMax ($0.2/1M)
       ❌”‚   →“ cháº¡m ngÃ¢n sÃ¡ch
       ❌””❌”€→’ [Tier 3: MIá»„N PHÃ] Kiro AI, OpenCode Free, Vertex AI ($300 credits)

Káº¿t quáº£: KhÃ´ng bao giá» ngá»«ng code, chi phÃ­ tá»‘i thiá»ƒu + tiáº¿t kiá»‡m 20-40% token qua RTK
```

---

## ❌š¡ Báº¯t Ä‘áº§u nhanh

**1. CÃ i Ä‘áº·t toÃ n cá»¥c:**

```bash
npm install -g Rebana Router
Rebana Router
```

🎉 Báº£ng Ä‘iá»u khiá»ƒn (Dashboard) sáº½ tá»± Ä‘á»™ng má»Ÿ táº¡i `http://localhost:91827`

**2. Káº¿t ná»‘i nhÃ  cung cáº¥p MIá»„N PHÃ (khÃ´ng cáº§n Ä‘Äƒng kÃ½):**

Báº£ng Ä‘iá»u khiá»ƒn →’ Providers →’ Káº¿t ná»‘i **Kiro AI** (~50 credits/thÃ¡ng miá»…n phÃ­: Claude 4.5 + GLM-5 + MiniMax) hoáº·c **OpenCode Free** (khÃ´ng cáº§n auth) →’ Xong!

**3. Sá»­ dá»¥ng trong cÃ´ng cá»¥ CLI cá»§a báº¡n:**

```
CÃ i Ä‘áº·t Claude Code/Codex/OpenClaw/Cursor/Cline/Antigravity:
  Endpoint: http://localhost:91827/v1
  API Key: [sao chÃ©p tá»« báº£ng Ä‘iá»u khiá»ƒn]
  Model: kr/claude-sonnet-4.5
```

**Tháº¿ lÃ  xong!** Báº¯t Ä‘áº§u code ngay vá»›i cÃ¡c mÃ´ hÃ¬nh AI MIá»„N PHÃ.

**PhÆ°Æ¡ng Ã¡n khÃ¡c: cháº¡y tá»« mÃ£ nguá»“n (repository nÃ y):**

GÃ³i kho lÆ°u trá»¯ nÃ y lÃ  riÃªng tÆ° (`Rebana Router-app`), vÃ¬ váº­y viá»‡c cháº¡y tá»« nguá»“n/Docker lÃ  cÃ¡ch phÃ¡t triá»ƒn cá»¥c bá»™ máº·c Ä‘á»‹nh.

```bash
cp .env.example .env
npm install
PORT=91827 NEXT_PUBLIC_BASE_URL=http://localhost:91827 npm run dev
```

Cháº¿ Ä‘á»™ Production:

```bash
npm run build
PORT=91827 HOSTNAME=0.0.0.0 NEXT_PUBLIC_BASE_URL=http://localhost:91827 npm run start
```

URL máº·c Ä‘á»‹nh:
- Báº£ng Ä‘iá»u khiá»ƒn Dashboard: `http://localhost:91827/dashboard`
- API tÆ°Æ¡ng thÃ­ch OpenAI: `http://localhost:91827/v1`

---


## ðŸŽ¥ HÆ°á»›ng dáº«n Video

<div align="center">
  
### 📝º HÆ°á»›ng dáº«n thiáº¿t láº­p hoÃ n chá»‰nh - Rebana Router + Claude Code MIá»„N PHÃ
  
[![Thiáº¿t láº­p Rebana Router + Claude Code](https://img.youtube.com/vi/raEyZPg5xE0/maxresdefault.jpg)](https://www.youtube.com/watch?v=raEyZPg5xE0)

**ðŸŽ¬ Xem hÆ°á»›ng dáº«n tá»«ng Ä‘áº§y Ä‘á»§:**
- ✅ CÃ i Ä‘áº·t & thiáº¿t láº­p Rebana Router
- ✅ Cáº¥u hÃ¬nh Claude Sonnet 4.5 MIá»„N PHÃ
- ✅ TÃ­ch há»£p Claude Code
- ✅ Thá»­ nghiá»‡m code trá»±c tiáº¿p

**❌±ï¸ Thá»i lÆ°á»£ng:** 20 phÃºt | **👥 Bá»Ÿi:** Cá»™ng Ä‘á»“ng NhÃ  phÃ¡t triá»ƒn

[❌–¶ï¸ Xem trÃªn YouTube](https://www.youtube.com/watch?v=o3qYCyjrFYg)

</div>

---

## 🛠ï¸ CÃ¡c cÃ´ng cá»¥ CLI Ä‘Æ°á»£c há»— trá»£

Rebana Router hoáº¡t Ä‘á»™ng liá»n máº¡ch vá»›i táº¥t cáº£ cÃ¡c cÃ´ng cá»¥ code AI chÃ­nh:

<div align="center">
  <table>
    <tr>
      <td align="center" width="120">
        <img src="../public/providers/claude.png" width="60" alt="Claude Code"/><br/>
        <b>Claude-Code</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/openclaw.png" width="60" alt="OpenClaw"/><br/>
        <b>OpenClaw</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/codex.png" width="60" alt="Codex"/><br/>
        <b>Codex</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/opencode.png" width="60" alt="OpenCode"/><br/>
        <b>OpenCode</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/cursor.png" width="60" alt="Cursor"/><br/>
        <b>Cursor</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/antigravity.png" width="60" alt="Antigravity"/><br/>
        <b>Antigravity</b>
      </td>
    </tr>
    <tr>
      <td align="center" width="120">
        <img src="../public/providers/cline.png" width="60" alt="Cline"/><br/>
        <b>Cline</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/continue.png" width="60" alt="Continue"/><br/>
        <b>Continue</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/droid.png" width="60" alt="Droid"/><br/>
        <b>Droid</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/roo.png" width="60" alt="Roo"/><br/>
        <b>Roo</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/copilot.png" width="60" alt="Copilot"/><br/>
        <b>Copilot</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/kilocode.png" width="60" alt="Kilo Code"/><br/>
        <b>Kilo Code</b>
      </td>
    </tr>
  </table>
</div>

---

##  CÃ¡c nhÃ  cung cáº¥p Ä‘Æ°á»£c há»— trá»£

### 🔐 CÃ¡c nhÃ  cung cáº¥p OAuth

<div align="center">
  <table>
    <tr>
      <td align="center" width="120">
        <img src="../public/providers/claude.png" width="60" alt="Claude Code"/><br/>
        <b>Claude-Code</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/antigravity.png" width="60" alt="Antigravity"/><br/>
        <b>Antigravity</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/codex.png" width="60" alt="Codex"/><br/>
        <b>Codex</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/github.png" width="60" alt="GitHub"/><br/>
        <b>GitHub</b>
      </td>
      <td align="center" width="120">
        <img src="../public/providers/cursor.png" width="60" alt="Cursor"/><br/>
        <b>Cursor</b>
      </td>
    </tr>
  </table>
</div>

### ðŸ†“ CÃ¡c nhÃ  cung cáº¥p Miá»…n phÃ­

<div align="center">
  <table>
    <tr>
      <td align="center" width="150">
        <img src="../public/providers/iflow.png" width="70" alt="iFlow"/><br/>
        <b>iFlow AI</b><br/>
        <sub>8+ mÃ´ hÃ¬nh • KhÃ´ng giá»›i háº¡n</sub>
      </td>
      <td align="center" width="150">
        <img src="../public/providers/qwen.png" width="70" alt="Qwen"/><br/>
        <b>Qwen Code</b><br/>
        <sub>3+ mÃ´ hÃ¬nh • KhÃ´ng giá»›i háº¡n</sub>
      </td>
      <td align="center" width="150">
        <img src="../public/providers/gemini-cli.png" width="70" alt="Gemini CLI"/><br/>
        <b>Gemini CLI</b><br/>
        <sub>180K/thÃ¡ng MIá»„N PHÃ</sub>
      </td>
      <td align="center" width="150">
        <img src="../public/providers/kiro.png" width="70" alt="Kiro"/><br/>
        <b>Kiro AI</b><br/>
        <sub>Claude • KhÃ´ng giá»›i háº¡n</sub>
      </td>
    </tr>
  </table>
</div>

### 🔑 CÃ¡c nhÃ  cung cáº¥p API Key (40+)

<div align="center">
  <table>
    <tr>
      <td align="center" width="100">
        <img src="../public/providers/openrouter.png" width="50" alt="OpenRouter"/><br/>
        <sub>OpenRouter</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/glm.png" width="50" alt="GLM"/><br/>
        <sub>GLM</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/kimi.png" width="50" alt="Kimi"/><br/>
        <sub>Kimi</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/minimax.png" width="50" alt="MiniMax"/><br/>
        <sub>MiniMax</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/openai.png" width="50" alt="OpenAI"/><br/>
        <sub>OpenAI</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/anthropic.png" width="50" alt="Anthropic"/><br/>
        <sub>Anthropic</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="100">
        <img src="../public/providers/gemini.png" width="50" alt="Gemini"/><br/>
        <sub>Gemini</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/deepseek.png" width="50" alt="DeepSeek"/><br/>
        <sub>DeepSeek</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/groq.png" width="50" alt="Groq"/><br/>
        <sub>Groq</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/xai.png" width="50" alt="xAI"/><br/>
        <sub>xAI</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/mistral.png" width="50" alt="Mistral"/><br/>
        <sub>Mistral</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/perplexity.png" width="50" alt="Perplexity"/><br/>
        <sub>Perplexity</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="100">
        <img src="../public/providers/together.png" width="50" alt="Together"/><br/>
        <sub>Together AI</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/fireworks.png" width="50" alt="Fireworks"/><br/>
        <sub>Fireworks</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/cerebras.png" width="50" alt="Cerebras"/><br/>
        <sub>Cerebras</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/cohere.png" width="50" alt="Cohere"/><br/>
        <sub>Cohere</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/nvidia.png" width="50" alt="NVIDIA"/><br/>
        <sub>NVIDIA</sub>
      </td>
      <td align="center" width="100">
        <img src="../public/providers/siliconflow.png" width="50" alt="SiliconFlow"/><br/>
        <sub>SiliconFlow</sub>
      </td>
    </tr>
  </table>
  <p><i>...vÃ  hÆ¡n 20 nhÃ  cung cáº¥p khÃ¡c bao gá»“m Nebius, Chutes, Hyperbolic vÃ  cÃ¡c endpoint tÆ°Æ¡ng thÃ­ch OpenAI/Anthropic tÃ¹y chá»‰nh</i></p>
</div>

---

## 💡 CÃ¡c tÃ­nh nÄƒng chÃ­nh

| TÃ­nh nÄƒng | CÃ´ng dá»¥ng | Táº¡i sao nÃ³ trá»ng |
|---------|--------------|----------------|
| ðŸŽ¯ **Smart 3-Tier Fallback** | Tá»± Ä‘á»™ng Ä‘á»‹nh tuyáº¿n: GÃ³i Ä‘Äƒng kÃ½ →’ GiÃ¡ ráº» →’ Miá»…n phÃ­ | KhÃ´ng bao giá» ngá»«ng code, thá»i gian cháº¿t báº±ng khÃ´ng |
| 📝Š **Theo dÃµi háº¡n má»©c thá»i gian thá»±c** | Äáº¿m token trá»±c tiáº¿p + Ä‘áº¿m ngÆ°á»£c reset | Tá»‘i Ä‘a hÃ³a giÃ¡ trá»‹ gÃ³i Ä‘Äƒng kÃ½ |
| 🔄 **Dá»‹ch chuyá»ƒn Ä‘á»‹nh dáº¡ng** | OpenAI →” Claude →” Gemini liá»n máº¡ch | Hoáº¡t Ä‘á»™ng vá»›i má»i cÃ´ng cá»¥ CLI |
| 👥 **Há»— trá»£ Äa tÃ i khoáº£n** | Nhiá»u tÃ i khoáº£n cho má»—i nhÃ  cung cáº¥p | CÃ¢n báº±ng táº£i + dá»± phÃ²ng |
| 🔄 **Tá»± Ä‘á»™ng lÃ m má»›i Token** | Token OAuth tá»± Ä‘á»™ng lÃ m má»›i | KhÃ´ng cáº§n Ä‘Äƒng nháº­p láº¡i thá»§ cÃ´ng |
| 🎨 **Combo tÃ¹y chá»‰nh** | Táº¡o tá»• há»£p mÃ´ hÃ¬nh khÃ´ng giá»›i háº¡n | Äiá»u chá»‰nh dá»± phÃ²ng theo nhu cáº§u |
| 📝 **Ghi log Request** | Cháº¿ Ä‘á»™ gá»¡ lá»—i vá»›i log request/response Ä‘áº§y Ä‘á»§ | Dá»… dÃ ng kháº¯c phá»¥c sá»± cá»‘ |
| 💾 **Äá»“ng bá»™ Ä‘Ã¡m mÃ¢y** | Äá»“ng bá»™ cáº¥u hÃ¬nh giá»¯a cÃ¡c thiáº¿t bá»‹ | CÃ i Ä‘áº·t giá»‘ng nhau á»Ÿ má»i nÆ¡i |
| 📝Š **PhÃ¢n tÃ­ch sá»­ dá»¥ng** | Theo dÃµi token, chi phÃ­, xu hÆ°á»›ng theo thá»i gian | Tá»‘i Æ°u hÃ³a chi tiÃªu |
| 🌐 **Triá»ƒn khai á»Ÿ báº¥t cá»© Ä‘Ã¢u** | Localhost, VPS, Docker, Cloudflare Workers | TÃ¹y chá»n triá»ƒn khai linh hoáº¡t |

<details>
<summary><b>📖 Chi tiáº¿t tÃ­nh nÄƒng</b></summary>

### ðŸŽ¯ Smart 3-Tier Fallback

Táº¡o combo vá»›i tÃ­nh nÄƒng phÃ²ng tá»± Ä‘á»™ng:

```
Combo: "my-coding-stack"
  1. cc/claude-opus-4-6        (gÃ³i Ä‘Äƒng kÃ½ cá»§a báº¡n)
  2. glm/glm-4.7               (backup giÃ¡ ráº», $0.6/1M)
  3. if/kimi-k2-thinking       (dá»± phÃ²ng miá»…n phÃ­)

→’ Tá»± Ä‘á»™ng chuyá»ƒn Ä‘á»•i khi háº¿t háº¡n má»©c hoáº·c xáº£y ra lá»—i
```

### 📝Š Theo dÃµi háº¡n má»©c thá»i gian thá»±c

- Má»©c tiÃªu thá»¥ token cho má»—i nhÃ  cung cáº¥p
- Äáº¿m ngÆ°á»£c reset (5 giá», hÃ ng ngÃ y, hÃ ng tuáº§n)
- Æ¯á»›c tÃ­nh chi phÃ­ cho cÃ¡c táº§ng tráº£ phÃ­
- BÃ¡o cÃ¡o chi tiÃªu hÃ ng thÃ¡ng

### 🔄 Dá»‹ch chuyá»ƒn Ä‘á»‹nh dáº¡ng

Dá»‹ch chuyá»ƒn liá»n máº¡ch giá»¯a cÃ¡c Ä‘á»‹nh dáº¡ng:
- **OpenAI** →” **Claude** →” **Gemini** →” **OpenAI Responses**
- CÃ´ng cá»¥ CLI cá»§a báº¡n gá»­i Ä‘á»‹nh dáº¡ng OpenAI →’ Rebana Router dá»‹ch chuyá»ƒn →’ NhÃ  cung cáº¥p nháº­n Ä‘á»‹nh dáº¡ng gá»‘c
- Hoáº¡t Ä‘á»™ng vá»›i má»i cÃ´ng cá»¥ há»— trá»£ endpoint OpenAI tÃ¹y chá»‰nh

### 👥 Há»— trá»£ Äa tÃ i khoáº£n

- ThÃªm nhiá»u tÃ i khoáº£n cho má»—i nhÃ  cung cáº¥p
- Äá»‹nh tuyáº¿n vÃ²ng trÃ²n (round-robin) hoáº·c dá»±a trÃªn Æ°u tiÃªn tá»± Ä‘á»™ng
- Dá»± phÃ²ng sang tÃ i khoáº£n tiáº¿p theo khi má»™t tÃ i khoáº£n cháº¡m háº¡n má»©c

### 🔄 Tá»± Ä‘á»™ng lÃ m má»›i Token

- Token OAuth tá»± Ä‘á»™ng lÃ m má»›i trÆ°á»›c khi háº¿t háº¡n
- KhÃ´ng cáº§n xÃ¡c thá»±c láº¡i thá»§ cÃ´ng
- Tráº£i nghiá»‡m liá»n máº¡ch trÃªn má»i nhÃ  cung cáº¥p

### 🎨 Combo tÃ¹y chá»‰nh

- Táº¡o tá»• há»£p mÃ´ hÃ¬nh khÃ´ng háº¡n
- Káº¿t há»£p cÃ¡c táº§ng gÃ³i Ä‘Äƒng kÃ½, giÃ¡ ráº» vÃ  miá»…n phÃ­
- Äáº·t tÃªn combo Ä‘á»ƒ dá»… truy cáº­p
- Chia sáº» combo giá»¯a cÃ¡c thiáº¿t bá»‹ vá»›i Äá»“ng bá»™ Ä‘Ã¡m mÃ¢y

### 📝 Ghi log Request

- Báº­t cháº¿ Ä‘á»™ gá»¡ lá»—i Ä‘á»ƒ xem log request/response Ä‘áº§y Ä‘á»§
- Theo dÃµi cÃ¡c lá»‡nh gá»i API, tiÃªu Ä‘á» vÃ  payload
- Kháº¯c phá»¥c sá»± cá»‘ tÃ­ch há»£p
- Xuáº¥t log Ä‘á»ƒ phÃ¢n tÃ­ch

### 💾 Äá»“ng bá»™ Ä‘Ã¡m mÃ¢y

- Äá»“ng bá»™ nhÃ  cung cáº¥p, combo vÃ  c Ä‘áº·t giá»¯a cÃ¡c thiáº¿t bá»‹
- Tá»± Ä‘á»™ng Ä‘á»“ng bá»™ ná»n
- LÆ°u trá»¯ Ä‘Æ°á»£c mÃ£ hÃ³a an toÃ n
- Truy cáº­p cÃ i Ä‘áº·t cá»§a báº¡n tá»« báº¥t cá»© Ä‘Ã¢u

#### Ghi chÃº Runtime ÄÃ¡m mÃ¢y

- Æ¯u tiÃªn biáº¿n Ä‘Ã¡m mÃ¢y phÃ­a mÃ¡y chá»§ trong mÃ´i trÆ°á»ng production:
  - `BASE_URL` (URL callback ná»™i bá»™ Ä‘Æ°á»£c sá»­ dá»¥ng bá»Ÿi bá»™ láº­p lá»‹ch Ä‘á»“ng bá»™)
  - `CLOUD_URL` (cÆ¡ sá»Ÿ endpoint Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y)
- `NEXT_PUBLIC_BASE_URL` vÃ  `NEXT_PUBLIC_CLOUD_URL` váº«n Ä‘Æ°á»£c há»— trá»£ Ä‘á»ƒ thÃ­ch/UI, nhÆ°ng runtime mÃ¡y chá»§ hiá»‡n Æ°u tiÃªn `BASE_URL`/`CLOUD_URL`.
- CÃ¡c yÃªu cáº§u Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y hiá»‡n sá»­ dá»¥ng thá»i gian chá» + hÃ nh vi fail-fast Ä‘á»ƒ trÃ¡nh treo UI khi DNS/máº¡ng Ä‘Ã¡m mÃ¢y khÃ´ng kháº£ dá»¥ng.

### 📝Š PhÃ¢n tÃ­ch sá»­ dá»¥ng

- Theo dÃµi má»©c sá»­ dá»¥ng token theo nhÃ  cung cáº¥p vÃ  mÃ´ hÃ¬nh
- Æ¯á»›c tÃ­nh chi phÃ­ vÃ  xu hÆ°á»›ng chi tiÃªu
- BÃ¡o cÃ¡o vÃ  thÃ´ng tin chi tiáº¿t hÃ ng thÃ¡ng
- Tá»‘i Æ°u hÃ³a chi tiÃªu AI cá»§a báº¡n

> **💡AN TRá»ŒNG - Hiá»ƒu vá» Chi phÃ­ trÃªn Báº£ng Ä‘iá»u khiá»ƒn:**
> 
> "Chi phÃ­" hiá»ƒn thá»‹ trong PhÃ¢n tÃ­ch sá»­ dá»¥ng lÃ  **chá»‰ Ä‘á»ƒ theo dÃµi vÃ  so sÃ¡nh**. 
> Báº£n thÃ¢n Rebana Router **khÃ´ng bao giá» thu phÃ­** báº¡n báº¥t cá»© thá»© gÃ¬. Báº¡n chá»‰ tráº£ tiá»n trá»±c tiáº¿p cho cÃ¡c nhÃ  cung cáº¥p (náº¿u sá»­ dá»¥ng dá»‹ch vá»¥ tráº£ phÃ­).
> 
> **VÃ­ dá»¥:** Náº¿u báº£ng Ä‘iá»u khiá»ƒn cá»§a báº¡n hiá»ƒn thá»‹ "tá»•ng chi phÃ­ $290" trong khi sá»­ dá»¥ng cÃ¡c mÃ´ hÃ¬nhFlow, Ä‘iá»u nÃ y Ä‘áº¡i diá»‡n cho 
> sá»‘ tiá»n báº¡n sáº½ pháº£i tráº£ náº¿u sá»­ dá»¥ng API tráº£ phÃ­ trá»±c tiáº¿p. Chi phÃ­ thá»±c táº¿ cá»§a báº¡n = **$0** (iFlow miá»…n phÃ­ khÃ´ng giá»›i háº¡n).
> 
> HÃ£y coi nÃ³ nhÆ° má»™t "trÃ¬nh theo dÃµi tiáº¿t kiá»‡m" cho tháº¥y báº¡n Ä‘ang tiáº¿t kiá»‡m Ä‘Æ°á»£c bao nhiÃªu báº±ng cÃ¡ch sá»­ dá»¥ng cÃ¡c mÃ´ hÃ¬nh miá»…n phÃ­ hoáº·c 
> Ä‘á»‹nh tuyáº¿n qua Rebana Router!

### 🌐 Triá»ƒn khai á»Ÿ báº¥t cá»© Ä‘Ã¢u

- 💻 **Localhost** - Máº·c Ä‘á»‹nh, hoáº¡t Ä‘á»™ng ngoáº¡i tuyáº¿n
 ❌˜ï¸ **VPS/Cloud** - Chia sáº» giá»¯a cÃ¡c thiáº¿t bá»‹
- ðŸ³ **Docker** - Triá»ƒn khai báº±ng má»™t lá»‡nh
- 🚀 **Cloudflare Workers** - Máº¡ng edge toÃ n cáº§u

</details>

---

## 💰 Tá»•ng quan vá» giÃ¡

| Háº¡ng má»¥c | NhÃ  cung cáº¥p | Chi phÃ­ | Reset Háº¡n má»©c | Tá»‘t nháº¥t cho |
|------|----------|------|-------------|----------|
| **💳 GÃ“I ÄÄ‚NG KÃ** | Claude Code (Pro) | $20/thÃ¡ng | 5h + hÃ ng tuáº§n | ÄÃ£ Ä‘Äƒng kÃ½ rá»“i |
| | Codex (Plus/Pro) | $20-200/thÃ¡ng | 5h + hÃ ng tuáº§n | NgÆ°á»i dÃ¹ng OpenAI |
| | Gemini CLI | **MIá»„N PHÃ** | 180K/thÃ¡ng + 1K/ngÃ y | Táº¥t cáº£ má»i ngÆ°á»i! |
| | GitHub Copilot | $10-19/thÃ¡ng | HÃ ng thÃ¡ng | NgÆ°á»i dÃ¹ng GitHub |
| **💰 GIÃ Ráºº** | GLM-4.7 | $0.6/1M | 10AM hÃ ng ngÃ y | Backup ngÃ¢n sÃ¡ch |
| | MiniMax M21 | $0.2/1M | 5 giá» luÃ¢n phiÃªn | Lá»±a chá»n ráº» nháº¥t |
| | Kimi K2 | $9/thÃ¡ng cá»‘ Ä‘á»‹nh | 10M token/thÃ¡ng | Chi phÃ­ dá»± Ä‘oÃ¡n Ä‘Æ°á»£c |
| **ðŸ†“ MIá»„N PHÃ** | iFlow | $0 | KhÃ´ng giá»›i háº¡n | 8 mÃ´ hÃ¬nh miá»…n phÃ­ |
| | Qwen | $0 | KhÃ´ng giá»›i háº¡n | 3 mÃ´ hÃ¬nh miá»…n phÃ­ |
| | Kiro | $0 | KhÃ´ng giá»›i háº¡n | Claude miá»…n phÃ­ |

**💡 Máº¹o ChuyÃªn nghiá»‡p:** Báº¯t vá»›i combo Gemini CLI (180K miá»…n phÃ­/thÃ¡ng) + iFlow (khÃ´ng giá»›i háº¡n miá»…n phÃ­) = chi phÃ­ $0!

---

### 📝Š Hiá»ƒu vá» Chi phÃ­ & Thanh toÃ¡n cá»§a Rebana Router

**Thá»±c táº¿ Thanh toÃ¡n Rebana Router:**

✅ **Pháº§n má»m Rebana Router = MIá»„N PHÃ mÃ£i mÃ£i** (mÃ£ nguá»“n má»Ÿ, khÃ´ng bao giá» thu phÃ­)  
✅ **"Chi phÃ­" trÃªn báº£ng Ä‘iá»u khiá»ƒn = Chá»‰ Ä‘á»ƒ Hiá»ƒn thá»‹/Theo dÃµi** (khÃ´ng pháº£i hÃ³a Ä‘Æ¡n thá»±c táº¿)  
 **Báº¡n tráº£ tiá»n trá»±c tiáº¿p cho nhÃ  cung cáº¥p** (gÃ³i Ä‘Äƒng kÃ½ hoáº·c phÃ­ API)  
✅ **NhÃ  cung cáº¥p MIá»„N PHÃ váº«n MIá»„N PHÃ** (iFlow, Kiro, Qwen = $0 khÃ´ng giá»›i háº¡n)  
❌Œ **Rebana Router khÃ´ng bao giá» gá»­i hÃ³a Ä‘Æ¡n** hoáº·c tÃ­nh phÃ­ tháº» cá»§a báº¡n

**CÃ¡ch Hoáº¡t Ä‘á»™ng cá»§a Hiá»ƒn thá»‹ Chi phÃ­:**

Báº£ng Ä‘iá»u khiá»ƒn hiá»ƒn thá»‹ **chi phÃ­ Æ°á»›c tÃ­nh** nhÆ° thá»ƒ báº¡n Ä‘ang sá»­ dá»¥ng API tráº£ phÃ­ trá»±c tiáº¿p. ÄÃ¢y **khÃ´ng pháº£i lÃ  thanh toÃ¡n** - Ä‘Ã³ lÃ  cÃ´ng cá»¥ so sÃ¡nh Ä‘á»ƒ cho tháº¥y má»©c tiáº¿t kiá»‡m cá»§a báº¡n.

**Ká»‹ch báº£n VÃ­ dá»¥:**
```
Hiá»ƒn thá»‹ trÃªn Báº£ng Ä‘iá»u khiá»ƒn:
• Tá»•ng sá»‘ Request: 1,662
• Tá»•ng sá»‘ Token: 47M
• Chi phÃ­ Hiá»ƒn thá»‹: $290

Kiá»ƒm tra Thá»±c táº¿:
• NhÃ  cung cáº¥p: iFlow (MIá»„N PHÃ khÃ´ng giá»›i háº¡n)
• Thanh toÃ¡n Thá»±c táº¿: $0.00
• Ã nghÄ©a cá»§a $290: Sá»‘ tiá»n báº¡n TIáº¾T KIá»†M Ä‘Æ°á»£c báº±ng cÃ¡ch sá»­ dá»¥ng mÃ´ hÃ¬nh miá»…n phÃ­!
```

**Quy táº¯c Thanh toÃ¡n:**
- **NhÃ  cung cáº¥p gÃ³i Ä‘Äƒng kÃ½** (Claude Code, Codex): Tráº£ tiá»n trá»±c tiáº¿p cho há» qua website cá»§a há»
- **NhÃ  cung cáº¥p giÃ¡ ráº»** (GLM, MiniMax): Tráº£ tiá»n trá»±c tiáº¿p cho há», Rebana Router chá»‰ Ä‘á»‹nh tuyáº¿n
- **NhÃ  cung cáº¥p MIá»„N PHÃ** (iFlow, Kiro, Qwen): Thá»±c sá»± miá»…n phÃ­ mÃ£i mÃ£i, khÃ´ng cÃ³ phÃ­ áº©n
- **9**: KhÃ´ng bao giá» thu phÃ­ báº¥t cá»© thá»© gÃ¬, ever

---

## ðŸŽ¯ TrÆ°á»ng há»£p sá»­ dá»¥ng

### TrÆ°á»ng há»£p 1: "TÃ´i cÃ³ gÃ³i Ä‘Äƒng kÃ½ Claude Pro"

**Váº¥n Ä‘á»:** Háº¡n má»©c háº¿t háº¡n khÃ´ng dÃ¹ng, giá»›i háº¡n tá»‘c Ä‘á»™ khi code náº·ng

**Giáº£i phÃ¡p:**
```
Combo: "maximize-claude"
  1. cc/claude-opus-4-6        (sá»­ dá»¥ng Ä‘áº§y Ä‘á»§ gÃ³i Ä‘Äƒng kÃ½)
  2. glm/glm-4.7               (backup giÃ¡ ráº» khi háº¿t háº¡n má»©c  3. if/kimi-k2-thinking       (dá»± phÃ²ng kháº©n cáº¥p miá»…n phÃ­)

Chi phÃ­ hÃ ng thÃ¡ng: $20 (gÃ³i Ä‘Äƒng kÃ½) + ~$5 (backup) = $25 tá»•ng cá»™ng
so vá»›i $20 + cháº¡m giá»›i háº¡n = sá»± tháº¥t vá»ng
```

### TrÆ°á»ng há»£p 2: "TÃ´i muá»‘n chi phÃ­ báº±ng khÃ´ng"

**Váº¥n Ä‘á»:** KhÃ´ng Ä‘á»§ kháº£ nÄƒng tráº£ gÃ³i Ä‘Äƒng kÃ½, cáº§n code AI Ä‘Ã¡ng tin cáº­y

**Giáº£i phÃ¡p:**
```
Combo: "free-forever"
  1. gc/gini-3-flash         (180K miá»…n phÃ­/thÃ¡ng)
  2. if/kimi-k2-thinking       (khÃ´ng giá»›i háº¡n miá»…n phÃ­)
  3. qw/qwen3-coder-plus       (khÃ´ng giá»›i háº¡n miá»…n phÃ­)

Chi phÃ­ hÃ ng thÃ¡ng: $0
Cháº¥t lÆ°á»£ng: CÃ¡c mÃ´ hÃ¬nh sáºµn sÃ ng cho production
```

### TrÆ°á»ng há»£p 3: "TÃ´i cáº§n code 24/7, khÃ´ng giÃ¡n Ä‘oáº¡n"

**Váº¥n Ä‘á»:** Deadline, khÃ´ng thá»ƒ Ä‘á»ƒ thá»i gian cháº¿t

**Giáº£i phÃ¡p:**
```
Combo: "always-on"
  1. cc/claude-opus-4-6        (cháº¥t lÆ°á»£ng tá»‘t nháº¥t)
  2. cx/gpt-5.2-codex          (gÃ³i Ä‘Äƒng kÃ½ thá»© hai)
  3. glm/glm-4.7               (giÃ¡ ráº», reset hÃ ng ngÃ y)
  4. minimax/MiniMax-M2.1      (ráº» nháº¥t, reset 5h)
  5. if/kimi-k2-thinking       (miá»…n phÃ­ khÃ´ng giá»›i háº¡n)

Káº¿t quáº£: 5 lá»›p dá»± phÃ²ng = thá»i gian cháº¿t báº±ng khÃ´ng
Chi phÃ­ thÃ¡ng: $20-200 (gÃ³i Ä‘Äƒng kÃ½) + $10-20 (backup)
```

### TrÆ°á»ng há»£p 4: "TÃ´i muá»‘n AI MIá»„N PHÃ trong OpenClaw"

**Váº¥n Ä‘á»:** Cáº§n trá»£ lÃ½ AI trong cÃ¡c á»©ng dá»¥ng nháº¯n tin (WhatsApp, Telegram, Slack...), hoÃ n toÃ n miá»…n phÃ­

**Giáº£i phÃ¡p:**
```
Combo: "openclaw-free"
  1. if/glm-4.7                (khÃ´ng giá»›i háº¡n miá»…n phÃ­)
  2. if/minimax-m2.1           (khÃ´ng giá»›i háº¡n phÃ­)
  3. if/kimi-k2-thinking       (khÃ´ng giá»›i háº¡n miá»…n phÃ­)

Chi phÃ­ hÃ ng thÃ¡ng: $0
Truy cáº­p qua: WhatsApp, Telegram, Slack, Discord, iMessage, Signal...
```

---

## ❌“ CÃ¡c cÃ¢u há»i thÆ°á»ng gáº·p

<details>
<summary><b>📝Š Táº¡i sao báº£ng Ä‘iá»u khiá»ƒn cá»§a tÃ´i hiá»ƒn thá»‹ chi phÃ­ cao?</b></summary>

Báº£ng Ä‘iá»u khiá»ƒn theo dÃµi má»©c sá»­ dá»¥ng token cá»§a báº¡n vÃ  hiá»ƒn thá»‹ **chi phÃ­ Æ°á»›c tÃ­nh** nhÆ° thá»ƒ báº¡n Ä‘ang sá»­ dá»¥ng API tráº£ phÃ­ trá»±c tiáº¿p. ÄÃ¢ykhÃ´ng pháº£i lÃ  thanh toÃ¡n thá»±c táº¿** - Ä‘Ã³ lÃ  tÃ i liá»‡u tham kháº£o Ä‘á»ƒ cho tháº¥y báº¡n Ä‘ang tiáº¿t kiá»‡m Ä‘Æ°á»£c bao nhiÃªu báº±ng cÃ¡ch sá»­ dá»¥ng cÃ¡c mÃ´ hÃ¬nh miá»…n phÃ­ hoáº·c gÃ³i Ä‘Äƒng kÃ½ hiá»‡n cÃ³ thÃ´ng qua Rebana Router.

**VÃ­ dá»¥:**
- **Báº£ng Ä‘iá»u khiá»ƒn hiá»ƒn thá»‹:** "Tá»•ng chi phÃ­ $290"
- **Thá»±c táº¿:** Báº¡n Ä‘ang sá»­ dá»¥ng iFlow (MIá»„N PHÃ khÃ´ng giá»›i háº¡n)
- **Chi phÃ­ thá»±c táº¿ cá»§a báº¡n:** **$0.00**
- **Ã nghÄ©a cá»§a $290:** Sá»‘ báº¡n **tiáº¿t kiá»‡m** Ä‘Æ°á»£c báº±ng cÃ¡ch sá»­ dá»¥ng cÃ¡c mÃ´ hÃ¬nh miá»…n phÃ­ thay vÃ¬ API tráº£ phÃ­!

MÃ n hÃ¬nh chi phÃ­ lÃ  má»™t "trÃ¬nh theo dÃµi tiáº¿t kiá»‡m" Ä‘á»ƒ giÃºp báº¡n hiá»ƒu cÃ¡c máº«u sá»­ dá»¥ng vÃ  cÆ¡ há»™i tá»‘i Æ°u hÃ³a.

</details>

<details>
<summary><b>💳 TÃ´i cÃ³ bá»‹ Rebana Router tÃ­nh phÃ­ khÃ´ng?</b></summary>

**KhÃ´ng.** Rebana Router lÃ  pháº§n má»m miá»…n phÃ­, mÃ£ nguá»“n má»Ÿ cháº¡y trÃªn mÃ¡y tÃ­nh cá»§a chÃ­nh báº¡n. NÃ³ khÃ´ng bao giá» tÃ­nh phÃ­ báº¡n báº¥t cá»© thá»© gÃ¬.

**Báº¡n chá»‰ tráº£ tiá»n:**
- ✅ **NhÃ  cung cáº¥p gÃ³i Ä‘Äƒng kÃ½** (Claude Code $20/thÃ¡ng, Codex $20-200/thÃ¡ng) →’ Tráº£ tiá»n trá»±c tiáº¿p cho há» trÃªn website cá»§a há»
- ✅ **NhÃ  cung cáº¥p giÃ¡ ráº»** (GLM, MiniMax) →’ Tráº£ tiá»n trá»±c tiáº¿p cho há», Rebana Router chá»‰ Ä‘á»‹nh tuyáº¿n yÃªu cáº§u cá»§a báº¡n
- ❌Œ **Báº£n thÃ¢n Rebana Router** →’ **KhÃ´ng bao giá» tÃ­nh phÃ­ báº¥t cá»© thá»© gÃ¬, ever**

Rebana Router lÃ  má»™t proxy/router cá»¥c bá»™. NÃ³ khÃ´ng cÃ³áº» tÃ­n dá»¥ng cá»§a báº¡n, khÃ´ng thá»ƒ gá»­i hÃ³a Ä‘Æ¡n vÃ  khÃ´ng cÃ³ há»‡ thá»‘ng thanh toÃ¡n. ÄÃ³ lÃ  pháº§n má»m hoÃ n toÃ n miá»…n phÃ­.

</details>

<details>
<summary><b>ðŸ†“ CÃ¡c nhÃ  cung cáº¥p MIá»„N PHÃ cÃ³ thá»±c sá»± khÃ´ng giá»›i háº¡n khÃ´ng?</b></summary>

**CÃ³!** CÃ¡c nhÃ  cung cáº¥p Ä‘Æ°á»£c Ä‘Ã¡nh dáº¥u lÃ  MIá»„N PHÃ (iFlow, Kiro, Qwen) thá»±c sá»± khÃ´ng giá»›i háº¡n vá»›i **khÃ´ng cÃ³ phÃ­ áº©n**. 

ÄÃ¢y lÃ  cÃ¡c dá»‹ch vá»¥ miá»…n phÃ­ Ä‘Æ°á»£c cung cáº¥p bá»Ÿi cÃ¡c cÃ´ng ty tÆ°Æ¡ng á»©ng:
- **iFlow**: Truy cáº­p miá»…n phÃ­ khÃ´ng giá»›i háº¡n vÃ o hÆ¡n 8 mÃ´ hÃ¬nh qua OAuth
- **Kiro**: CÃ¡c mÃ´ hÃ¬nh Claude miá»…n phÃ­ khÃ´ng giá»›i háº¡n qua AWS Builder ID  
- **Qwen**: Truy cáº­p miá»…n phÃ­ khÃ´ng giá»›i háº¡n vÃ o cÃ¡c mÃ´ hÃ¬nh Qwen qua xÃ¡c thá»±c thiáº¿t bá»‹

Rebana Router chá»‰ Ä‘á»‹nh tuyáº¿n yÃªu cáº§u cá»§a báº¡n Ä‘áº¿n há» - khÃ´ng cÃ³ "cáº¡m báº«y" hay thanh toÃ¡n trong tÆ°Æ¡ng lai. ÄÃ³ lÃ  cÃ¡c dá»‹ch vá»¥ thá»±c sá»± miá»…n phÃ­, vÃ  Rebana Router giÃºp chÃºng dá»… sá»­ dá»¥ng vá»›i há»— trá»£ dá»± phÃ²ng.

**LÆ°u Ã½:** sá»‘ nhÃ  cung cáº¥p gÃ³i Ä‘Äƒng kÃ½ (Antigravity, GitHub Copilot) cÃ³ thá»ƒ cÃ³ cÃ¡c khoáº£ng thá»i gian dÃ¹ng thá»­ miá»…n phÃ­ cÃ³ thá»ƒ trá»Ÿ thÃ nh tráº£ phÃ­ sau nÃ y, nhÆ°ng Ä‘iá»u nÃ y sáº½ Ä‘Æ°á»£c cÃ¡c nhÃ  cung cáº¥p Ä‘Ã³ thÃ´ng bÃ¡o rÃµ rÃ ng, khÃ´ng pháº£i Rebana Router.

</details>

<details>
<summary><b>💰 LÃ m tháº¿ nÃ o Ä‘á»ƒ giáº£m thiá»ƒu chi phÃ­ AI thá»±c táº¿ cá»§a tÃ´i?</b></summary>

**Chiáº¿n lÆ°á»£c Æ¯u tiÃªn Miá»…n phÃ­:**

1. **Báº¯t Ä‘áº§u vá»›i combo 100% miá»…n phÃ­:**
   ```
   1. gc/gemini-3-flash (180K/thÃ¡ng miá»…n phÃ­ tá»« Google)
   2. if/kimi-k2-thinking (khÃ´ng giá»›i háº¡n miá»…n phÃ­ tá»« iFlow)
   3. qw/qwen3-coder-plus (khÃ´ng giá»›i háº¡n miá»…n phÃ­ tá»« Qwen)
   ```
   **Chi phÃ­: $0/thÃ¡ng**

2. **ThÃªm backup giÃ¡ ráº»** chá»‰ khi báº¡n cáº§n:
   ```
   4. glm/glm-4.7 ($0.6/1M token)
   ```
   **Chi phÃ­ bá»• sung:** Chá»‰ tráº£ tiá»n cho nhá»¯ng gÃ¬ báº¡n sá»± sá»­ dá»¥ng

3. **Sá»­ dá»¥ng nhÃ  cung cáº¥p gÃ³i Ä‘Äƒng kÃ½ cuá»‘i cÃ¹ng:**
   - Chá»‰ khi báº¡n Ä‘Ã£ cÃ³ chÃºng
   - Rebana Router giÃºp tá»‘i Ä‘a hÃ³a giÃ¡ trá»‹ cá»§a chÃºng thÃ´ng qua theo dÃµi háº¡n má»©c

**Káº¿t quáº£:** Háº§u háº¿t ngÆ°á»i dÃ¹ng cÃ³ thá»ƒ hoáº¡t Ä‘á»™ng á»Ÿ má»©c $0/thÃ¡ng chá»‰ sá»­ dá»¥ng cÃ¡c táº§ng miá»…n phÃ­!

</details>

<details>
<summary><b>📈 Äiá»u gÃ¬ xáº£y ra náº¿u má»©c sá»­ dá»¥ng cá»§a tÃ´i Ä‘á»™t ngá»™t tÄƒng vá»t?</b></summary>

CÆ¡ cháº¿ dá»± phÃ²ng thÃ´ng minh cá»§a Rebana Router ngÄƒn cháº·n cÃ¡c khoáº£n phÃ­ báº¥t ngá»:

**Ká»‹ch báº£n:** Báº¡n Ä‘ang trong giai Ä‘oáº¡n code nÆ°á»›c rÃºt vÃ  vÆ°á»£t qua cÃ¡c háº¡n má»©c

**KhÃ´ng cÃ³ Rebana Router:**
- ❌Œ Cháº¡m giá»›i háº¡n tá»‘c Ä‘á»™ →’ CÃ´ng viá»‡c dá»«ng láº¡i →’ Tháº¥t vá»ng
- ❌Œ Hoáº·c: VÃ´ tÃ¬nh tÃ­ch lÅ©y hÃ³a Ä‘Æ¡n API khá»•ng lá»“

**CÃ³ Rebana Router:**
- ✅ GÃ³i Ä‘Äƒng kÃ½ cháº¡m giá»›i háº¡n →’ Tá»± Ä‘á»™ng dá»± phÃ²ng sang táº§ng giÃ¡ ráº»
- ✅ Táº§ng giÃ¡ ráº» trá»Ÿ nÃªn Ä‘áº¯t Ä‘á» →’ Tá»± Ä‘á»™ng dá»± phÃ²ng sang táº§ng miá»…n phÃ­
- ✅ KhÃ´ng bao giá» ngá»«ng code →’ Chi phÃ­ dá»± Ä‘oÃ¡n Ä‘Æ°á»£c

**Báº¡n náº¯m quyá»n kiá»ƒm soÃ¡t:** Äáº·t giá»›i háº¡n chi tiÃªu cho má»—i nhÃ  cung cáº¥p trong báº£ng Ä‘iá»u khiá»ƒn, vÃ  Rebana Router sáº½ tuÃ¢n thá»§ chÃºng.

</details>

---

## 📖 HÆ°á»›ng dáº«n thiáº¿t láº­p

<details>
<summary><b>🔐 CÃ¡c nhÃ  cung cáº¥p GÃ³i Ä‘Äƒng kÃ½ (Tá»‘i Ä‘a hÃ³a GiÃ¡ trá»‹)</b></summary>

### Claude Code (Pro/Max)

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Providers →’ Káº¿t ná»‘i Claude Code
→’ ÄÄƒng nháº­p OAuth →’ Tá»± Ä‘á»™ng lÃ m má»›i token
→’ Theo dÃµi háº¡n má»©c 5 giá» + hÃ ng tuáº§n

CÃ¡c mÃ´ hÃ¬nh:
  cc/claude-opus-4-6
  cc/claude-sonnet-4-5-20250929
  cc/claude-haiku-4-5-20251001
```

**Máº¹o ChuyÃªn nghiá»‡p:** Sá»­ dá»¥ng Opus cho cÃ¡c tÃ¡c vá»¥ phá»©c táº¡p, Sonnet cho tá»‘c Ä‘á»™. Rebana Router theo dÃµi háº¡n má»©c cho má»—i mÃ´ hÃ¬nh!

### OpenAI Codex (Plus/Pro)

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Providers →’ Káº¿t ná»‘i Codex
→’ ÄÄƒng nháº­p OAuth (cá»•ng 1455)
→’ Reset 5 giá» + hÃ ng tuáº§n

CÃ¡c mÃ´ hÃ¬nh:
  cx/gpt-5.2-codex
  cx/gpt-5.1-codex-max
```

### Gemini CLI (MIá»„N PHÃ 180K/thÃ¡ng!)

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Providers →’ Káº¿t ná»‘i Gemini CLI
→’ Google OAuth
→’ 180K hoÃ n thÃ nh/thÃ¡ng + 1K/ngÃ y

CÃ¡c hÃ¬nh:
  gc/gemini-3-flash-preview
  gc/gemini-2.5-pro
```

**GiÃ¡ trá»‹ tá»‘t nháº¥t:** Táº§ng miá»…n phÃ­ khá»•ng lá»“! Sá»­ dá»¥ng cÃ¡i nÃ y trÆ°á»›c cÃ¡c táº§ng tráº£ phÃ­.

### GitHub Copilot

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Providers →’ Káº¿t ná»‘i GitHub
→’ OAuth qua GitHub
→’ Reset hÃ ng thÃ¡ng (ngÃ y 1 cá»§a thÃ¡ng)

CÃ¡c mÃ´ hÃ¬nh:
  gh/gpt-5
  gh/claude-4.5-sonnet
  gh/gemini-3-pro
`

</details>

<details>
<summary><b>💰 CÃ¡c nhÃ  cung cáº¥p GiÃ¡ ráº» (Backup)</b></summary>

### GLM-4.7 (Reset hÃ ng ngÃ y, $0.6/1M)

1. ÄÄƒng kÃ½: [Zhipu AI](https://open.bigmodel.cn/)
2. Láº¥y API key tá»« Coding Plan
3. Báº£ng Ä‘iá»u khiá»ƒn →’ ThÃªm API Key:
   - NhÃ  cung cáº¥p: `glm`
   - API Key: `your-key`

**Sá»­ dá»¥ng:** `glm/glm-4.7`

**Máº¹o Ch nghiá»‡p:** Coding Plan cung cáº¥p háº¡n má»©c gáº¥p 3 láº§n vá»›i chi phÃ­ 1/7! Reset hÃ ng ngÃ y lÃºc 10:00 AM.

### MiniMax M2.1 (Reset 5h, $0.20/1M)

1. ÄÄƒng kÃ½: [MiniMax](https://www.minimax.io/)
2. Láº¥y API key
3. Báº£ng Ä‘iá»u khiá»ƒn →’ ThÃªm API Key

**Sá»­ dá»¥ng:** `minimax/MiniMax-M2.1`

**Máº¹o ChuyÃªn nghiá»‡p:** Lá»±a chá»n ráº» nháº¥t cho ngá»¯ cáº£nh dÃ i (1M)!

### Kimi K2 ($9/thÃ¡ng cá»‘ Ä‘á»‹nh)

1. ÄÄƒng kÃ½: [Moonshot AI](https://platform.moonshot.ai/)
2. Láº¥y API key
3. Báº£ng Ä‘iá»u khiá»ƒn →’ ThÃªm API Key

**Sá»­ dá»¥ng:** `kimi/kimi-latest`

**Máº¹o ChuyÃªn nghiá»‡p:** Cá»‘ Ä‘á»‹nh $9/thÃ¡ng cho 10M token = chi phÃ­ thá»±c táº¿ $0.90/1M!

</details>

<details>
<summary><b>ðŸ†“ CÃ¡c nhÃ  cung cáº¥p MIá»„N PHÃ (Dá»± phÃ²ng Kháº©n cáº¥pb></summary>

### iFlow (8 mÃ´ hÃ¬nh MIá»„N PHÃ)

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Káº¿t ná»‘i iFlow
→’ ÄÄƒng nháº­p OAuth iFlow
→’ Sá»­ dá»¥ng khÃ´ng giá»›i háº¡n

CÃ¡c mÃ´ hÃ¬nh:
  if/kimi-k2-thinking
  if/qwen3-coder-plus
  if/glm-4.7
  if/minimax-m2
  if/deepseek-r1
```

### Qwen (3 mÃ´ hÃ¬nh MIá»„N PHÃ)

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Káº¿t ná»‘i Qwen
 á»¦y quyá»n mÃ£ thiáº¿t bá»‹
→’ Sá»­ dá»¥ng khÃ´ng giá»›i háº¡n

CÃ¡c mÃ´ hÃ¬nh:
  qw/qwen3-coder-plus
  qw/qwen3-coder-flash
```

### Kiro (Claude MIá»„N PHÃ)

```bash
Báº£ng Ä‘iá»u khiá»ƒn →’ Káº¿t ná»‘i Kiro
→’ AWS Builder ID hoáº·c Google/GitHub
→’ Sá»­ dá»¥ng khÃ´ng giá»›i háº¡n

CÃ¡c mÃ´ hÃ¬nh:
  kr/claude-sonnet-4.5
  kr/claude-haiku-4.5
```

</details>

<details>
<summary><b>🎨 Táº¡o Combo</b></summary>

### VÃ­ dá»¥ 1: Tá»‘i Ä‘a hÃ³a GÃ³i Ä‘Äƒng kÃ½ →’ Backup GiÃ¡ ráº»

```
Báº£ng Ä‘iá»u khiá»ƒn →’ Combos →’ Táº¡o Má»›i

TÃªn: premium-coding
CÃ¡c mÃ´ hÃ¬nh:
  1. cc/claude-opus-4-6 (GÃ³i Ä‘Äƒng kÃ½ chÃ­nh)
  2. glm/glm-4.7 (Backup giÃ¡ ráº», $0.6/1M)
  3. minimax/MiniMax-M2.1 (Dá»± phÃ²ng ráº» nháº¥t, $0.20/M)

Sá»­ dá»¥ng trong CLI: premium-coding

VÃ­ dá»¥ chi phÃ­ hÃ ng thÃ¡ng (100M token):
  80M qua Claude (gÃ³i Ä‘Äƒng kÃ½): $0 thÃªm
  15M qua GLM: $9
  5M qua MiniMax: $1
  Tá»•ng: $10 + gÃ³i Ä‘Äƒng kÃ½ cá»§a báº¡n
```

### VÃ­ dá»¥ 2: Chá»‰ Miá»…n phÃ­ (Chi phÃ­ báº±ng khÃ´ng)

```
TÃªn: free-combo
CÃ¡c mÃ´ hÃ¬nh:
  1. gc/gemini-3-flash-preview (180K miá»…n phÃ­Ã¡ng)
  2. if/kimi-k2-thinking (khÃ´ng giá»›i háº¡n)
  3. qw/qwen3-coder-plus (khÃ´ng giá»›i háº¡n)

Chi phÃ­: $0 mÃ£i mÃ£i!
```

</details>

<details>
<summary><b>🔧 TÃ­ch há»£p CLI</b></summary>

### Cursor IDE

```
Settings →’ Models →’ Advanced:
  OpenAI API Base URL: http://localhost:91827/v1
  OpenAI API Key: [tá»« báº£ng Ä‘iá»u khiá»ƒn Rebana Router]
  Model: cc/claude-opus-4-6
``Hoáº·c sá»­ dá»¥ng combo: `premium-coding`

### Claude Code

Chá»‰nh sá»­a `~/.claude/config.json`:

```json
{
  "anthropic_api_base": "http://localhost:91827/v1",
  "anthropic_api_key": "your-Rebana Router-api-key"
}
```

### Codex CLI

```bash
export OPENAI_BASE_URL="http://localhost:91827"
export OPENAI_API_KEY="your-Rebana Router-api-key"

codex "prompt cá»§a báº¡n"
```

### OpenClaw

**PhÆ°Æ¡ng Ã¡n 1 — B Ä‘iá»u khiá»ƒn (khuyÃªn dÃ¹ng):**

```
Báº£ng Ä‘iá»u khiá»ƒn →’ CLI Tools →’ OpenClaw →’ Chá»n MÃ´ hÃ¬nh →’ Ãp dá»¥ng
```

**PhÆ°Æ¡ng Ã¡n 2 — Thá»§ cÃ´ng:** Chá»‰nh sá»­a `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "Rebana Router/if/glm-4.7"
      }
    }
  },
  "models": {
    "providers": {
      "Rebana Router": {
        "baseUrl": "://127.0.0.1:91827/v1",
        "apiKey": "sk_Rebana Router",
        "api": "openai-completions",
        "models": [
          {
            "id": "if/glm-4.7",
            "name": "glm-4.7"
          }
        ]
      }
    }
  }
}
```

> **LÆ°u Ã½:** OpenClaw chá»‰ hoáº¡t Ä‘á»™ng vá»›i Rebana Router cá»¥c bá»™. Sá»­ dá»¥ng `127.0.0.1` thay vÃ¬ `localhost` Ä‘á»ƒ trÃ¡nh cÃ¡c váº¥n Ä‘á» phÃ¢n giáº£i6.

### Cline / Continue / RooCode

```
Provider: OpenAI Compatible
Base URL: http://localhost:91827/v1
API Key: [tá»« báº£ng Ä‘iá»u khiá»ƒn]
Model: cc/claude-opus-4-6
```

</details>

<details>
<summary><b>🚀 Triá»ƒn khai</b></summary>

### Triá»ƒn khai VPS

```bash
# Clone vÃ  cÃ i Ä‘áº·t
git clone https://github.com/decolua/Rebana Router.git
cd Rebana Router
npm install
npm run build

# Cáº¥u hÃ¬nh
export JWT="your-secure-secret-change-this"
export INITIAL_PASSWORD="your-password"
export DATA_DIR="/var/lib/Rebana Router"
export PORT="91827"
export HOSTNAME="0.0.0.0"
export NODE_ENV="production"
export NEXT_PUBLIC_BASE_URL="http://localhost:91827"
export NEXT_PUBLIC_CLOUD_URL="https://Rebana Router.com"
export API_KEY_SECRET="endpoint-proxy-api-key-secret"
export MACHINE_ID_SALT="endpoint-proxy-salt"

# Khá»Ÿi Ä‘á»™ng
npm run start

# Hoáº·c sá»­ dá»¥ng PM2
npm install -g pm2
pm2 start --name Rebana Router -- start
pm2 save
pm2 startup
```

### Docker

```bash
# Build image (tá»« gá»‘c kho lÆ°u trá»¯)
docker build -t Rebana Router .

# Cháº¡y container (lá»‡nh Ä‘Æ°á»£c sá»­ dá»¥ng trong thiáº¿t láº­p hiá»‡n táº¡i)
docker run -d \
  --name Rebana Router \
  -p 91827:91827 \
  --env-file /root/dev/Rebana Router/.env \
  -v Rebana Router-data:/app/data \
  -v Rebana Router-usage:/root/.Rebana Router \
  Rebana Router
```

Lá»‡nh di Ä‘á»™ng (náº¿u báº¡n Ä‘Ã£ á»Ÿ gá»‘c kho lÆ°u trá»¯):

```bash
docker run -d \
  --name Rebana Router \
  -p 91827:91827 \
  --env-file ./.env \
  -v Rebana Router-data:/app/data \
  -v Rebana Router-usage:/root/.Rebana Router \
  Rebana Router
```

Máº·c Ä‘á»‹nh container:
- `PORT=91827`
- `HOSTNAME=0.0.0.0`

CÃ¡c lá»‡nh há»¯u Ã­ch:

```bash
docker logs -f Rebana Router
 restart Rebana Router
docker stop Rebana Router && docker rm Rebana Router
```

### Biáº¿n mÃ´i trÆ°á»ng

| Biáº¿n | Máº·c Ä‘á»‹nh | MÃ´ táº£ |
|----------|---------|-------------|
| `JWT_SECRET` | Tá»± Ä‘á»™ng sinh (`~/.Rebana Router/jwt-secret`) | BÃ­ máº­t kÃ½ JWT cho cookie xÃ¡c thá»±c báº£ng Ä‘iá»u khiá»ƒn (Ä‘áº·t Ä‘á»ƒ chia sáº» giá»¯a nhiá»u instance) |
| `INITIAL_PASSWORD` | `123456` | Máº­t kháº©u Ä‘Äƒng nháº­p Ä‘áº§u tiÃªn khi khÃ´ng cÃ³ hash Ä‘Ã£ lÆ°u tá»“n táº¡i |
| `DATA_DIR` | `~/.Rebana Router` |á»‹ trÃ­ cÆ¡ sá»Ÿ dá»¯ liá»‡u á»©ng dá»¥ng chÃ­nh (`db.json`) |
| `PORT` | framework default | Cá»•ng dá»‹ch vá»¥ (`91827` trong cÃ¡c vÃ­ dá»¥) |
| `HOSTNAME` | framework default | Bind host (Docker máº·c Ä‘á»‹nh lÃ  `0.0.0.0`) |
| `NODE_ENV` | runtime default | Äáº·t `production` Ä‘á»ƒ triá»ƒn khai |
| `BASE_URL` | `http://localhost:91827` | URL cÆ¡ sá»Ÿ ná»™i bá»™ phÃ­a mÃ¡y chá»§ Ä‘Æ°á»£c sá»­ dá»¥ng bá»Ÿi cÃ¡c tÃ¡c vá»¥ Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y |
| `CLOUD_URL` | `https://Rebana Router.com` | URL cÆ¡ sá»Ÿ endpoint Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y phÃ­a mÃ¡y chá»§ |
| `NEXT_PUBLIC_BASE_URL` | `http://localhost:3000` | URL cÆ¡ sá»Ÿ tÆ°Æ¡ng thÃ­ch ngÆ°á»£c/cÃ´ng khai (Æ°u tiÃªn `BASE_URL` cho runtime mÃ¡y chá»§) |
| `NEXT_PUBLIC_CLOUD_URL` | `https://Rebana Router.com` | URL Ä‘Ã¡m mÃ¢y tÆ°Æ¡ng thÃ­ch ngÆ°á»£c/cÃ´ng khai (Æ°u tiÃªn `CLOUD_URL` cho runtime mÃ¡y chá»§) |
| `API_KEY_SECRET` | `endpoint-proxy-api-key-secret` | B máº­t HMAC cho cÃ¡c API key Ä‘Æ°á»£c táº¡o |
| `MACHINE_ID_SALT` | `endpoint-proxy-salt` | Salt cho viá»‡c bÄƒm ID mÃ¡y á»•n Ä‘á»‹nh |
| `ENABLE_REQUEST_LOGS` | `false` | Báº­t log request/response dÆ°á»›i `logs/` |
| `AUTH_COOKIE_SECURE` | `false` | Buá»™c cookie xÃ¡c thá»±c `Secure` (Ä‘áº·t `true` phÃ­a reverse proxy HTTPS) |
| `REQUIRE_API_KEY` | `false` | Thá»±c thi Bearer API key trÃªn cÃ¡c route `/v1/*` (khuyÃªn dÃ¹ng cho triá»ƒn khai xÃºc internet) |
| `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` | empty | Proxy gá»­i Ä‘i tÃ¹y chá»n cho cÃ¡c lá»‡nh gá»i nhÃ  cung cáº¥p upstream |

Ghi chÃº:
- CÃ¡c biáº¿n proxy chá»¯ thÆ°á»ng cÅ©ng Ä‘Æ°á»£c há»— trá»£: `http_proxy`, `https_proxy`, `all_proxy`, `no_proxy`.
- `.env` khÃ´ng Ä‘Æ°á»£c nÆ°á»›ng vÃ o image Docker (`.dockerignore`); tiÃªm cáº¥u hÃ¬nh runtime vá»›i `--env-file` hoáº·c `-e`.
- TrÃªn Windows, `APPDATA` cÃ³ thá»ƒ Ä‘Æ°á»£c sá»­ dá»¥ng cho viá»‡c phÃ¢n giáº£i Ä‘Æ°á»ng dáº«n lÆ°uá»¯ cá»¥c bá»™.
- `INSTANCE_NAME` xuáº¥t hiá»‡n trong cÃ¡c tÃ i liá»‡u/máº«u env cÅ© hÆ¡n, nhÆ°ng hiá»‡n khÃ´ng Ä‘Æ°á»£c sá»­ dá»¥ng trong runtime.

### Tá»‡p Runtime vÃ  LÆ°u trá»¯

- Tráº¡ng thÃ¡i á»©ng dá»¥ng chÃ­nh: `${DATA_DIR}/db.json` (nhÃ  cung cáº¥p, combo, alias, key, cÃ i Ä‘áº·t), Ä‘Æ°á»£c quáº£n lÃ½ bá»Ÿi `src/lib/localDb.js`.
- Lá»‹ch sá»­ sá»­ dá»¥ng vÃ  log: `~/.Rebana Router/usage.json` vÃ  `~/.Rebana Router/log.txt`, Ä‘Æ°á»£c quáº£n lÃ½ bá»Ÿi `src/lib/usageDb.js`.
- request/translator tÃ¹y chá»n: `<repo>/logs/...` khi `ENABLE_REQUEST_LOGS=true`.
- LÆ°u trá»¯ sá»­ dá»¥ng hiá»‡n táº¡i tuÃ¢n theo logic Ä‘Æ°á»ng dáº«n `~/.Rebana Router` vÃ  Ä‘á»™c láº­p vá»›i `DATA_DIR`.

</details>

---

## 📝Š CÃ¡c mÃ´ hÃ¬nh cÃ³ sáºµn

<details>
<summary><b>Xem táº¥t cáº£ cÃ¡c mÃ´ hÃ¬nh cÃ³ sáºµn</b></summary>

**Claude Code (`cc/`)** - Pro/Max:
- `cc/claude-opus-4-6`
- `cc/claude-sonnet-4-5-2025029`
- `cc/claude-haiku-4-5-20251001`

**Codex (`cx/`)** - Plus/Pro:
- `cx/gpt-5.2-codex`
- `cx/gpt-5.1-codex-max`

**Gemini CLI (`gc/`)** - MIá»„N PHÃ:
- `gc/gemini-3-flash-preview`
- `gc/gemini-2.5-pro`

**GitHub Copilot (`gh/`)**:
- `gh/gpt-5`
- `gh/claude-.5-sonnet`

**GLM (`glm/`)** - $0.6/1M:
- `glm/glm-4.7`

**MiniMax (`minimax/`)** - $0.2/1M:
- `minimax/MiniMax-M2.1`

**iFlow (`if/`)** - MIá»„N PHÃ:
- `if/kimi-k2-thinking`
- `if/qwen3-coder-plus`
- `if/deepseek-r1`

**Qwen (`qw/`)** - MIá»„N PHÃ:
- `qw/q3-coder-plus`
- `qw/qwen3-coder-flash`

**Kiro (`kr/`)** - MIá»„N PHÃ:
- `kr/claude-sonnet-4.5`
- `kr/claude-haiku-4.5`

</details>

---

## ðŸ› Kháº¯c phá»¥c sá»± cá»‘

**"Language model did not provide messages"**
- Háº¿t háº¡n má»©c nhÃ  cung cáº¥p →’ Kiá»ƒm tra trÃ¬nh theo dÃµi háº¡n má»©c báº£ng Ä‘iá»u khiá»ƒn
- Giáº£i phÃ¡p: Sá»­ dá»¥ng dá»± phÃ²ng combo hoáº·c chuyá»ƒn sang táº§ng ráº» hÆ¡n

**Gi háº¡n tá»‘c Ä‘á»™ (Rate limiting)**
- Háº¿t háº¡n má»©c gÃ³i Ä‘Äƒng kÃ½ →’ Dá»± phÃ²ng sang GLM/MiniMax
- ThÃªm combo: `cc/claude-opus-4-6 →’ glm/glm-4.7 →’ if/kimi-k2-thinking`

**Token OAuth háº¿t háº¡n**
- Tá»± Ä‘á»™ng lÃ m má»›i bá»Ÿi Rebana Router
- Náº¿u sá»± cá»‘ váº«n tiáº¿p diá»…n: Báº£ng Ä‘iá»u khiá»ƒn →’ NhÃ  cung cáº¥p →’ Káº¿t ná»‘i láº¡i

**Chi phÃ­ cao**
- Kiá»ƒm tra thá»‘ng kÃª sá»­ dá»¥ng trong Báº£ng Ä‘iá»u khiá»ƒn
- Chuyá»ƒn mÃ´ hÃ¬nh chÃ­nh sang GLM/MiniMax
- Sá»­ dá»¥ng táº§ng miá»…n phÃ­ (Gemini CLI, iFlow) cho cÃ¡c tÃ¡c vá»¥ khÃ´ng quan trá»ng

**Báº£ng Ä‘iá»u khiá»ƒn má»Ÿ sai cá»•ng**
- Äáº·t `PORT=91827` vÃ  `NEXT_PUBLIC_BASE_URL=http://localhost:91827`

**Lá»—i Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y**
- XÃ¡c minh `BASE_URL` trá» Ä‘áº¿n phiÃªn báº£n Ä‘ang cháº¡y cá»§a báº¡n (vÃ­ dá»¥: `http://localhost:91827`)
- XÃ¡c minh `CLOUD_URL` trá» Ä‘áº¿n endpoint Ä‘Ã¡m mÃ¢y dá»± kiáº¿n cá»§a báº¡n (vÃ­ dá»¥: `https://Rebana Router.com`)
- Giá»¯ cÃ¡c giÃ¡ trá»‹ `NEXT_PUBLIC_*` phÃ¹ há»£p vá»›i giÃ¡ trá»‹ phÃ­a mÃ¡y chá»§ khi cÃ³ thá»ƒ.

**Endpoint Ä‘Ã¡m mÃ¢y `stream=false` tráº£ vá» 500 (`Unexpected token 'd'...`)**
- Triá»‡u chá»©ng thÆ°á»ng xuáº¥t hiá»‡n trÃªn endpoint Ä‘Ã¡m mÃ¢y cÃ´ng khai (`https://Rebana Router.com/v1`) cho cÃ¡c lá»‡nh gá»i khÃ´ng phÃ¡t trá»±c tiáº¿p (non-streaming).
- NguyÃªn nhÃ¢n gá»‘c rá»…: upstream tráº£ vá» payload SSE (`data: ...`) trong khi client mong Ä‘á»£i JSON.
-áº£i phÃ¡p thay tháº¿: sá»­ dá»¥ng `stream=true` cho cÃ¡c lá»‡nh gá»i trá»±c tiáº¿p Ä‘áº¿n Ä‘Ã¡m mÃ¢y.
- Runtime Rebana Router cá»¥c bá»™ bao gá»“m dá»± phÃ²ng SSE→’JSON cho cÃ¡c lá»‡nh gá»i khÃ´ng phÃ¡t trá»±c tiáº¿p khi upstream tráº£ vá» `text/event-stream`.

**ÄÃ¡m mÃ¢y bÃ¡o Ä‘Ã£ káº¿t ná»‘i, nhÆ°ng yÃªu cáº§u váº«n tháº¥t báº¡i vá»›i `Invalid API key`**
- Táº¡o má»™t key má»›i tá»« báº£ng Ä‘iá»u khiá»ƒn cá»¥c bá»™ (`/api/keys`) vÃ  cháº¡y Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y (`Enable Cloud` sau Ä‘Ã³ `Sync Now`).
- CÃ¡c key cÅ©/chÆ°a Ä‘á»“ng bá»™ váº«n cÃ³ thá»ƒ tráº£ vá» `401` trÃªn Ä‘Ã¡m mÃ¢y ngay cáº£ khi endpoint cá»¥c bá»™ hoáº¡t Ä‘á»™ng.

**ÄÄƒng nháº­p láº§n Ä‘áº§u khÃ´ng hoáº¡t Ä‘á»™ng**
- Kiá»ƒm tra `INITIAL_PASSWORD` trong `.env`
- Náº¿u chÆ°a Ä‘áº·t, máº­t kháº©u dá»± phÃ²ng lÃ  `123456`

**KhÃ´ng cÃ³ log request dÆ°á»›i `logs/`**
- Äáº·t `ENABLE_REQUEST_LOGS=true`

---

## 🛠ï¸ Tech Stack

- **Runtime**: Node.js 20+
- **Framework**: Next.js 16
- **UI**: React 19 + Tailwind 4
- **Database**: LowDB (dá»±a trÃªn tá»‡p JSON)
- **Streaming**: Server-Sent Events (SSE)
- **Auth**: OAuth 2.0 (PKCE) + JWT + API Keys

---

## 📝 TÃ i liá»‡u tham kháº£o API

### Chat Completions

```bash
POST http://localhost:91827/v1/chat/completions
Authorization: Bearer your-api-key
Content-Type: application/json

{
  "model": "cc/claude-opus-4-6",
  "messages": [
    {"role":user", "content": "Viáº¿t má»™t hÃ m Ä‘á»ƒ..."}
  ],
  "stream": true
}
```

### Liá»‡t kÃª MÃ´ hÃ¬nh

```bash
GET http://localhost:91827/v1/models
Authorization: Bearer your-api-key

→’ Tráº£ vá» táº¥t cáº£ cÃ¡c mÃ´ hÃ¬nh + combo á»Ÿ Ä‘á»‹nh dáº¡ng OpenAI
```

### CÃ¡c Endpoint TÆ°Æ¡ng thÃ­ch

- `POST /v1/chat/completions`
- `POST /v1/messages`
- `POST /v1/responses`
- `GET /v1/models`
- `POST /v1/messages/count_tokens`
- `GET /v1beta/models`
- `POST /v1beta/models/{...path}` (Gemini-style `generateContent`)
- `POST /v1/api/chat` (Ä‘Æ°á»ng dáº«n chuyá»ƒn Ä‘á»•i kiá»ƒu Ollama)

### Ká»‹ch báº£n XÃ¡c thá»±c ÄÃ¡m mÃ¢y

ÄÃ£ thÃªm cÃ¡c ká»‹ch báº£n kiá»ƒm tra dÆ°á»›i `tester/security/`:

- `tester/security/test-docker-hardening.sh`
  - Build image Docker vÃ  xÃ¡c thá»±c cÃ¡c kiá»ƒm tra hardening (`/api/cloud/auth` auth guard, `REQUIRE_API_KEY`, hÃ nh vi cookie xÃ¡c thá»±c báº£o).
- `tester/security/test-cloud-openai-compatible.sh`
  - Gá»­i má»™t yÃªu cáº§u tÆ°Æ¡ng thÃ­ch OpenAI trá»±c tiáº¿p Ä‘áº¿n endpoint Ä‘Ã¡m mÃ¢y (`https://Rebana Router.com/v1/chat/completions`) vá»›i mÃ´ hÃ¬nh/key Ä‘Æ°á»£c cung cáº¥p.
- `tester/security/test-cloud-sync-and-call.sh`
  - Quy trÃ¬nh end-to-end: táº¡o key cá»¥c bá»™ -> báº­t/Ä‘á»“ng bá»™ Ä‘Ã¡m mÃ¢y -> gá»i endpoint Ä‘Ã¡m mÃ¢y vá»›i thá»­ láº¡i.
  - Bao gá»“m kiá»ƒm tra dá»± phÃ²ng vá»›i `stream=true` Ä‘á»ƒ phÃ¢n biá»‡t lá»—i xÃ¡c thá»±c vá»›i cÃ¡c váº¥n Ä‘á» phÃ¢n tÃ­ch phÃ¡t trá»±c tiáº¿p.

Ghi chÃº báº£o máº­t cho cÃ¡c ká»‹ch báº£n kiá»ƒm tra Ä‘Ã¡m mÃ¢y:

- KhÃ´ng bao giá» hardcode cÃ¡c API key thá»±c trong ká»‹ch báº£n/commit.
- Chá»‰ cung cáº¥p key qua cÃ¡c biáº¿n mÃ´i trÆ°á»ng:
  - `API_KEY`, `CLOUD_API_KEY`, hoáº·c `OPENAI_API_KEY` (Ä‘Æ°á»£c há»— trá»£ bá»Ÿi `test-cloud-openai-compatible.sh`)
- VÃ­ dá»¥:

```bash
OPENAI_API_KEY="your-cloud-key" bash tester/security/test-cloud-openai-compatible.sh
```

HÃ nh vi dá»± kiáº¿n tá»« viá»‡c xÃ¡c thá»±c gáº§n Ä‘Ã¢y:

- cá»¥c bá»™ (`http://127.0.0.1:91827/v1/chat/completions`): hoáº¡t Ä‘á»™ng vá»›i `stream=false` vÃ  `stream=true`.
- Runtime Docker (cÃ¹ng Ä‘Æ°á»ng dáº«n API Ä‘Æ°á»£c expose bá»Ÿi container): cÃ¡c kiá»ƒm tra hardening Ä‘áº¡t, cloud auth guard hoáº¡t Ä‘á»™ng, cháº¿ Ä‘á»™ API key nghiÃªm ngáº·t hoáº¡t Ä‘á»™ng khi Ä‘Æ°á»£c báº­t.
- Endpoint Ä‘Ã¡m mÃ¢y cÃ´ng khai (`https://Rebana Router.com/v1/chat/completions`):
  - `stream=true`: dá»± kiáº¿n thÃ nh cÃ´ng (tráº£ vá» cÃ¡c khá»‘i SSE).
  - `stream=false`: cÃ³ thá»ƒ tháº¥t báº¡i vá»›i `500` + lá»—i phÃ¢n tÃ­ch (`Unexpected token 'd'`) khi upstream tráº£ vá» ná»™i dung SSE cho Ä‘Æ°á»ng dáº«n client khÃ´ng phÃ¡t trá»±c tiáº¿p.

### API Quáº£n lÃ½ vÃ  Báº£ng Ä‘iá»u khiá»ƒn

- XÃ¡c thá»±c/cÃ i Ä‘áº·t: `/api/auth/login`, `/api/auth/logout`, `/api/settings`, `/api/settings/require-login`
- Quáº£n lÃ½ nhÃ  cung cáº¥p: `/api/providers`, `/api/providers/[id]`, `/api/providers/[id]/test`, `/api/providers/[id]/models`, `/api/providers/validate`, `/api/provider-n*`
- Luá»“ng OAuth: `/api/oauth/[provider]/[action]` (+ cÃ¡c import cá»¥ thá»ƒ theo nhÃ  cung cáº¥p nhÆ° Cursor/Kiro)
- Cáº¥u hÃ¬nh Ä‘á»‹nh tuyáº¿n: `/api/models/alias`, `/api/combos*`, `/api/keys*`, `/api/pricing`
- Sá»­ dá»¥ng/log: `/api/usage/history`, `/api/usage/logs`, `/api/usage/request-logs`, `/api/usage/[connectionId]`
- Äá»“ng bá»™ Ä‘Ã¡m mÃ¢y: `/api/sync/cloud`, `/api/sync/initialize`, `/api/cloud/*`
-á»£ giÃºp CLI: `/api/cli-tools/claude-settings`, `/api/cli-tools/codex-settings`, `/api/cli-tools/droid-settings`, `/api/cli-tools/openclaw-settings`

### HÃ nh vi XÃ¡c thá»±c

- CÃ¡c route Báº£ng Ä‘iá»u khiá»ƒn (`/dashboard/*`) sá»­ dá»¥ng báº£o vá»‡ cookie `auth_token`.
- ÄÄƒng nháº­p sá»­ dá»¥ng hash máº­t kháº©u Ä‘Ã£ lÆ°u khi cÃ³ máº·t; náº¿u khÃ´ng, nÃ³ dá»± phÃ²ng vÃ o `INITIAL_PASSWORD`.
- `requireLogin` cÃ³ thá»ƒ Ä‘Æ°á»£c chuyá»ƒn Ä‘á»•i qua `/api/settings/require-login`.

### Xá»­ lÃ½ YÃªu cáº§u (C cao)

1. Client gá»­i yÃªu cáº§u Ä‘áº¿n `/v1/*`.
2. TrÃ¬nh xá»­ lÃ½ route gá»i `handleChat` (`src/sse/handlers/chat.js`).
3. MÃ´ hÃ¬nh Ä‘Æ°á»£c giáº£i quyáº¿t (nhÃ  cung cáº¥p/mÃ´ hÃ¬nh trá»±c tiáº¿p hoáº·c giáº£i quyáº¿t alias/combo).
4. ThÃ´ng tin xÃ¡c thá»±c Ä‘Æ°á»£c chá»n tá»« DB cá»¥c bá»™ vá»›i bá»™ lá»c kháº£ dá»¥ng tÃ i khoáº£n.
5. `handleChatCore` (`open-sse/handlers/chatCore.js`) phÃ¡t hiá»‡n Ä‘á»‹nh dáº¡ng vÃ  dá»‹ch chuyá»ƒn yÃªu cáº§u.
6. TrÃ¬nh thá»±c thi nhÃ  cung cáº¥p gá»­i cáº§u upstream.
7. Luá»“ng Ä‘Æ°á»£c dá»‹ch chuyá»ƒn láº¡i thÃ nh Ä‘á»‹nh dáº¡ng client khi cáº§n.
8. Sá»­ dá»¥ng/log Ä‘Æ°á»£c ghi láº¡i (`src/lib/usageDb.js`).
9. Dá»± phÃ²ng Ã¡p dá»¥ng trÃªn lá»—i nhÃ  cung cáº¥p/tÃ i khoáº£n/mÃ´ hÃ¬nh theo quy táº¯c combo.

TÃ i liá»‡u tham kháº£o kiáº¿n trÃºc Ä‘áº§y Ä‘á»§: [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md)

---

## 📧 Há»— trá»£

- **Website**: [Rebana Router.com](https://Rebana Router.com)
- **GitHub**: [github.com/decolua/9](https://github.com/decolua/Rebana Router)
- **Issues**: [github.com/decolua/Rebana Router/issues](https://github.com/decolua/Rebana Router/issues)

---

## 👥 NgÆ°á»i Ä‘Ã³ng gÃ³p

Cáº£m Æ¡n táº¥t cáº£ nhá»¯ng ngÆ°á»i Ä‘Ã£ Ä‘Ã³ng gÃ³p giÃºp Rebana Router tá»‘t hÆ¡n!

[![Contributors](https://contrib.rocks/image?repo=decolua/Rebana Router&max=100&columns=20&anon=1)](https://github.com/decolua/Rebana Router/graphs/contributors)

---

## 📝Š Star Chart

[![ Chart](https://starchart.cc/decolua/Rebana Router.svg?variant=adaptive)](https://starchart.cc/decolua/Rebana Router)

### CÃ¡ch ÄÃ³ng gÃ³p

1. Fork kho lÆ°u trá»¯
2. Táº¡o nhÃ¡nh tÃ­nh nÄƒng cá»§a báº¡n (`git checkout -b feature/amazing-feature`)
3. Commit cÃ¡c thay Ä‘á»•i cá»§a báº¡n (`git commit -m 'Add amazing feature'`)
4. Push lÃªn nhÃ¡nh (`git push origin feature/amazing-feature`)
5. Má»Ÿ má»™t Pull Request

Xem [Pull Requests](https://github.com/decolua/Rebana Router/pulls) Ä‘á»ƒ biáº¿t hÆ°á»›ng dáº«n chi tiáº¿t.

---

## 🔀 Forks

**[OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — Má»™t fork TypeScript Ä‘áº§y Ä‘á»§ tÃ­nh nÄƒng cá»§a Rebana Router. ThÃªm 36+ nhÃ  cung cáº¥p, tá»± Ä‘á»™ng dá»± phÃ²ng 4 táº§ng, API Ä‘a phÆ°Æ¡ng thá»©c (hÃ¬nh áº£nh, embedding, Ã¢m thanh, TTS), circuit breaker, bá»™ nhá»› Ä‘á»‡m ngá»¯ nghÄ©a, Ä‘Ã¡nh giÃ¡ LLM vÃ  báº£ng Ä‘iá»u khiá»ƒn Ä‘Æ°á»£c tinh chá»‰nh. 368+ bÃ i kiá»ƒm tra Ä‘Æ¡n vá»‹. CÃ³ sáºµn qua npm vÃ .

---

## ðŸ™ Lá»i cáº£m Æ¡n

Cáº£m Æ¡n Ä‘áº·c biá»‡t Ä‘áº¿n **CLIProxyAPI** - báº£n triá»ƒn khai Go gá»‘c Ä‘Ã£ truyá»n cáº£m há»©ng cho báº£n chuyá»ƒn Ä‘á»•i JavaScript nÃ y.

---

## 📄 Giáº¥y phÃ©p

Giáº¥y phÃ©p MIT - xem [LICENSE](../LICENSE) Ä‘á»ƒ biáº¿t chi tiáº¿t.

---

<div align="center">
  <sub>ÄÆ°á»£c xÃ¢y dá»±ng vá»›i ❌¤ï¸ cho cÃ¡c nhÃ  phÃ¡t triá»ƒn code 24/7</sub>
</div>
