# 🚀 GUIDE DÉPLOIEMENT VERCEL - FRANCIS SCHAUB

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Prerequisites
- [ ] Compte GitHub avec le repo `francis-schaub`
- [ ] Compte Vercel créé (https://vercel.com)
- [ ] Node.js v18+ installé localement
- [ ] Git configuré

### 2. Préparation locale
```bash
# Vérifier que tout compile sans erreur
npm run build

# Tester localement
npm start
```

### 3. Push vers GitHub
```bash
git add .
git commit -m "Final production ready - All corrections applied"
git push origin main
```

---

## 🔧 OPTION 1: Déploiement rapide (RECOMMANDÉ)

### Étape 1: Connecter GitHub à Vercel
1. Aller sur https://vercel.com
2. Cliquer "New Project"
3. Cliquer "Import Git Repository"
4. Chercher "francis-schaub"
5. Cliquer "Import"

### Étape 2: Configuration du projet
- **Framework Preset:** Next.js → Changer en `Create React App`
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

### Étape 3: Variables d'environnement
Ajouter dans Vercel Settings → Environment Variables:
```
GENERATE_SOURCEMAP=false
INLINE_RUNTIME_CHUNK=false
IMAGE_INLINE_SIZE_LIMIT=10000
REACT_APP_GTM_ID=GTM-KCD9XXHP
```

### Étape 4: Déployer
Cliquer "Deploy" et attendre (2-3 minutes)

**Après déploiement:**
- ✅ URL générée: `https://francis-schaub.vercel.app`
- ✅ Vercel crée un deployment automatique à chaque push

---

## 🔧 OPTION 2: CLI Vercel (PLUS DE CONTRÔLE)

### Étape 1: Installer CLI Vercel
```bash
npm install -g vercel
```

### Étape 2: Se connecter
```bash
vercel login
```

### Étape 3: Configurer le projet
```bash
# À la racine du projet
vercel
```

Questions et réponses:
```
? Set up and deploy "~\francis-schaub"? [Y/n] → Y
? Which scope do you want to deploy to? → Ton compte
? Link to existing project? [y/N] → N
? What's your project's name? → francis-schaub
? In which directory is your code located? → ./
? Want to modify these settings? [y/N] → N
```

### Étape 4: Déployer
```bash
vercel
```

---

## 🎯 CONFIGURATION RECOMMANDÉE POUR VERCEL

### 1. Créer `vercel.json` (optionnel mais recommandé)

Ajoute ce fichier à la racine du projet:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm install",
  "framework": "create-react-app",
  "env": {
    "GENERATE_SOURCEMAP": "false",
    "INLINE_RUNTIME_CHUNK": "false",
    "IMAGE_INLINE_SIZE_LIMIT": "10000"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=3600"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/sanitaire",
      "destination": "/",
      "permanent": false
    },
    {
      "source": "/carrelage",
      "destination": "/",
      "permanent": false
    }
  ]
}
```

---

## 📋 VÉRIFICATIONS POST-DÉPLOIEMENT

### 1. Test basique
```
✅ https://francis-schaub.vercel.app charge
✅ Pages principales accessibles
✅ Images WebP chargent
✅ Formulaire de contact fonctionne
```

### 2. Performance
```
✅ Lighthouse audit (90+)
✅ Core Web Vitals OK
✅ PageSpeed Insights
```

### 3. SEO
```
✅ Sitemap accessible
✅ robots.txt présent
✅ Meta tags présents
✅ Structured data OK
```

### 4. Fonctionnalités
```
✅ Cookies banner affiche
✅ GTM charge après consentement
✅ Navigation fonctionne
✅ Forms Web3Forms fonctionne
```

---

## 🌐 DÉPLOYER AVEC TON DOMAINE PERSONNALISÉ

### 1. Dans Vercel Dashboard
- Aller sur Settings → Domains
- Cliquer "Add Domain"
- Entrer: `francis-schaub.fr` (ou ton domaine)

### 2. Configurer le DNS
Instructions de Vercel:
- Ajouter les records DNS chez ton registrar
- Attendre la propagation (5-30 min)

### 3. SSL/HTTPS
- Vercel génère automatiquement le certificat SSL ✅
- Pas besoin de faire quoi que ce soit

---

## 🔄 AUTOMATIC DEPLOYMENTS

Chaque fois que tu pusher sur GitHub:
```bash
git add .
git commit -m "Message de commit"
git push origin main
```

Vercel va:
1. Détecter le push
2. Builder automatiquement
3. Déployer en prod si succès
4. Créer une preview URL si PR

---

## ⚠️ IMPORTANT: CONFIGURATION VERCEL POUR REACT

Vercel détecte automatiquement CRA mais voici ce à vérifier:

### Settings → Build & Development
```
Framework Preset:        Create React App
Build Command:           npm run build
Output Directory:        build
Install Command:         npm install
Node.js Version:         18.x (ou plus récent)
```

### Settings → Environment Variables
```
GENERATE_SOURCEMAP       false
INLINE_RUNTIME_CHUNK     false
IMAGE_INLINE_SIZE_LIMIT  10000
```

### Settings → Analytics (optionnel)
- [ ] Activer Web Analytics (gratuit)
- [ ] Voir le trafic en temps réel

---

## 🐛 DEBUGGING SUR VERCEL

### Logs en temps réel
```bash
vercel logs francis-schaub
```

### Rebuild un deployment
Vercel Dashboard → Deployments → Click sur un deploy → "Redeploy"

### Vérifier les erreurs de build
Vercel Dashboard → Deployments → Cliquer sur le deploy → Voir logs complets

---

## 📊 MONITORING POST-DEPLOYMENT

### 1. Vérifier Google Search Console
- Ajouter ton domaine Vercel
- Soumettre sitemap.xml
- Vérifier indexation

### 2. Google Analytics
- Vérifier que GTM charge
- Suivre les conversions
- Analyser le trafic

### 3. Uptime Monitoring (optionnel)
- UptimeRobot (gratuit)
- Surveiller que le site reste up

---

## 🎉 RÉSUMÉ RAPIDE

**La façon la plus simple:**

1. Commit tes changements:
   ```bash
   git add .
   git commit -m "Final: Production ready"
   git push origin main
   ```

2. Aller sur https://vercel.com

3. Cliquer "New Project"

4. Importer ton repo GitHub

5. Accepter les settings par défaut

6. Cliquer "Deploy"

7. **C'est fait!** ✅

Vercel va:
- ✅ Builder ton app
- ✅ Créer une URL
- ✅ SSL automatique
- ✅ Déploiements auto à chaque push

---

## 📞 SUPPORT

Si tu as des problèmes:
1. Vercel Docs: https://vercel.com/docs
2. Vérifier les logs: Vercel Dashboard → Deployments
3. Tester localement d'abord: `npm run build && npm start`

---

**Next Step:** Envoie-moi quand tu as créé ton compte Vercel! 🚀
