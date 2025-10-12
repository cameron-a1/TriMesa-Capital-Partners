# GitHub and Vercel Deployment Guide

This guide will walk you through deploying your TriMesa Capital website to GitHub and then to Vercel for public hosting.

## Part 1: Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `trimesa-capital`
4. Choose "Public" or "Private" (Vercel works with both)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Initialize Git and Push

Open your terminal/command prompt in the `trimesa-capital` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - TriMesa Capital website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/trimesa-capital.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You may be prompted to enter your GitHub credentials. If you have 2FA enabled, you'll need to use a Personal Access Token instead of your password.

### Step 3: Verify on GitHub

Go to `https://github.com/YOUR_USERNAME/trimesa-capital` to see your code on GitHub.

## Part 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com) and sign up/sign in (you can use your GitHub account)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your `trimesa-capital` repository from the list
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. You'll get a live URL like: `https://trimesa-capital.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from the project directory
cd trimesa-capital
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? trimesa-capital
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## Part 3: Custom Domain (Optional)

### Add Custom Domain to Vercel

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `trimesacapital.com`)
4. Click "Add"
5. Vercel will provide DNS records to add to your domain registrar

### Update DNS Records

Go to your domain registrar (GoDaddy, Namecheap, etc.) and add:

**For root domain (trimesacapital.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

Wait 24-48 hours for DNS propagation (usually faster).

## Part 4: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to the `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run builds and show deployment status

## Making Updates

To update your website:

```bash
# Make your changes to the code
# Then commit and push

git add .
git commit -m "Updated content"
git push
```

Vercel will automatically detect the push and redeploy your site within 1-2 minutes.

## Deployment URLs

After deployment, you'll have:
- **Production URL**: `https://trimesa-capital.vercel.app`
- **Custom Domain** (if added): `https://trimesacapital.com`
- **Git URL**: `https://github.com/YOUR_USERNAME/trimesa-capital`

## Troubleshooting

### Issue: Git push rejected
**Solution:** Make sure you've set up your GitHub credentials correctly. Use a Personal Access Token if you have 2FA enabled.

### Issue: Vercel build fails
**Solution:** Check the build logs on Vercel dashboard. Ensure all dependencies are listed in `package.json`.

### Issue: Website shows 404
**Solution:** Make sure the build output directory is set to `dist` in Vercel settings.

### Issue: Images not loading
**Solution:** Ensure images are in `src/assets/` and properly imported in `App.jsx`.

## Environment Variables (if needed)

If you need to add environment variables:

1. Go to Vercel project settings
2. Click "Environment Variables"
3. Add your variables (e.g., API keys)
4. Redeploy the project

## Support

- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs**: [https://docs.github.com](https://docs.github.com)
- **Vite Docs**: [https://vitejs.dev](https://vitejs.dev)

---

**Your website is now ready for GitHub and Vercel deployment!**
