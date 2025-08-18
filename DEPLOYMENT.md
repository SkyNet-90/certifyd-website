# Self-Hosted Deployment Guide

This guide will walk you through deploying the Certifyd website on your TrueNAS Scale homelab using Docker containers and Portainer.

## Prerequisites

- TrueNAS Scale server running
- Portainer installed and accessible
- Cloudflare account with domain
- Basic Docker knowledge

## 1. Cloudflare Tunnel Setup

### Create Cloudflare Tunnel

1. **Access Cloudflare Zero Trust Dashboard**
   - Go to [dash.teams.cloudflare.com](https://dash.teams.cloudflare.com)
   - Navigate to Access → Tunnels

2. **Create New Tunnel**
   - Click "Create a tunnel"
   - Choose "Cloudflared"
   - Name: `certifyd-website`
   - Save the tunnel token (you'll need this later)

3. **Configure Public Hostnames**
   - Add hostname: `certifyd.app` → `http://certifyd-web:80`
   - Add hostname: `www.certifyd.app` → `http://certifyd-web:80`
   - Add hostname: `files.certifyd.app` → `http://certifyd-filebrowser:80` (optional)

4. **Update DNS**
   - In Cloudflare DNS, ensure your domain points to the tunnel

## 2. Portainer Stack Deployment

### Create Environment Variables

Before deploying, create a `.env` file or set these in Portainer:

```env
CF_TUNNEL_TOKEN=your_cloudflare_tunnel_token_here
GIT_REPO=https://github.com/SkyNet-90/Certifyd-Website.git
GIT_BRANCH=main
```

### Deploy Stack

1. **Access Portainer**
   - Navigate to your Portainer instance
   - Go to Stacks

2. **Create New Stack**
   - Click "Add stack"
   - Name: `certifyd-website`
   - Paste the contents of `docker-compose.yml`
   - Add environment variables in the "Environment variables" section

3. **Deploy**
   - Click "Deploy the stack"
   - Wait for all containers to start

## 3. Verify Deployment

### Check Container Status

All containers should be running:
- `certifyd-web` (Nginx web server)
- `certifyd-git-sync` (Git synchronization)
- `certifyd-builder` (Build automation)
- `certifyd-filebrowser` (File management)
- `certifyd-tunnel` (Cloudflare tunnel)

### Check Logs

1. **Git-sync logs**: Should show successful repository clones
2. **Builder logs**: Should show npm install and build processes
3. **Web logs**: Should show Nginx startup
4. **Tunnel logs**: Should show successful tunnel connection

### Access Website

**Public Access (via Cloudflare Tunnel):**
- Main site: `https://certifyd.app`
- File browser: `https://files.certifyd.app` (if configured)

**Local Network Access:**
- Main site: `http://your-truenas-ip:8081`
- File browser: `http://your-truenas-ip:8083` (optional)

## 4. Automatic Updates

The deployment automatically updates when you push changes to the main branch:

1. **Git-sync** monitors the repository every 5 minutes
2. **Builder** automatically runs `npm install` and `npm run build`
3. **Web server** serves the updated files immediately

### Manual Update Trigger

To force an immediate update:

```bash
# In Portainer, restart the git-sync container
docker restart certifyd-git-sync
```

## 5. Monitoring and Maintenance

### Container Health

Monitor container status in Portainer dashboard:
- Check CPU/Memory usage
- View container logs
- Restart containers if needed

### Cloudflare Analytics

Monitor traffic and performance:
- Access Cloudflare Analytics dashboard
- Check response times and error rates
- Monitor bandwidth usage

### File Browser

Access deployed files via file browser:
- URL: `https://files.certifyd.app` (if configured)
- View source code, build output, and logs
- Download files if needed

## 6. Troubleshooting

### Common Issues

1. **Build Failures**
   - Check builder container logs
   - Verify npm dependencies in `package.json`
   - Check disk space on TrueNAS

2. **Tunnel Connection Issues**
   - Verify `CF_TUNNEL_TOKEN` is correct
   - Check tunnel status in Cloudflare dashboard
   - Restart tunnel container

3. **Git Sync Issues**
   - Check repository URL and branch
   - Verify network connectivity from container
   - Check git-sync container logs

### Log Locations

- Git-sync: `docker logs certifyd-git-sync`
- Builder: `docker logs certifyd-builder`
- Web: `docker logs certifyd-web`
- Tunnel: `docker logs certifyd-tunnel`

## 7. Backup and Recovery

### Data Volumes

Important volumes to backup:
- `git-data`: Contains cloned repository
- `web-data`: Contains built website files
- `filebrowser-data`: Contains file browser database

### Backup Script

```bash
#!/bin/bash
BACKUP_DIR="/mnt/backups/certifyd-$(date +%Y%m%d)"
mkdir -p "$BACKUP_DIR"

# Backup volumes
docker run --rm -v certifyd_git-data:/data -v $BACKUP_DIR:/backup alpine tar czf /backup/git-data.tar.gz /data
docker run --rm -v certifyd_web-data:/data -v $BACKUP_DIR:/backup alpine tar czf /backup/web-data.tar.gz /data
```

## 8. Security Considerations

### Firewall Rules

- Only ports 80/443 should be accessible externally (through tunnel)
- Portainer and other management interfaces should be internal only

### SSL/TLS

- Cloudflare provides automatic SSL termination
- Force HTTPS redirects in Cloudflare dashboard
- Enable HSTS headers

### Access Control

- Use Cloudflare Access rules if needed
- Monitor access logs for suspicious activity
- Keep containers updated regularly

## 9. Performance Optimization

### Caching

- Enable Cloudflare caching for static assets
- Configure appropriate cache headers in Nginx
- Use compression (gzip) for text assets

### CDN

- Cloudflare CDN is automatically enabled
- Monitor Core Web Vitals in Cloudflare Analytics
- Optimize images and assets for web

This deployment provides enterprise-grade reliability with zero recurring hosting costs while maintaining full control over your infrastructure.
