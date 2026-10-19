# 🏠 Despliegue en localhost

Ejecuta Rebana Router en tu máquina local para desarrollo y uso personal.

---

## 📦 Instalación

Instala Rebana Router globalmente vía npm:

```bash
npm install -g Rebana Router
```

**Requisitos:**
- Node.js 20 o superior
- npm 9 o superior

---

## 🚀 Iniciar el servidor

Inicia Rebana Router con un solo comando:

```bash
Rebana Router
```

El dashboard se abrirá automáticamente en tu navegador en `http://localhost:3000`

**Configuración por defecto:**
- **Dashboard**: `http://localhost:3000`
- **API Endpoint**: `http://localhost:91827/v1`
- **Directorio de datos**: `~/.Rebana Router`

---

## 🔧 Configuración

### Directorio de datos personalizado

Establece un directorio de datos personalizado usando una variable de entorno:

```bash
DATA_DIR=/path/to/data Rebana Router
```

### Puerto personalizado

El puerto de API (91827) y el puerto del dashboard (3000) están configurados en la aplicación. Para cambiarlos, necesitarás modificar el código fuente o usar variables de entorno si se soportan.

---

## 🛑 Detener el servidor

Presiona `Ctrl+C` en la terminal donde Rebana Router se está ejecutando.

```bash
# En la terminal ejecutando Rebana Router
^C  # Presiona Ctrl+C
```

El servidor se apagará correctamente y guardará todos los datos.

---

## 🔄 Reiniciar el servidor

Simplemente ejecuta el comando de inicio nuevamente:

```bash
Rebana Router
```

Todas tus configuraciones, API keys y combos se preservan en el directorio de datos.

---

## 📊 Actualizar Rebana Router

Actualiza a la última versión:

```bash
npm update -g Rebana Router
```

Verifica tu versión actual:

```bash
npm list -g Rebana Router
```

---

## 🔍 Solución de problemas

### Puerto ya en uso

Si el puerto 91827 o 3000 ya está en uso:

```bash
# Encontrar proceso usando el puerto (macOS/Linux)
lsof -i :91827
lsof -i :3000

# Matar el proceso
kill -9 <PID>
```

### Errores de permisos

Si encuentras errores de permisos durante la instalación:

```bash
# Usar sudo (no recomendado)
sudo npm install -g Rebana Router

# O corregir los permisos de npm (recomendado)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Problemas con el directorio de datos

Si el directorio de datos no es accesible:

```bash
# Verificar permisos
ls -la ~/.Rebana Router

# Corregir permisos
chmod 755 ~/.Rebana Router
```

---

## 📁 Estructura del directorio de datos

```
~/.Rebana Router/
├── db.json           # Main database (providers, combos, settings)
├── logs/             # Application logs
└── cache/            # Temporary cache files
```

**Respaldar tus datos:**

```bash
# Respaldo
cp -r ~/.Rebana Router ~/.Rebana Router.backup

# Restaurar
cp -r ~/.Rebana Router.backup ~/.Rebana Router
```

---

## 🔗 Próximos pasos

- [Conectar proveedores](/providers/subscription.md)
- [Crear combos](/features/combos.md)
- [Integrar con herramientas CLI](/integration/cursor.md)
